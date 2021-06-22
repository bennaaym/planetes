import { auth } from "../firebase/firebase";

export  const signUpWithEmailAndPassword = (email,password) =>{
    return auth.createUserWithEmailAndPassword(email,password);
}


export const signInWithEmailAndPassword = (email,password) =>{
    return auth.signInWithEmailAndPassword(email,password);
}



export const signOut = () =>{
    return auth.signOut();
}