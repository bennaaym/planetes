import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useLocation } from "react-router";
import DropDownMenu from './DropDownMenu';
import SearchBar from "../search/SearchBar";
import { motion } from "framer-motion";
const NavBar = () => {


    const {pathname} = useLocation();
    const {currentUser} = useAuth();
    
    const [absolute,setAbsolute] = useState(false);
    
    const links = [
        {label : 'gallery' , path : '/gallery'},
        {label : 'experiences' , path : '/experiences'},
        {label : 'about' , path:'about'},
    ]

    const logo = ['p','l','a','n','e','t','e','s'];

    useEffect(()=>{
        if(pathname === '/')
            setAbsolute(true)
        else
            setAbsolute(false);
    },[absolute,pathname]);

    return (
        <nav 
            className={` ${absolute?'absolute':'relative'} z-40 w-full flex flex-wrap justify-center md:justify-between items-center px-8 py-6 text-indigo-white font-black uppercase`}
        >
            
            <h1 className="text-3xl tracking-wider mb-4 md:mb-0">
                <Link to={'/'}>
                    {
                        logo.map((char,index)=>{
                            return(
                                <motion.div
                                    key={index}
                                    whileHover={{scale:1.3,rotate:(index%2===0)?-10:10}}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.div>
                            )
                        })
                    }
                </Link>
            </h1>

            <ul className="flex justify-center items-center text-sm tracking-wider font-bold">
                {
                    links.map((link,index)=>{
                        return(
                            <li 
                                className="mr-4"  
                                key={index}>
                                
                                <Link to={link.path}>{link.label}</Link>
                            
                            </li>
                            
                        )
                    })
                }
                <SearchBar/>

                {
                    !currentUser &&
                    <Link to={'/signin'}>
                        <button className="bg-indigo-light text-indigo-white text-sm font-bold tracking-wider uppercase px-6 py-2 ml-4 rounded-full focus:outline-none">
                                sign in
                        </button>
                    </Link>
                }

                {
                    currentUser&&
                    <DropDownMenu currentUser={currentUser}/>
                }


            </ul>
        </nav>
    );
}
 
export default NavBar;