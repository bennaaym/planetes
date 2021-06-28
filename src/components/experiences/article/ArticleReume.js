import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp  } from "@fortawesome/free-solid-svg-icons"
import PublisherInfo from "./PublisherInfo";


const ArticleResume = ({article}) => {
    return (
        <>
          {article &&
            <Link to={`/experiences/${article.id}`}>
                <div className="text-indigo-white font-black mb-12">    
                    
                    <p className="uppercase lg:text-sm  sm:text-xs mb-2">
                        {article.country}
                    </p>
                    <h1 className="lg:text-4xl sm:text-xl mb-4 hover:text-indigo-light uppercase">
                        {article.title}
                    </h1>
                    <p className="lg:text-lg sm:text-sm font-medium text-gray-300 mb-4">
                        {
                            article.description.substring(0,200)
                        }
                    </p>
                    {   
                        article.tags &&
                        <ul className="flex items-center justify-start text-sm font-medium uppercase mb-5 ">
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
                    
                    <div className="flex items-center justify-between text-sm md:text-xs font-medium">
                        
                        <PublisherInfo
                            article={article}
                        />

                        <div className="flex items-center justify-between px-4 py-2 bg-gray-600 rounded-md relative lg:-left-3 lg:-top-2.5">
                            <div className="flex items-center justify-between mr-4 text-green-400">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                <span className="pl-1">{article.likes.length}</span>
                            </div>
                            <div className="flex items-center justify-between text-red-400">
                                <FontAwesomeIcon icon={faThumbsUp} rotation={180}/>
                                <span className="pl-1">{article.dislikes.length}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </Link>
            }
        </>
    );
}
 
export default ArticleResume;