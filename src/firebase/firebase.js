import firebase from "firebase";
import 'firebase/auth';
import 'firebase/storage';


const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_ID
};

firebase.initializeApp(config);

export const  storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const gitAuthProvider = new firebase.auth.GithubAuthProvider();
export const auth  = firebase.auth();
export const db = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

