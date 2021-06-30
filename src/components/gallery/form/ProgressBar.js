import { useStorage } from "../../../hooks/useStorage";
import Alert from "../../sign/Alert";

const ProgressBar = ({file,country,description,tags}) => {

    const {progress,error} = useStorage({file,country,description,tags});

    const percentage = (progress) =>{
        if(progress > 0 && progress < 25) return '1/5';
        if(progress > 25 && progress < 50) return '1/4';
        if(progress > 50 && progress <75) return '1/3';
        if(progress > 75 && progress < 100 ) return '1/2';
        if(progress === 100) return 'full';
        return '';
    }

    return (
        <div>
            <div className={`w-${percentage(100)} bg-indigo-white p-1  mt-4 rounded-full`}>
            </div>
            <div className="text-indigo-white text-xs mt-1">
                {progress === 100 ? 'loaded' : 'loading...'}
            </div>
            {
                error && <Alert alert={error}/>
            }
        </div>
    );
}
 
export default ProgressBar;