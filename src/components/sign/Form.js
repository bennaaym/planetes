import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Form = ({title}) => {

    const handleSubmit = (event) =>{
        event.preventDefault();
    }

    return (
        <div className="flex items-center justify-center h-full">
            <div className="h-96 w-96  px-4 py-10">
                <div className="flex  justify-between items-center  text-indigo-white  uppercase">
                    <h3 className="text-xl font-black tracking-wider">
                        login with social 
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
                <div className="flex justify-center items-center h-0.5 bg-indigo-white rounded-full my-10">
                    <span className="flex items-center justify-center h-12 w-12  bg-indigo-black rounded-full text-indigo-white font-black uppercase">
                        or
                    </span>
                </div>
                <form onSubmit={handleSubmit}>
                    <input  
                          className="rounded w-full py-2 px-3 mb-5 leading-tight focus:outline-none focus:shadow-outline" 
                          id="username" 
                          type="text" 
                          placeholder="Username"
                    />

                    <input  
                          className="rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                          id="password" 
                          type="password" 
                          placeholder="Password"
                    />
                    
                    <h6 className="text-sm text-indigo-white font-semibold tracking-wider text-right mb-5">
                        <Link to={'/signup'}>
                            I don't have an account
                        </Link>
                    </h6>

                    <button 
                        type="submit"
                        class="w-full bg-indigo-dark hover:bg-indigo-medium text-indigo-white font-black uppercase tracking-wider py-2 px-4 rounded focus:outline-none">
                        
                        {title}
                    </button>

                </form>
            </div>
        </div>
    );
}
 
export default Form;