import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useFirestoreCollection } from '../../hooks/useFirestoreCollection';

const Gallery = () => {
    
    const { docs } = useFirestoreCollection('gallery')

    return (
        <div className="grid grid-cols-12 px-8 grap-1 pt-16 h-full w-full">
            <div className='col-span-8'>
                <div>
                    {
                        docs.map(doc=>{
                            return(
                                <img
                                    key={doc.id}
                                    src={doc.url} 
                                    alt='img'
                                />
                            )
                        })
                    }
                </div>
            </div>

            <div className='flex flex-col items-center text-center col-start-10 col-span-3 border-l border-gray-700 text-white'>
                <h2 className="w-full lg:text-xl sm:text-md mb-4 font-bold tracking-wider mt-7">
                    share a picture
                </h2>
                <button 
                        onClick={()=>{}}
                        className="flex justify-center items-center w-12 h-12 bg-indigo-dark hover:bg-indigo-medium lg:text-lg sm:text-xs text-indigo-white font-black uppercase tracking-wider py-2 px-4 rounded-full focus:outline-none"
                        >
                        <Link to='add-picture'>
                            <FontAwesomeIcon icon={faPlus} size='lg'/>
                        </Link>                        
                </button>
                
            </div>
        
        </div>
    );
}
 
export default Gallery;