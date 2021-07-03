import { useState , useEffect} from 'react';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { getPicturesByCountry, getPicturesByTag } from "../../actions/dbActions";
import Card from '../gallery/card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { pageVariant } from '../../assets/animation/animate';
const GallerySearch = () => {
    
    const {pathname} = useLocation();
    const [searchTitle,setSearchTitle] = useState('');
    const [pictures,setPictures] = useState([]);
    
    useEffect(() => {
        
       document.querySelector('nav').style.display = 'flex';
       document.querySelector('body').style.position='';

       const path = pathname.split('/');
       const searchTitle = (path[path.length-1]).split(' ')[0];
       setSearchTitle(searchTitle);
       let searchMethod = null;
       (path.includes('countries')) ? searchMethod = getPicturesByCountry : searchMethod = getPicturesByTag;

       const unsubscribe = searchMethod(searchTitle).onSnapshot(snapshot=>{
            let pictures = []
            snapshot.forEach(doc=>{
                pictures.push({id:doc.id,...doc.data()})
            })

            setPictures(pictures);
       })
      
       return () => unsubscribe();

    }, [searchTitle,pathname])

    return (
        <motion.div className="grid grid-cols-12 px-8 grap-1 pt-16  h-full w-full"
            variants={pageVariant}
            initial='hidden'
            animate= 'visible'
            exit='exit'
        >
            {
                pictures&&
                
                <div className='col-span-8 '>
                    <h1 className="uppercase text-indigo-white w-full lg:text-2xl sm:text-md mb-4 font-black tracking-wider mb-10 tracking-wider">
                        #{searchTitle}
                    </h1>
                    <div className="grid grid-cols-12 gap-4 ">
                        
                        {
                            pictures.map((picture,index)=>{
                                return(
                                    <Card 
                                        key={index}
                                        picture={picture}
                                        index={index}
                                    />
                                )
                            })
                        }
                        
                    </div>
                </div>
            }

            <div className='flex flex-col items-center text-center col-start-10 col-span-3 border-l border-gray-700 text-white'>
                <h2 className="w-full lg:text-xl sm:text-md mb-4 font-bold tracking-wider mt-7">
                    share a picture
                </h2>
                <Link to='/gallery/add'>
                    <button 
                            onClick={()=>{}}
                            className="flex justify-center items-center w-12 h-12 bg-indigo-dark hover:bg-indigo-medium lg:text-lg sm:text-xs text-indigo-white font-black uppercase tracking-wider py-2 px-4 rounded-full focus:outline-none"
                            >
                                <FontAwesomeIcon icon={faPlus} size='lg'/>
                    </button>
                </Link>                        
                
            </div>
        
     </motion.div>
    );
}
 
export default GallerySearch;