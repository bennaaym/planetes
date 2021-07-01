import { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { useHistory,useLocation } from "react-router";
import { useGlobe } from "../../contexts/GlobeContext";

const SearchBar = () => {

    const history = useHistory();
    const {pathname} = useLocation();
    const { data } = useGlobe();
    const searchRef = useRef();


    const handleSubmit=(event) =>{
        event.preventDefault();
        const keyword = searchRef.current.value.replace(/\W/ig, " ").split(' ')[0].toLowerCase();
        
        if(!keyword) return;
        
        const page  = pathname.split('/').includes('gallery') ? 'gallery' : 'experiences';
        const parameter = data.find(country=>country.name.toLowerCase() === keyword) ? 'countries' : 'tags';

        history.push(`/${page}/search/${parameter}/${keyword}`);
    }

    return (
        <>
            <div className="relative text-indigo-white mr-4">
               <form onSubmit={handleSubmit}>
                    <input 
                        ref={searchRef}
                        className=" bg-indigo-dark bg-opacity-25 h-10 px-5  rounded-lg text-sm focus:outline-none"
                        type="search" 
                        placeholder="Search : keyword"
                    />
                    <button type="submit" className="absolute right-0 -top-2 mt-5 mr-4 focus:outline-none">
                    <FontAwesomeIcon icon={faSearch}/>
                    </button>
               </form>
            </div>
        </>
    );
}
 
export default SearchBar;