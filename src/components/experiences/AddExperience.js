import { useState,useRef } from "react";

const AddExperience = () => {

    const [loading, setLoading] = useState(false);
    const country = useRef();
    const title = useRef();
    const description = useRef();


    const handleSubmit=(event)=>{
        event.preventDefault();
        setLoading(true)
        console.log(
            country.current.value,
            title.current.value,
            description.current.value
        )
    }

    return (
        <div className="h-full grid grid-cols-12 items-center justify-center ">
            <div className="flex flex-col items-center justify-center col-start-4 col-end-10 pt-10">
                <h1 className="w-full text-indigo-white text-3xl font-black tracking-wider uppercase mb-10">
                    add new experience
                </h1>
                <form 
                    onSubmit={handleSubmit}
                    className="w-full"
                >

                    <input 
                        ref={country}
                        className="rounded w-full py-2 px-3 mb-5 leading-tight focus:outline-none focus:shadow-outline" 
                        type='text'
                        placeholder='Country'
                        required
                    />

                    <input 
                        ref={title}
                        className="rounded w-full py-2 px-3 mb-5 leading-tight focus:outline-none focus:shadow-outline" 
                        type='text'
                        placeholder='Title'
                        required
                    />
                    
                    <textarea 
                        ref={description}
                        className="w-full h-64 py-2 px-3 mb-5 focus:outline-none resize-none rounded" 
                        placeholder="Description"
                        required
                        >
                        
                    </textarea>

                    <button 
                        disabled={loading}
                        type="submit"
                        className=" bg-indigo-dark hover:bg-indigo-medium text-indigo-white font-black uppercase tracking-wider py-2 px-4 rounded focus:outline-none"
                        >                        

                        publish

                    </button>

                </form>
            </div>
        </div>
    );
}
 
export default AddExperience;