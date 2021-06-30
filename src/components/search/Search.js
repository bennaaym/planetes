import { useState , useEffect} from 'react';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { getArticlesByTag, getArticlesByCountry } from "../../actions/dbActions";
import  ArticleResume from '../experiences/article/ArticleReume';

const Search = () => {
    
    const {pathname} = useLocation();
    const [searchTitle,setSearchTitle] = useState('');
    const [articles,setArticles] = useState([]);
    
    useEffect(() => {
       const path = pathname.split('/');
       const searchTitle = (path[path.length-1]).split(' ')[0];
       setSearchTitle(searchTitle);
       let searchMethod = null;
       (path.includes('countries')) ? searchMethod = getArticlesByCountry : searchMethod = getArticlesByTag;

       searchMethod(searchTitle)
       .then(snapshot=>{
            let articles = []
            snapshot.forEach(doc=>{
                articles.push({id:doc.id,...doc.data()})
            })

            setArticles(articles);
       })
       .catch(error=>{
       })

    }, [searchTitle,pathname])

    return (
        <div className="grid grid-cols-12 px-8 grap-1 pt-16 h-full w-full">
            <div className='col-span-8 '>
                <h1 className="uppercase text-indigo-white w-full lg:text-2xl sm:text-md mb-4 font-black tracking-wider mb-10 tracking-wider">
                    #{searchTitle}
                </h1>
                {
                    articles &&
                    articles.map((article)=>{
                        return (
                          
                            <ArticleResume 
                                key={article.id}
                                article={article}
                            />
                        )
                    })
                }
            </div>

            <div className='flex flex-col items-center text-center col-start-10 col-span-3 border-l border-gray-700 text-white'>
                <h2 className="w-full lg:text-xl sm:text-md mb-4 font-bold tracking-wider mt-7">
                    share your experience
                </h2>
                <Link to='/experiences/add'>
                    <button 
                            className="bg-indigo-dark hover:bg-indigo-medium lg:text-lg sm:text-xs text-indigo-white font-black uppercase tracking-wider py-2 px-4 rounded focus:outline-none"
                            >                        
                            add article
                    </button>
                </Link>   
                
            </div>
        
        </div>
    );
}
 
export default Search;