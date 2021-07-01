import { useState,useRef } from "react";
import Alert from "../../sign/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import ProgressBar from "./ProgressBar";
import CountryList from "../../experiences/form/CountryList";
import TagBar from "../../experiences/form/TagBar";


const AddPicture = () => {

    const [error,setError] = useState('');
    const [loading, setLoading] = useState(false);

    const [tags,setTags] = useState([]);
    const country = useRef();
    const description = useRef();
    const file = useRef();


    const handleKeyDown = (event) =>{
        if(event.key === 'Enter')
        {
            event.preventDefault();
            return;
        }
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        const selectedFile = file.current.files[0]
        const allowedTypes = ['image/png','image/jpg','image/jpeg'];
        
        if(!(selectedFile && allowedTypes.includes(selectedFile.type)))
        {
            setError('please upload a valid image file');
            return;
        }
        setLoading(true);
        setError('');
    }

    return (
        <div className="h-full grid grid-cols-12 items-center justify-center ">
            <div className="flex flex-col items-center justify-center col-start-4 col-end-10 ">
                <h1 className="w-full text-indigo-white lg:text-3xl sm:text-2xl font-black tracking-wider uppercase mb-10">
                    add new picture
                </h1>
                <form 
                    onKeyDown={handleKeyDown}
                    onSubmit={handleSubmit}
                    className="w-full"
                >

                    <CountryList countryRef={country}/>


                    <textarea 
                        ref={description}
                        className="lg:text-lg sm:text-sm w-full h-32 py-2 px-3 mb-5 focus:outline-none resize-none rounded" 
                        placeholder="Description"
                        required
                        >
                        
                    </textarea> 

                    <TagBar tags={tags} setTags={setTags} />

                    <div className="flex justify-between items-center">
                        <div className="flex w-full  items-center justify-start bg-gray-lighter">
                            <label className="flex justify-between  items-center bg-indigo-white text-indigo-dark px-4 py-2 rounded cursor-pointer ">
                                <FontAwesomeIcon icon={faCloudUploadAlt} size='lg'/>
                                <span className="ml-2 lg:text-lg sm:text-sm uppercase">
                                        upload
                                </span>
                                <input 
                                    ref={file}
                                    type='file' 
                                    className="hidden" 
                                />
                            </label>
                        </div>

                        <button 
                            disabled={loading}
                            type="submit"
                            className=" bg-indigo-dark hover:bg-indigo-medium lg:text-lg  sm:text-sm text-indigo-white font-black uppercase tracking-wider py-2 px-4 rounded focus:outline-none"
                            >                        
                            publish
                        </button>
                    </div>

                    {
                        error &&
                        <Alert alert={error}/>
                    }

                    {
                        loading &&
                        <ProgressBar 
                            file={file.current.files[0]} 
                            country={country.current.value.toLowerCase()}
                            description = {description.current.value}
                            tags={tags}
                        />
                    }       

                </form>
            </div>
        </div>
    );
}
 
export default AddPicture;