import { useState } from 'react';
import { signOut } from '../../actions/authAction';
import { useHistory } from 'react-router';

const DropDownMenu = ({currentUser}) => {
    
    const history = useHistory();
    const {photoURL,displayName} = currentUser;
    const [isActive,setIsActive] = useState(false);

    const handleSignOut = () =>{
        signOut()
        .then(res=>{
            history.push('/signin');
        })
        .catch(()=>{})
    }


    const options = [
        {label:'my articles',action:()=>{}},
        {label:'sign out',action:handleSignOut}
    ]
    
    return (
        <div 
            onClick={()=>{setIsActive(!isActive)}}
            className='relative w-full'>
            <button className="flex items-center justify-center h-10 w-10 bg-indigo-white rounded-full text-indigo-dark text-xl font-black focus:outline-none uppercase">
                {
                    !photoURL && displayName &&
                    <span>{displayName[0]}</span>
                }
                {
                    photoURL&&
                    <img
                        className='rounded-full' 
                        src={photoURL} 
                        alt='profile_picture'/>
                }
            </button>
            <ul className={`absolute top-14 -left-16 w-32  px-3 py-2 bg-indigo-white text-indigo-black  rounded ${isActive?'':'hidden'}`}>
                {
                    options.map((option,index)=>{
                        return (
                            <li 
                                key={index}
                                onClick={option.action}
                                className="mt-2 text-xs hover:text-indigo-medium cursor-pointer "
                            >
                                {option.label}
                            </li>)
                    })
                }
            </ul>
        </div>
    );
}
 
export default DropDownMenu;