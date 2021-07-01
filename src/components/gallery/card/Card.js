import { useEffect, useState  } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye, faHeart , faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import Overlay from "./Overlay";
import { updatePictureLikes, deletePicture } from "../../../actions/dbActions";
import { useAuth } from "../../../contexts/AuthContext";

const Card = ({picture,index}) => {

    const history = useHistory();
    const { currentUser } = useAuth();
    const [isAuthor,setIsAuthor] = useState(false);
    const [hasLiked , setHasLiked] = useState(false);
    const [isClicked,setIsClicked] = useState(false); 

    const colSpan = (index) =>{
       switch(index%9)
       {
           case 0:
               return '8';
           case 8 :
               return '12'; 
           default:
               return  '4';
       }
    }

    const rowSpan = (index) =>{ 
        switch(index%9)
        {
            case 1:
                return '2';
            case 2:
                return '2';
            case 5:
                return '2';
            default:
                return '1';
        }
    }


    useEffect(()=>{
        if(currentUser && picture.likes.find(id => currentUser.uid === id))
            setHasLiked(true);
        if(currentUser && currentUser.uid === picture.authorId)
            setIsAuthor(true);

    },[picture,currentUser,setHasLiked])

    const likeClicked = () =>{
        if(hasLiked)
        {
            updatePictureLikes(picture.id,picture.likes.filter(id=>currentUser.uid !== id));
            setHasLiked(false);
            return;
        }

        if(!currentUser)
        {
            history.push('/signin');
            return ;
        }

        updatePictureLikes(picture.id,[currentUser.uid,...picture.likes]);
    }


    const deleteClicked = () =>{
        if(window.confirm('Do you really want to delete this picture'))
            deletePicture(picture.id)
    }

    return (
        <>  
            <div className={`col-span-${colSpan(index)} row-span-${rowSpan(index)} relative`}>
                <img 
                    src={picture.url} 
                    className="object-cover w-full h-full rounded"    
                    alt=''
                />


                <div className="opacity-0 hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75">
                    <div className="flex flex-col justify-center items-center w-ful h-full">
                        <div className={`flex items-center justify-center  text-indigo-dark`}>
                            <button 
                                onClick={()=>setIsClicked(true)}
                                className="px-4 py-2 bg-opacity-85 hover:bg-opacity-100 bg-indigo-white rounded-lg  hover:text-indigo-light focus:outline-none mr-2 ">
                                <FontAwesomeIcon icon={faEye} size='lg'/>
                            </button>

                            <button 
                                onClick={likeClicked}
                                className={`px-4 py-2 bg-opacity-85 hover:bg-opacity-100 bg-indigo-white rounded-lg  ${hasLiked?'text-pink-500':'hover:text-indigo-light'} focus:outline-none`}>

                                <FontAwesomeIcon icon={faHeart} size='lg'/>
                            </button>

                            {
                                isAuthor&&
                                <button 
                                    onClick={deleteClicked}
                                    className="px-4 py-2 bg-opacity-85 hover:bg-opacity-100 bg-indigo-white rounded-lg  hover:text-indigo-light focus:outline-none ml-2 ">
    
                                    <FontAwesomeIcon icon={faTrashAlt} size='lg'/>
                                </button>
                            }
                        </div>
                        <h4 className="text-indigo-white text-xl uppercase mt-4 tracking-wider">
                            {picture.likes.length} likes
                        </h4>
                    </div>
                </div>
            </div>
            {
                isClicked&&
                <Overlay
                    picture={picture}
                    setIsClicked={setIsClicked}
                />
            }
        </>
    );
}
 
export default Card;