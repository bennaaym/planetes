import { useState,useRef,useContext } from "react";
import Alert from "../sign/Alert";
import { addArticle } from "../../actions/dbActions";
import { AuthContext} from "../../contexts/AuthContext";
import  { useHistory} from "react-router-dom"

const AddExperience = () => {

    const {currentUser} = useContext(AuthContext);
    const history = useHistory();
    const [error,setError] = useState('');
    const [loading, setLoading] = useState(false);
    const country = useRef();
    const title = useRef();
    const description = useRef();

    const handleSubmit=(event)=>{
        event.preventDefault();
        addArticle({
            country:country.current.value,
            title:title.current.value,
            description: description.current.value,
            author:currentUser.displayName,
            authorId:currentUser.uid,
        })
        .then(()=>{
            setLoading(true);
            setError('');
            history.push('/experiences');
        })
        .catch(error =>{
            setLoading(false);
            setError(error.message);
        })
    }

    return (
        <div className="h-full grid grid-cols-12 items-center justify-center ">
            <div className="flex flex-col items-center justify-center col-start-4 col-end-10 pt-10">
                <h1 className="w-full text-indigo-white lg:text-3xl sm:text-2xl font-black tracking-wider uppercase mb-10">
                    add new experience
                </h1>
                <form 
                    onSubmit={handleSubmit}
                    className="w-full"
                >

                    <input 
                        ref={country}
                        className="lg:text-lg sm:text-sm rounded w-full py-2 px-3 mb-5 leading-tight focus:outline-none focus:shadow-outline" 
                        type='text'
                        placeholder='Country'
                        required
                    />

                    <input 
                        ref={title}
                        className="lg:text-lg sm:text-sm rounded w-full py-2 px-3 mb-5 leading-tight focus:outline-none focus:shadow-outline" 
                        type='text'
                        placeholder='Title'
                        required
                    />
                    
                    <textarea 
                        ref={description}
                        className="lg:text-lg sm:text-sm w-full h-64 py-2 px-3 mb-5 focus:outline-none resize-none rounded" 
                        placeholder="Description"
                        required
                        >
                        
                    </textarea>

                    <button 
                        disabled={loading}
                        type="submit"
                        className=" bg-indigo-dark hover:bg-indigo-medium lg:text-lg  sm:text-sm text-indigo-white font-black uppercase tracking-wider py-2 px-4 rounded focus:outline-none"
                        >                        
                        publish
                    </button>

                    {
                        error &&
                        <Alert alert={error}/>
                    }

                </form>
            </div>
        </div>
    );
}
 
export default AddExperience;