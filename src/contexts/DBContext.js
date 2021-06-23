import { useState, useEffect, useContext, createContext } from "react";
import { getCollection } from "../actions/dbActions";

const DBContext = createContext();

export const useDB =()=>{
    return useContext(DBContext);
}


const DBContextProvider = ({children}) => {

    const [articles , setArticles] = useState([]);

    useEffect(() => {
        const unsubscribe = getCollection('articles').orderBy('createdAt','desc').onSnapshot(snapshot=>{            
            const articles = snapshot.docs.map(doc => {return {id:doc.id,...doc.data()}});
            setArticles([...articles]);
        })

        return () => unsubscribe();

    }, []);

    return (
        <DBContext.Provider value={{
            articles
        }}>
            {children}
        </DBContext.Provider>
    );
}
 
export default DBContextProvider