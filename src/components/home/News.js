import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useDB } from '../../contexts/DBContext';
import { Link } from 'react-router-dom';
const News = () => {

    const {articles}  = useDB();

    return (
        <div className="col-span-4  pl-4 pr-8 pt-36 h-screen" >

            <h1 className="text-xl font-black text-indigo-light uppercase tracking-wider mb-8">
                <FontAwesomeIcon icon={faFire}/>
                <span className="ml-3">
                    what's hot
                </span>
            </h1>

            <div className="news overflow-y-auto " >
                {
                    articles.slice(0,5).map((article,index)=>{
                        return(
                        <Link to={`/experiences/${article.id}`}>
                            <div
                                key={index}
                                className="font-bold mb-6"
                            >
                                <p className="text-xs text-indigo-300 uppercase tracking-widest mb-1">
                                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                    <span className="ml-1.5">
                                        {article.country}
                                    </span>
                                </p>
                            
                            
                                <h4 className="text-xl text-indigo-white hover:text-indigo-light cursor-pointer">
                                    {article.title}
                                </h4>
                            
                            
                                <p className="text-xs text-indigo-300 uppercase tracking-widest mt-2.5">
                                    {article.author}
                                </p>
                            
                            </div>
                        </Link>
                        )})   
                }
            </div>
        </div>
    );
}
 
export default News;