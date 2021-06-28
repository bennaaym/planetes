import { useGlobe } from '../../contexts/GlobeContext';

const CountryInfo = () => {
    const {currentCountry} =  useGlobe();
    return (
       <>
        {
            currentCountry &&
            <div 
                className="absolute z-50 "
                style={{top:currentCountry.y,left:currentCountry.x}}
            >
                <div className="flex items-center relative text-center	">
                    <div className="flex flex-col items-center justify-center bg-indigo-white  text-indigo-black font-semibold w-52 h-52 rounded-full">
                        <h4 className="text-lg uppercase font-black tracking-wider mb-2">
                            {currentCountry.name}
                        </h4>
                        <ul className="text-sm ">

                            <li className="mb-1">
                                <span className="mr-1 font-bold">capital:</span>
                                {currentCountry.capital}
                            </li>
                            <li  className="mb-1">
                            <span className="mr-1 font-bold">region:</span>
                                {currentCountry.region}
                            </li>
                            <li  className="mb-1">
                            <span className="mr-1 font-bold">population:</span>
                                {currentCountry.population}
                            </li>

                        </ul>                
                    </div>
                    <div className="relative -left-12 -top-20">
                        <img 
                            src={currentCountry.flag}
                            className="w-20 h-20 rounded-full"    
                            alt={currentCountry+"-flag"}
                        />
                    </div>
                </div>
            </div>
       }
       </>
    );
}
 
export default CountryInfo;