import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getArticlesByUser } from "../../actions/dbActions";
import  ArticleResume from '../experiences/article/ArticleReume';
import { useAuth } from '../../contexts/AuthContext';


const MyArticles = () => {
    
    const { currentUser } = useAuth(); 

    const [articles,setArticles] = useState([]);
    
    useEffect(() => {
       getArticlesByUser(currentUser.uid)
       .then(snapshot=>{
            let articles = []
            snapshot.forEach(doc=>{
                articles.push({id:doc.id,...doc.data()})
            })

            setArticles(articles);
       })
       .catch(error=>{
           console.log(error)
       })

    }, [currentUser])

    return (
        <div className="grid grid-cols-12 px-8 grap-1 pt-16 h-full w-full">
            <div className='col-span-8 '>
                <h1 className="uppercase text-indigo-white w-full lg:text-2xl sm:text-md mb-4 font-black tracking-wider mb-10 tracking-wider">
                    #my articles
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
 
export default MyArticles;