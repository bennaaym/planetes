import { useState, useEffect } from "react";
import { createContext } from "react";
import { getArticles } from "../actions/dbActions";

export const DBContext = createContext();

const DBContextProvider = ({children}) => {

    const [articles,setArticles] = useState([]);

    useEffect(() => {
        getArticles()
        .then((snapshot)=>{
            const articles = snapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id:doc.id,
                    ...data
                }
            });
            setArticles(articles);     
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])

    return (
        <DBContext.Provider value={{
            articles
        }}>
            {children}
        </DBContext.Provider>
    );
}
 
export default DBContextProvider;