import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace} from '@fortawesome/free-solid-svg-icons';

const TagBar = ({tags, setTags}) => {
    
    const tagRef = useRef();

    const handleKeyDown = (event) =>{
        if(event.key === 'Enter')
        {
            const tag = tagRef.current.value
            tagRef.current.value = '';
    
            if(tags.includes(tag) || tag==='') return;
            setTags([...tags,tag])
        }
    }

    const handleClick = (event) =>{
        const tag = event.currentTarget.id
        const newTags = tags.filter(elem => elem !== tag);
        setTags(newTags);
    }

    return (
        <div className="mb-7 flex items-center  flex-wrap text-indigo-white">
            <label className="font-medium tracking-wide text-md uppercase mr-4">
                add some tags :
            </label>
             {   
                tags &&
                <ul className="flex items-center justify-start lg:text-sm sm:text-xs font-medium uppercase sm:mt-3 mb-3">
                    {tags.map((tag,index)=>{
                        return (
                            <li 
                                onClick={handleClick}
                                key={index}
                                id={tag}
                                className="flex items-center justify-between  cursor-pointer bg-indigo-medium text-xs px-4 py-2 mr-4 rounded-full ">
                                <span className="mr-2 font-medium">#{tag}</span>
                                <FontAwesomeIcon 
                                    icon={faBackspace} 
                                    size='lg'  
                                />
                            </li>
                        )
                    })}
                </ul>
            }
            {
                (tags.length<3)&&
                <input 
                ref={tagRef}
                onKeyDown={handleKeyDown}
                className="w-20 text-md  text-indigo-black rounded focus:outline-none px-3 py-1"
                placeholder=" # Tag"
                type='text'
                />
            }
        </div>
    );
}
 
export default TagBar;