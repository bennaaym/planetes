import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Alert = ({alert}) => {
    return (
        <div className=" flex w-full text-indigo-white px-6 py-4 border-0 rounded relative mt-4 bg-red-500">
            <span className="text-xl inline-block mr-5 align-middle">
                <FontAwesomeIcon icon={faBell} />
            </span>
            
            <span className="inline-block align-middle mr-8">
                {alert}
             </span>
        </div>
    );
}
 
export default Alert;