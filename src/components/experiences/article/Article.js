import { useState, useEffect, useContext } from "react";
import { useHistory , useLocation } from "react-router";
import { getCollection,deleteArticle } from "../../../actions/dbActions";
import { AuthContext } from "../../../contexts/AuthContext";
import Moment from "react-moment";
import RelatedArticles from "./RelatedArticles";
import Votes from "./Votes";

const Article = () => {

    const {currentUser} = useContext(AuthContext);

    const history = useHistory();
    const {pathname} = useLocation();
    const [article,setArticle] = useState();
    const [isLoading,setIsLoading] = useState(false);

    useEffect(()=>{
        const articleId = pathname.substring(pathname.lastIndexOf('/')+1);

        const unsubscribe = getCollection('articles').doc(articleId).onSnapshot(snapshot=>{
            setArticle({id:articleId,...snapshot.data()});
        })

        return () => unsubscribe();
    },[pathname]);


    const handleEdit = () =>{
        history.push(`/edit-experience/${article.id}`)
    }

    const handleDelete = () =>{
       if(window.confirm('Do you really want to delete this article'))
       {
           setIsLoading(true);
            deleteArticle(article.id)
            .then(()=>{
                history.push('/experiences');
            })
            .catch(error=>{})
       }
       else
       {
            history.push('/experiences')
       }
    }

    return (
        <>
        {
            article && !isLoading &&
            <div className="grid grid-cols-12 px-8 grap-1 pt-32 h-full">
            <div className='col-span-8'>
                <div className="text-indigo-white font-black mb-12">    

                    <p className="uppercase lg:text-sm sm:text-xs mb-2">
                        {article.country}
                    </p>
                    <h1 className="lg:text-4xl sm:text-xl mb-4 uppercase">
                        {article.title}
                    </h1>
                    <div className="flex sm:flex-wrap items-center justify-between text-sm font-medium mb-4">
                        <p className="italic tracking-wider relative top-1 text-xs">
                            by:
                            <span className="ml-2 text-gray-200 text-sm font-bold uppercase not-italic">
                                {article.author},
                            </span>
                            <span className="ml-2 text-gray-300">
                                <Moment fromNow>
                                    
                                            {article.createdAt? article.createdAt.toDate():''}
                                </Moment>
                            </span>

                        </p>
                        {   
                            article.tags &&
                            <ul className="flex items-center justify-start lg:text-sm sm:text-xs font-medium uppercase sm:mt-3 mb-3">
                                {article.tags.map((tag,index)=>{
                                    return (
                                        <li 
                                            key={index}
                                            className="bg-indigo-medium text-xs px-5 py-1 mr-2 rounded-full ">
                                            #{tag}
                                        </li>
                                    )
                                })}
                            </ul>
                        }
                    </div>

                    <p className="bg-indigo-white text-gray-800 lg:text-lg sm:text-sm font-medium text-gray-300 p-5 mb-4 rounded">
                        {
                            article.description
                        }
                    </p>

                    <div className="flex justify-between items-start">
                        <Votes article={article}/>
                        {
                            (currentUser && currentUser.uid === article.authorId)&&
                            <div>
                                <button 
                                    onClick={handleEdit}
                                    className=" bg-indigo-dark hover:bg-indigo-medium sm:text-xs text-indigo-white font-bold uppercase tracking-wider sm:mb-3  sm:w-full py-2 px-4 rounded focus:outline-none"
                                    >                        
                                    edit
                                </button>
                                <button 
                                    onClick={handleDelete}
                                    className="bg-indigo-dark hover:bg-indigo-medium sm:text-xs text-indigo-white font-bold uppercase tracking-wider py-2 px-4 sm:w-full rounded focus:outline-none"
                                    >                        
                                    delete
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center text-center col-start-10 col-span-3 border-l border-gray-700 text-white'>
                <RelatedArticles/>
            </div>
        </div>
        }
       </>
    );
}
 
export default Article;