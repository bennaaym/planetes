import { Link } from "react-router-dom";
import ArticleResume from "./article/ArticleReume";
import { useDB } from "../../contexts/DBContext";
import { motion } from "framer-motion";
import { pageVariant } from "../../assets/animation/animate";

const Experiences = () => {

    const {articles} = useDB(); 
    
    return (
      <>{
        articles&&
        <motion.div className="grid grid-cols-12 px-8 grap-1 pt-16 h-full w-full"
            variants={pageVariant}
            initial='hidden'
            animate= 'visible'
            exit='exit'
        >
            <div className='col-span-8'>
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
    
        </motion.div>
      }</>
    );
}
 
export default Experiences;