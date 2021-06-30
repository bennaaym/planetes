import { Link } from 'react-router-dom';

const Tags = ({tags}) => {
    return (
        <ul className="flex items-center justify-start lg:text-sm sm:text-xs font-medium uppercase sm:mt-3 mb-3">
            {tags.map((tag,index)=>{
                return (
                <Link
                    key={index}
                    to={`/experiences/search/tags/${tag}`}
                >
                     <li  
                        className="bg-indigo-medium hover:bg-indigo-light text-xs px-5 py-1 mr-2 rounded-full ">
                        #{tag}
                    </li>
                </Link>
                )
            })}
        </ul>
    );
}
 
export default Tags;