import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Tags from "../../experiences/article/Tags";
import PublisherInfo from '../../experiences/article/PublisherInfo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import {  overlayVariant, cardVariant } from "../../../assets/animation/animate";

const Overlay = ({picture, setIsClicked}) => {

    const [showCard,setShowCard] = useState(true);

    useEffect(() => {
        document.querySelector('body').style.position='fixed';
        document.querySelector('nav').style.display ='none';
    }, [])

    const handleClick = (event) =>{
        if(event.target.id !== 'overlay') return;
        document.querySelector('nav').style.display = 'flex';
        document.querySelector('body').style.position='';

        setIsClicked(false);
    }


    return (
            <div 
                onClick={handleClick}
                className="fixed left-0 top-0 bottom-0 right-0 z-40"
                
                variants={overlayVariant}
                initial='hidden'
                animate= 'visible'
                exit='exit'    
            >
                <img
                    className="w-screen h-screen"
                    src={picture.url}
                    alt=''
                />

                <div
                    className="absolute z-50 top-0 bottom-0 left-0 right-0"
                >
                    <div 
                        id='overlay' 
                        className="flex h-full items-center justify-center"
                    >
                    {
                        !showCard&&
                        <button 
                                onClick={()=>setShowCard(true)}
                                className="opacity-75 focus:outline-none text-indigo-white">
                                <FontAwesomeIcon icon={faEye} size='2x'/>
                            </button>
                    }
                    {   
                        showCard&&
                        <motion.div className="flex flex-col w-1/2 px-3 py-2 rounded bg-indigo-white"
                            variants={cardVariant}
                            initial='hidden'
                            animate= 'visible'
                            exit='exit'    
                        >
                        <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center text-indigo-dark uppercase font-black tracking-wider">
                                    <Link to={`/gallery/search/countries/${picture.country}`}>
                                        <span className="mr-3 text-2xl">
                                            {picture.country}
                                        </span>
                                    </Link>
                                    <button 
                                        onClick={()=>setShowCard(false)}
                                        className="opacity-75 focus:outline-none">
                                        <FontAwesomeIcon icon={faEyeSlash} size='sm'/>
                                    </button>
                                </div>
                                <div className="relative  left-24 bg-indigo-dark px-2 py-1 rounded text-indigo-white">
                                    <PublisherInfo article={picture}/>
                                </div>
                            </div>
                            <p className="text-md mb-3">
                                {picture.description}
                            </p>
                        <div 
                            onClick={handleClick}
                            id='tag'
                            className="text-indigo-white">
                            <Tags tags={picture.tags} page='gallery'/>
                        </div>
                        </motion.div>
                        }
                    </div>
                </div>
            </div>
    );
}
 
export default Overlay;