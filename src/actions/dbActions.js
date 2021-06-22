import firebase from 'firebase/app'
import {db} from '../firebase/firebase';

export const addUser = (id,user) =>
{
    return db.collection('users').doc(id).set(user);
}

export const addArticle = (article) =>{
    return db.collection('users').doc(article.author).get()
             .then(snapshot =>{
                 const author = snapshot.data().name;
                 db.collection('articles').add({
                    ...article,
                    author,
                    createdAt:firebase.firestore.FieldValue.serverTimestamp(),
                    like:0,
                    dislike:0,
                    comments:[],
                    tags:[]
                });
             })
             .catch(error=>{})
}


export const getArticles = () =>{
    return db.collection('articles').get();
}


/*

*/
