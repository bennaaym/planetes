import firebase from 'firebase/app'
import {db} from '../firebase/firebase';

/* users collection */
export const addUser = (id,user) =>
{
    return db.collection('users').doc(id).set(user);
}


export const getUser = (id) =>{
    return db.collection('users').doc(id).get();
}


/* articles collections */
export const addArticle = (article) =>{
    return db.collection('articles').add({
                    ...article,
                    createdAt:firebase.firestore.FieldValue.serverTimestamp(),
                    likes:[],
                    dislikes:[],
                    comments:[],
                    tags:['ai','society','government']
                });
}


export const getArticles = () =>{
    return db.collection('articles').get();
}

export const getArticle = (id) =>{
    return db.collection('articles').doc(id).get();
}


export const updateArticleLikes = (id,likes) =>{
    return db.collection('articles').doc(id).update({
        likes
    })
    .then(()=>{})
    .catch(error=>{console.log(error)});
}   


export const updateArticleDislikes = (id,dislikes) =>{
    return db.collection('articles').doc(id).update({
        dislikes
    })
}   