import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getArticle } from "../../../actions/dbActions";
import Moment from "react-moment";
import RelatedArticles from "./RelatedArticles";
import Votes from "./Votes";

const Article = () => {

    const {pathname} = useLocation();
    const [article,setArticle] = useState();

    useEffect(()=>{
        const articleId = pathname.substring(pathname.lastIndexOf('/')+1);
        getArticle(articleId)
        .then(res=>{
           setArticle({id:articleId,...res.data()});
        })
        .catch(error=>console.log(error));
    },[pathname]);

    return (
        <>
        {   
            article &&
                <div className="grid grid-cols-12 px-8 grap-1 pt-32 h-full">
                    <div className='col-span-8'>
                        <div className="text-indigo-white font-black mb-12">    

                            <p className="uppercase text-sm mb-2">
                                {article.country}
                            </p>
                            <h1 className="text-4xl mb-4">
                                {article.title}
                            </h1>
                            <div className="flex items-center justify-between text-sm font-medium mb-4">
                                <p className="italic tracking-wider relative top-1 text-xs">
                                    by:
                                    <span className="ml-2 text-gray-200 text-sm font-bold uppercase not-italic">
                                        {article.author},
                                    </span>
                                    <span className="ml-2 text-gray-300">
                                        <Moment fromNow>
                                            
                                                    {article.createdAt.toDate()}
                                        </Moment>
                                    </span>

                                </p>
                                {   
                                    article.tags &&
                                    <ul className="flex items-center justify-start text-sm font-medium uppercase mb-3">
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

                            <p className="bg-indigo-white text-gray-800 text-lg font-medium text-gray-300 p-5 mb-4 rounded">
                                {
                                    article.description
                                }
                            </p>

                           <Votes article={article}/>


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