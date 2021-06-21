import firebase from "firebase/app";
import 'firebase/auth';


const db = firebase.initializeApp({
    apiKey: "AIzaSyA-OPXvAx7BsjJq4HnXmSgnroUSS_NpbiE",
    authDomain: "planetes-1866e.firebaseapp.com",
    projectId: "planetes-1866e",
    storageBucket: "planetes-1866e.appspot.com",
    messagingSenderId: "100198385349",
    appId: "1:100198385349:web:108578a47ffe6022a892ac"
});




export const auth  = db.auth();
export default db;