import { useState, useRef, useEffect }  from 'react';
import { addComment, getCommentsByArticle } from '../../../../actions/dbActions';
import { useAuth} from '../../../../contexts/AuthContext';
import Comment from './Comment';
const Comments = ({article}) => {

    const { currentUser } = useAuth();
    const commentRef = useRef();
    const [comments , setComments] = useState([]);

    useEffect(()=>{
        const unsubscribe = getCommentsByArticle(article.id)
        .onSnapshot(snapshot=>{
           let comments = []
           snapshot.forEach(doc=>{
               comments.push({id:doc.id,...doc.data()})
           })
           setComments(comments);
        })

        return () => unsubscribe();
   })

    const handleKeyDown = (event) =>{
        if(event.key !== 'Enter') return;
        const commentValue = commentRef.current.value;
        if (!commentValue) return;

        addComment({
            articleId:article.id,
            content:commentValue,
            authorId:currentUser.uid,
            author:currentUser.displayName,
        })
        
        commentRef.current.value="";
    }   

 
    return (  
        <div className="mt-10">
           <h1 className="text-3xl mb-4 font-bold tracking-wider">
               Comments
           </h1>
            <textarea 
                ref={commentRef}
                onKeyDown={handleKeyDown}
                className="lg:text-lg sm:text-sm text-gray-700 w-full h-16 py-2 px-3 mb-5 focus:outline-none resize-none rounded" 
                placeholder={!currentUser? 'Please, sign in to leave a comment':'Write a comment'}
                disabled={!currentUser}
                >       
            </textarea>
            <ul className="flex flex-col items-start mt-10">
               {
                  comments.map(comment=>{
                      return(
                          <li key={comment.id} className="w-full h-full mb-16">                
                            <Comment comment={comment}/>
                          </li>
                      )
                  })
               }
            </ul>
        </div>
    );
}
 
export default Comments;