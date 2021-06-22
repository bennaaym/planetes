export  const signUpWithEmailAndPassword = (auth,email,password) =>{
    return auth.createUserWithEmailAndPassword(email,password);
}


export const signInWithEmailAndPassword = (auth,email,password) =>{
    return auth.signInWithEmailAndPassword(email,password);
}