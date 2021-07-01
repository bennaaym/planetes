import { useState, useEffect, useRef } from "react";
import Alert from "../../sign/Alert";
import { getCollection , editArticle } from "../../../actions/dbActions";
import  { useHistory , useLocation} from "react-router-dom"
import TagBar from "./TagBar";
import CountryList from "./CountryList";

const EditExperience = () => {

    const [error,setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [formLoaded,setFormLoaded] = useState(false);
    const country = useRef();
    const title = useRef();
    const description = useRef();


    const history = useHistory();
    const {pathname} = useLocation();
    const [tags,setTags] = useState([]);
    const [article,setArticle] = useState();

    useEffect(()=>{
        const articleId = pathname.substring(pathname.lastIndexOf('/')+1);

        const unsubscribe = getCollection('articles').doc(articleId).onSnapshot(snapshot=>{
            setArticle({id:articleId,...snapshot.data()});
        })

        if(!formLoaded && article)
        {
            setFormLoaded(true);
            country.current.value = article.country[0].toUpperCase() + article.country.slice(1);
            title.current.value = article.title;
            description.current.value = article.description;
            setTags(article.tags);
        }
    
        return () => unsubscribe();
    },[article,pathname,formLoaded]);

   

    const handleKeyDown = (event) =>{
        if(event.key === 'Enter')
        {
            event.preventDefault();
            return;
        }
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(window.confirm('Do you really want to modify this article ?'))
        {
            editArticle({
                ...article,
                country:country.current.value.toLowerCase(),
                title:title.current.value,
                description: description.current.value,
                tags,
            })
            .then(()=>{
                setLoading(true);
                setError('');
                history.push(`/experiences/article/${article.id}`);
            })
            .catch(error =>{
                setLoading(false);
                setError(error.message);
            })
        }
        else
        {
            history.push(`/experiences/article/${article.id}`);
        }
    }


    return (
        <>
        {
            !loading &&
            <div className="h-full grid grid-cols-12 items-center justify-center ">
            <div className="flex flex-col items-center justify-center col-start-4 col-end-10 ">
                <h1 className="w-full text-indigo-white lg:text-3xl sm:text-2xl font-black tracking-wider uppercase mb-10">
                    edit your experience
                </h1>
                <form 
                    onKeyDown={handleKeyDown}
                    onSubmit={handleSubmit}
                    className="w-full"
                >

                    <CountryList countryRef={country}/>


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

                    <TagBar tags={tags} setTags={setTags} />


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
    }</>
    );
}
 
export default EditExperience;