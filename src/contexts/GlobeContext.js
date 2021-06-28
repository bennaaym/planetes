import { useState , useEffect , createContext, useContext} from "react";
import axios from 'axios';


export const GlobeContext = createContext();


export const useGlobe = () => useContext(GlobeContext);

const GlobeContextProvider = ({children}) => {
    
    const API = process.env.REACT_APP_GLOBE_API;
    const [data,setData] = useState([]);
    const [currentCountry,setCurrentCountry] = useState(null);

    useEffect(()=>{
        
        axios.get(API)

        .then((res)=>{

           const countries = res.data.map((country) => {
              return {
                  name : country.name,
                  capital : country.capital,
                  region : country.region,
                  population : country.population,
                  flag : country.flag,
                  coord : {
                            latitude : country.latlng[0],
                            longitude : country.latlng[1],
                        }
              }
           })

           setData(countries);
        })

        .catch((error)=>{
            console.log(error);
        })

    },[API,setData])


    return(
        <GlobeContext.Provider value={{
            data,
            currentCountry,
            setCurrentCountry,
        }}>
            {children}
        </GlobeContext.Provider>
    )
}


export default GlobeContextProvider;
