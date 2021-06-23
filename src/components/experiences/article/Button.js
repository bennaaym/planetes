import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({articleId,title,icon,votes,color,action,disable,agreed}) => {
    
    const {currentUser} = useContext(AuthContext);
   
    const handleClick = () =>{
        action(articleId,[currentUser.uid,...votes])
    }

    return (
        <div className={`flex items-center mr-4 ${agreed ?'':'opacity-25'}`}>
            <button 
                disabled={disable}
                onClick={handleClick}
                className={`flex items-center flex-row w-full p-2 px-6 bg-${color}-${disable?'600':'500'} ${!disable ? `hover:bg-${color}-600`:''} text-md rounded-l-full uppercase focus:outline-none`}>
                
                <FontAwesomeIcon icon={icon}/>
                <span className="ml-2">
                    {title}
                </span>
            </button>
            <span className={`p-2 px-4 bg-${color}-${disable? '600' : '400'} rounded-r-full text-md text-indigo-white font-medium`}>
                {votes.length}
            </span>
        </div>
    );
}
 
export default Button;