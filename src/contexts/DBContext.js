import { useState, useEffect } from "react";
import { createContext } from "react";
import { getArticles } from "../actions/dbActions";

export const DBContext = createContext();

const DBContextProvider = ({children}) => {

    const [articles,setArticles] = useState([]);

    useEffect(() => {
        getArticles()
        .then((snapshot)=>{
            const articles = snapshot.docs.map(doc => doc.data());
            setArticles(articles);     
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [articles])

    return (
        <DBContext.Provider value={{
            articles
        }}>
            {children}
        </DBContext.Provider>
    );
}
 
export default DBContextProvider;