import { useState, useEffect, useContext, createContext } from "react";
import {auth} from '../firebase/firebase';
import { getUser } from "../actions/dbActions";

export const AuthContext = createContext();

export const useAuth = () =>{
    return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user)=>{
          if(user)
          {
            setCurrentUser(user);
            getUser(user.uid)
            .then(res=>{
               setCurrentUser({
                   ...user,
                   displayName:res.data().name
               })
            })
            .catch(error=>{});
          }
          if(!user) setCurrentUser(user);
          setLoading(false);
        })
         
     
        return () => unsubscribe()
     }, [])
     

    return (
        <AuthContext.Provider value={{
            currentUser,
            setCurrentUser
        }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
 
export default AuthContextProvider;