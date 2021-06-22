import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp  } from "@fortawesome/free-solid-svg-icons"

const Article = ({article}) => {
    return (
        <div className="text-indigo-white font-black mb-12">
            <p className="uppercase text-sm mb-2">
                {article.country}
            </p>
            <h1 className="text-4xl mb-4">
                {article.title}
            </h1>
            <p className="text-lg font-medium text-gray-300 mb-4">
                {article.description}
            </p>
            <ul className="flex items-center justify-start text-sm font-medium uppercase mb-3">
                {article.tags.map((tag,index)=>{
                    return (
                        <li 
                            key={index}
                            className="bg-indigo-medium px-5 py-1 mr-2 rounded-full ">
                            #{tag}
                        </li>
                    )
                })}
            </ul>
            
            <div className="flex items-center justify-between text-sm font-medium">
                <p className="italic tracking-wider relative top-1">
                    by:
                    <span className="ml-2 text-gray-200">
                        {article.author},{article.date}
                    </span>
                </p>
                <div className="flex items-center justify-between px-4 py-2 bg-gray-600 rounded-md relative -left-3 -top-2.5">
                    <div className="flex items-center justify-between mr-4 text-green-400">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span className="pl-1">{article.like}</span>
                    </div>
                    <div className="flex items-center justify-between text-red-400">
                        <FontAwesomeIcon icon={faThumbsUp} rotation={180}/>
                        <span className="pl-1">{article.dislike}</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Article;