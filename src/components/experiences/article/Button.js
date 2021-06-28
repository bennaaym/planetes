import { useAuth } from "../../../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";

const Button = ({articleId,title,icon,votes,color,action,disable,agreed}) => {
    
    const history = useHistory();
    const {currentUser} = useAuth();
   
    const handleClick = () =>{
        if(!currentUser) 
        {
            history.push('/signin');
            return;
        }
        action(articleId,[currentUser.uid,...votes])
    }

    return (
        <div className={`flex  items-center mr-4 ${agreed ?'':'opacity-25'} sm:mb-3 sm:w-full `}>
            <button 
                disabled={disable}
                onClick={handleClick}
                className={`flex items-center flex-row lg:w-1/3 md:w-1/2 sm:w-full p-2 px-6 bg-${color}-${disable?'600':'500'} ${!disable ? `hover:bg-${color}-600`:''} lg:text-md sm:text-sm rounded-l-full uppercase focus:outline-none`}>
                
                <FontAwesomeIcon icon={icon}/>
                <span className="ml-2">
                    {title}
                </span>
            </button>
            <span className={`p-2 px-4 bg-${color}-${disable? '600' : '400'} rounded-r-full lg:text-md sm:text-sm text-indigo-white font-medium`}>
                {votes.length}
            </span>
        </div>
    );
}
 
export default Button;