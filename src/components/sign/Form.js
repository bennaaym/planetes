import { useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Alert from './Alert';
import { signUpWithEmailAndPassword, signInWithEmailAndPassword } from '../../actions/authAction';
import { addUser } from '../../actions/dbActions';


const Form = ({title,signin}) => {

    const history = useHistory();

    const username = useRef()
    const email = useRef();
    const password = useRef();
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    const handleSubmit = (event) =>{
        
        event.preventDefault();
        let user = { email : email.current.value,password : password.current.value}
        
        if(!signin)
        {
            user.name = username.current.value;
            signUpWithEmailAndPassword(user.email,user.password)
            .then((res)=>{
                setError('');
                setLoading(true);
                addUser(res.user.uid,user);
                history.push('/');
            })
            .catch((error)=>{
                setLoading(false);
                setError(error.message);
            })
        
        }
        else
        {
            signInWithEmailAndPassword(user.email,user.password)
            .then((res)=>{
                setError('');
                setLoading(true);
                history.push('/');
            })
            .catch((error)=>{
                setLoading(false);
                setError(error.message);
            })
        }
         
    }

    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-0 py-10 lg:w-1/3 md:w-1/2">
                <div className="flex  justify-between items-center  text-indigo-white  uppercase">
                    <h3 className="text-xl font-black tracking-wider">
                        {title} with social 
                    </h3>
                    <div>
                        <button className="mr-3 focus:outline-none">
                            <FontAwesomeIcon icon={faGithub} size='2x'/>
                        </button>
                        <button className="focus:outline-none">
                            <FontAwesomeIcon icon={faGoogle} size='2x'/>
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center h-0.5 bg-indigo-white rounded-full my-12">
                    <span className="flex items-center justify-center h-12 w-12  bg-indigo-black rounded-full text-indigo-white font-black uppercase">
                        or
                    </span>
                </div>
                <form  
                    className="flex flex-col justify-center items-center"
                    onSubmit={handleSubmit}>
                     {
                        !signin &&
                        <input  
                            ref={username}
                            className="rounded w-full py-2 px-3 mb-5 leading-tight focus:outline-none focus:shadow-outline" 
                            id="username" 
                            type="text" 
                            placeholder="Username"
                            required
                        />
                    }

                    
                    <input  
                        ref={email}
                        className="rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" 
                        type="email" 
                        placeholder="Email"
                        required
                    />

                    <input  
                          ref={password}
                          className="rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                          id="password" 
                          type="password" 
                          placeholder="Password"
                          required
                    />
                    
                    <h6 className="w-full items-end text-sm text-indigo-white font-semibold tracking-wider text-right mb-5">
                        {
                            !signin ? (
                                <Link to={'/signin'}>
                                    I already have an account
                                </Link>
                            ):(
                                <Link to={'/signup'}>
                                    I don't have an account
                                </Link>
                            )
                        }
                       
                    </h6>

                    <button 
                        disabled={loading}
                        type="submit"
                        className="w-full bg-indigo-dark hover:bg-indigo-medium text-indigo-white font-black uppercase tracking-wider py-2 px-4 rounded focus:outline-none">
                        
                        {title}
                    </button>
                    
                    {
                        error && <Alert alert={error}/>
                    }
                   
                </form>
            </div>
        </div>
    );
}
 
export default Form;