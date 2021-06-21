import { useState, useEffect, createContext } from "react";
import {auth} from '../firebase/firebase';


export const AuthContext = createContext();


const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user)=>{
           setCurrentUser(user);
           setLoading(false);
        })
         
     
        return unsubscribe
     }, [])
     

    return (
        <AuthContext.Provider value={{
            currentUser,
        }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
 
export default AuthContextProvider;