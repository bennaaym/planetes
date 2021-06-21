export  const signUpWithEmailAndPassword = (auth,email,password) =>{
    return auth.createUserWithEmailAndPassword(email,password);
}