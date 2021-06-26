import firebase from "firebase";
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA-OPXvAx7BsjJq4HnXmSgnroUSS_NpbiE",
    authDomain: "planetes-1866e.firebaseapp.com",
    projectId: "planetes-1866e",
    storageBucket: "planetes-1866e.appspot.com",
    messagingSenderId: "100198385349",
    appId: "1:100198385349:web:108578a47ffe6022a892ac"
};

firebase.initializeApp(config);

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const gitAuthProvider = new firebase.auth.GithubAuthProvider();
export const auth  = firebase.auth();
export const db = firebase.firestore();