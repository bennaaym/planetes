import { useState, useEffect } from "react";
import { useHistory , useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { getCollection,deleteArticle } from "../../../actions/dbActions";
import { useAuth } from "../../../contexts/AuthContext";
import RelatedArticles from "./RelatedArticles";
import PublisherInfo from "./PublisherInfo";
import Votes from "./Votes";
import Tags from "./Tags";
import Comments from "./comments/Comments";

const Article = () => {

    const {currentUser} = useAuth();

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
    }

    return (
        <>
        {
            article && !isLoading &&
            <div className="grid grid-cols-12 px-8 grap-1 pt-16 h-full">
            <div className='col-span-8'>
                <div className="text-indigo-white font-black mb-12">    
                    
                    <Link to={`/experiences/search/countries/${article.country}`}>
                        <p className="hover:text-indigo-light uppercase lg:text-sm  sm:text-xs mb-2">
                            {article.country}
                        </p>
                    </Link>

                    <h1 className="lg:text-4xl sm:text-xl mb-4 uppercase">
                        {article.title}
                    </h1>
                    <div className="flex sm:flex-wrap items-center justify-between text-sm font-medium mb-4">
                        <PublisherInfo
                            article={article}
                        />
                        {   
                            article.tags &&
                            <Tags tags={article.tags} page='experiences'/>
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
                                <Link to={`/experiences/edit/${article.id}`}>
                                    <button 
                                        className=" bg-indigo-dark hover:bg-indigo-medium sm:text-xs text-indigo-white font-bold uppercase tracking-wider sm:mb-3  sm:w-full py-2 px-4 rounded focus:outline-none"
                                        >                        
                                        edit
                                    </button>
                                </Link>
                                <button 
                                    onClick={handleDelete}
                                    className="bg-indigo-dark hover:bg-indigo-medium sm:text-xs text-indigo-white font-bold uppercase tracking-wider py-2 px-4 sm:w-full rounded focus:outline-none"
                                    >                        
                                    delete
                                </button>
                            </div>
                        }
                    </div>

                    <Comments article={article}/>
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