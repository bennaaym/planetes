import { useState , useEffect , createContext} from "react";
import axios from 'axios';


export const GlobeContext = createContext();


const GlobeContextProvider = ({children}) => {
    
    const API = 'https://restcountries.eu/rest/v2/';
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

    },[setData])


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
