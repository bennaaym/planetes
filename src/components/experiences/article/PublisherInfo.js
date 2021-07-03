import { useEffect } from "react";
import Moment from "react-moment";
import { useState } from "react/cjs/react.development";
import { getUser } from "../../../actions/dbActions";

const PublisherInfo = ({article}) => {

    const [authorPicture,setAuthorPicture] = useState(null);
    const {author,createdAt} = article

    useEffect(() => {
        if(article.authorId)
        {
            getUser(article.authorId)
            .then(res=>{
                setAuthorPicture(res.data().picture);
            })
            .catch(error=>{});
        }
    }, [article,setAuthorPicture])
    
    return (
        <>{
            author &&  createdAt &&
            <div className="flex items-center justify-center uppercase">
                
                {
                    !authorPicture&&
                    <div className="flex items-center justify-center h-10 w-10 bg-indigo-white rounded-full text-indigo-dark text-xl font-black focus:outline-none">
                        <span>{author[0]}</span>                   
                    </div>
                }
                {   authorPicture&&
                     <div className="flex items-center justify-center h-10 w-10  rounded-full focus:outline-none">
                        <img 
                            className="rounded-full"
                            src={authorPicture} 
                            alt='author_picture'/>
                     </div>
                      
                }
         
                <div className="flex flex-col justify-center items-start text-xs ml-2 ">
                    <span className="font-bold">
                        {   author}
                    </span>
                    <span className="text-xs lowercase text-gray-300">
                        <Moment fromNow>
                                    {createdAt.toDate()}
                        </Moment>
                    </span>
                </div>
            </div>
        }</>
    );
}
 
export default PublisherInfo;

