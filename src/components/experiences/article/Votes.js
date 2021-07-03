import { useState,useEffect } from "react";
import {  useAuth } from "../../../contexts/AuthContext";
import Button from "./Button";
import {faThumbsUp,faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import { updateArticleLikes,updateArticleDislikes } from "../../../actions/dbActions";

const Votes = ({article}) => {
    

    const {currentUser} = useAuth();
    const [disable,setDisable] = useState(false);
    const [hasAgreed,setHasAgreed] = useState(false);
    const [isAuthor,setIsAuthor] = useState(false);

    useEffect(()=>{

      if(currentUser)
      {

        if(currentUser.uid === article.authorId)
        {
            setIsAuthor(true);
            setDisable(true);
            return;
        }

        let hasVoted = article.likes.find(id => currentUser.uid === id);
        if(hasVoted) setHasAgreed(true);
        if(!hasVoted)  hasVoted = article.dislikes.find(id => currentUser.uid === id);
        if(hasVoted) setDisable(true);
      }

    },[currentUser,disable,article,hasAgreed])


    return (
        <>
        {
            article &&
            <div className="flex flex-col  :w-full">
            <div className="flex  flex-wrap md:flex-no-wrap">
                <Button 
                    articleId={article.id}
                    title={'I agree'}  
                    icon={faThumbsUp} 
                    color={'green'} 
                    votes={article.likes}
                    action={updateArticleLikes}
                    disable={disable}
                    agreed={!isAuthor && (hasAgreed || !disable)}
                />

                <Button 
                    articleId={article.id}
                    title={'I disagree'}  
                    icon={faThumbsDown} 
                    color={'red'} 
                    votes={article.dislikes}
                    action={updateArticleDislikes}
                    disable={disable}
                    agreed={!isAuthor&&!hasAgreed}
                />
            </div>
            {
                disable&&!isAuthor&&
                <p className={`text-xs font-light text-${hasAgreed?'green':'red'}-600 mt-2 ml-2`}>
                you already {hasAgreed? 'agreed':'disagreed'}  with this content.
            </p>
            }
        </div>}</>
    );
}
 
export default Votes;