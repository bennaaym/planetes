import Scene from '../../3D/Scene';
import { useGlobe } from '../../contexts/GlobeContext';
import { useHistory } from 'react-router';

const GlobeModel = () => {

    const history = useHistory();
    const {currentCountry , setCurrentCountry} =  useGlobe();

    const handleClick = () =>{
        if(!currentCountry) return;
        const name = currentCountry.name.toLowerCase();
        setCurrentCountry(null);
        history.push(`/experiences/search/countries/${name}`);
    }

    return (
        <div 
            onClick={handleClick}
            className={`h-full col-span-8 ${currentCountry?'cursor-pointer':''}`}>
            <Scene/>
        </div>
    );
}
 
export default GlobeModel;