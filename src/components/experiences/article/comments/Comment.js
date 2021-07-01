import { useEffect } from "react";
import Moment from "react-moment";
import { useState } from "react/cjs/react.development";
import { getUser } from "../../../../actions/dbActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart , faTrashAlt} from '@fortawesome/free-solid-svg-icons';
const Comment = ({comment}) => {

    const [authorPicture,setAuthorPicture] = useState(null);
    const {author,createdAt} = comment

    useEffect(() => {
        if(comment.authorId)
        {
            getUser(comment.authorId)
            .then(res=>{
                setAuthorPicture(res.data().picture);
            })
            .catch(error=>{});
        }
    }, [comment,setAuthorPicture])
    
    return (
        <>{
            author &&  createdAt &&
            <div className="flex h-full items-center justify-center w-full  bg-opacity-90 bg-indigo-white  font-bold tracking-wider rounded">
                <div className="w-16 mr-2 relative">
                    <img src={authorPicture} className="comment-img "/>
                </div>
                <p className="flex h-full items-center px-4 w-full  break-words  text-sm text-gray-800 ">
                    <span>{comment.content}</span>
                    <button 
                        onClick={()=>''}
                        className="px-4 py-2 bg-opacity-85 hover:bg-opacity-100 bg-indigo-white rounded-lg  hover:text-indigo-light focus:outline-none mr-2 ">
                        <FontAwesomeIcon icon={faHeart} size='lg'/>
                    </button>
                </p>
            </div>
        }</>
    );
}
 
export default Comment;

