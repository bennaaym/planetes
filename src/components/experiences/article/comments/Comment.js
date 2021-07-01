import { useEffect } from "react";
import Moment from "react-moment";
import { useState } from "react/cjs/react.development";
import { deleteComment, getUser, updateCommentLikes } from "../../../../actions/dbActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart , faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../../../contexts/AuthContext';
import { useHistory } from "react-router";

const Comment = ({comment}) => {

    const history = useHistory();
    const [authorPicture,setAuthorPicture] = useState(null);
    const {author,createdAt} = comment;
    const [hasLiked,setHasLiked] = useState(false);
    const [isAuthor,setIsAuthor] = useState(false);
    const {currentUser} = useAuth();

    useEffect(() => {

        if(comment.authorId)
        {
            getUser(comment.authorId)
            .then(res=>{
                setAuthorPicture(res.data().picture);
            })
            .catch(error=>{});
        }
        if(!currentUser) return;
        if(comment.likes.find(id=>currentUser.uid === id)) setHasLiked(true);
        if(currentUser.uid === comment.authorId) setIsAuthor(true);

    }, [comment,setAuthorPicture,currentUser])
    

    const onLikeClicked = () =>{
        if(!currentUser) 
        {
            history.push('/signin');
            return;
        }
        if(hasLiked)
        {
            updateCommentLikes(comment.id,comment.likes.filter(id=>currentUser.uid !== id));
            setHasLiked(false);
            return;
        }
        updateCommentLikes(comment.id,[currentUser.uid,...comment.likes])

    }

    const onDeleteClicked = () =>
    {   
        if(window.confirm('Do you really want to delete this picture'))
            deleteComment(comment.id);
    }

    return (
        <>{
            author &&  createdAt &&
            <div className="flex h-full items-center justify-center w-full  bg-opacity-90 bg-indigo-white  font-bold tracking-wider rounded">
                <div className="w-16 mr-2 relative">
                    <img src={authorPicture} className="relative -top-10 -left-5 rounded-lg " alt=''/>
                    <div className="absolute -top-6 left-12 w-96 text-xs font-light" >
                        <span className="font-medium">{comment.author} | </span>
                        <Moment fromNow>{comment.createdAt.toDate()}</Moment>
                    </div>
                </div>
                <div className="flex h-full w-full items-center justify-between  text-gray-800 ">
                    <p className=" w-full  break-words  text-md tracking-wide font-light">
                        {comment.content}
                    </p>
                   <div className="flex flex-col relative">
                         <div className="flex flex-row">
                            <button 
                                onClick={onLikeClicked}
                                className={`px-4 py-2 bg-opacity-85 hover:bg-opacity-100 bg-indigo-white rounded-lg  ${hasLiked?'text-pink-500':'hover:text-indigo-light'} focus:outline-none mr-2 `}>
                                <FontAwesomeIcon icon={faHeart} size='sm'/>
                            </button>
                           {
                               isAuthor&&
                               <button 
                                onClick={onDeleteClicked}
                                className="px-4 py-2 bg-opacity-85 hover:bg-opacity-100 bg-indigo-white rounded-lg  hover:text-indigo-light focus:outline-none mr-2 ">
                                    <FontAwesomeIcon icon={faTrashAlt} size='sm'/>
                                </button>
                           }
                        </div>
                      
                        <span  className="text-xs font-light absolute -bottom-8 left-0 text-indigo-white uppercase">
                            {comment.likes.length} likes
                        </span>
                   </div>
                </div>
            </div>
        }</>
    );
}
 
export default Comment;

