import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getPicturesByUser,  } from "../../actions/dbActions";
import Card from '../gallery/card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../contexts/AuthContext';

const MyPictures = () => {
    
    const { currentUser } = useAuth(); 

    const [pictures,setPictures] = useState([]);
    
    useEffect(() => {
       getPicturesByUser(currentUser.uid)
       .onSnapshot(snapshot=>{
            let pictures = []
            snapshot.forEach(doc=>{
                pictures.push({id:doc.id,...doc.data()})
            })

            setPictures(pictures);
       })
    }, [currentUser])

    return (
        <div className="grid grid-cols-12 px-8 grap-1 pt-16  h-full w-full">
            {
                pictures&&
                
                <div className='col-span-8 '>
                    <h1 className="uppercase text-indigo-white w-full lg:text-2xl sm:text-md mb-4 font-black tracking-wider mb-10 tracking-wider">
                        #my pictures
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
        
     </div>
    );
}
 
export default MyPictures;