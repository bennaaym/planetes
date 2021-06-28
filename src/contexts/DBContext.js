import {  useContext, createContext } from "react";
import { useFirestoreCollection } from "../hooks/useFirestoreCollection";


const DBContext = createContext();

export const useDB =()=>{
    return useContext(DBContext);
}


const DBContextProvider = ({children}) => {

    const { docs } = useFirestoreCollection('articles');

    

    return (
        
        <DBContext.Provider value={{
            articles:docs
        }}>
            {children}
        </DBContext.Provider> 
    );
}
 
export default DBContextProvider