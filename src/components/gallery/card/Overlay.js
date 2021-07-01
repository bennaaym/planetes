import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Tags from "../../experiences/article/Tags";
import PublisherInfo from '../../experiences/article/PublisherInfo';

const Overlay = ({picture, setIsClicked}) => {

  

    useEffect(() => {
        document.querySelector('body').style.overflow = 'hidden';
    }, [])

    const handleClick = (event) =>{
        if(event.target.id !== 'overlay') return;
        document.querySelector('body').style.overflow = 'auto';
        setIsClicked(false);
    }



    return (
        <>
            <div 
                onClick={handleClick}
                className="bg-opacity-75 bg-gray-900 fixed top-0 bottom-0 right-0 left-0 z-50 ">
                    
                <div 
                    id='overlay'
                    className="flex h-full w-full items-center justify-center ">
                  
                    <div className="flex  h-1/2 w-1/2 relative">
                        <div className="bg-indigo-white absolute  px-4 py-2 -top-10 -left-14 rounded-lg">
                            <PublisherInfo article={picture}/>
                        </div>
                        <img
                            className="object-cover rounded-lg  "
                            src={picture.url}
                            alt=''
                        />
                        <div className=" absolute -bottom-20 -right-10 bg-indigo-white px-4 py-2 text-indigo-white rounded-lg">
                    
                            <Link to={`/gallery/search/countries/${picture.country}`}>
                                <h1 className="text-lg font-black text-indigo-dark uppercase">
                                    {picture.country}
                                </h1>
                            </Link>
                          

                            <p className="w-64 my-4 text-gray-900 text-md">
                                {picture.description}
                            </p>
                            <Tags tags={picture.tags} page='gallery'/>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}
 
export default Overlay;