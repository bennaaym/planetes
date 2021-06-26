import { auth, googleAuthProvider, gitAuthProvider } from "../firebase/firebase";

export  const signUpWithEmailAndPassword = (email,password) =>{
    return auth.createUserWithEmailAndPassword(email,password);
}


export const signInWithEmailAndPassword = (email,password) =>{
    return auth.signInWithEmailAndPassword(email,password);
}


export const signWithGoogle = () =>{
    return auth.signInWithPopup(googleAuthProvider);
}

export const signWithGithub = () =>{
    return auth.signInWithPopup(gitAuthProvider);
}



export const signOut = () =>{
    return auth.signOut();
}
