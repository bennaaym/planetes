import { db ,timestamp} from '../firebase/firebase';


export const getCollection=(name)=>{
    return db.collection(name);
}


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
                    createdAt:timestamp(),
                    likes:[],
                    dislikes:[],
                    comments:[],
                });
}

export const editArticle = (article) =>{
    return db.collection('articles').doc(article.id).update(article);
}


export const deleteArticle = (id) =>{
    return db.collection('articles').doc(id).delete();
}

export const getArticles = () =>{
    return db.collection('articles').orderBy('createdAt').get();
}

export const getArticle = (id) =>{
    return db.collection('articles').doc(id).get();
}


export const getArticlesByCountry = (country) =>
{
    return db.collection('articles')
             .where('country','==',country)
             .orderBy('createdAt','desc')
             .get();
}


export const getArticlesByTag = (tag) =>
{
    return db.collection('articles')
             .where('tags','array-contains',tag)
             .orderBy('createdAt','desc')
             .get();
}


export const getArticlesByUser = (id) =>
{
    return db.collection('articles')
             .where('authorId','==',id)
             .orderBy('createdAt','desc')
             .get();
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



/* gallery collection */

export const addPicture = (picture) =>{
    return db.collection('gallery').add(picture);
}


export const updatePictureLikes = (id,likes) => {
    return db.collection('gallery').doc(id).update({
        likes
    })
}


export const getPicturesByCountry = (country) =>
{
    return db.collection('gallery')
             .where('country','==',country)
             .orderBy('createdAt','desc');
}

export const getPicturesByTag = (tag) =>
{
    return db.collection('gallery')
             .where('tags','array-contains',tag)
             .orderBy('createdAt','desc');
}

export const getPicturesByUser = (id) =>
{
    return db.collection('gallery')
             .where('authorId','==',id)
             .orderBy('createdAt','desc');
}


export const deletePicture = (id) =>{
    return db.collection('gallery').doc(id).delete();
}



/* comments collection */

export const addComment = (comment) =>{
    return db.collection('comments').add({
        ...comment,
        createdAt:timestamp(),
        likes:[]
    });
}


export const getCommentsByArticle = (articleId) =>{
    return db.collection('comments')
      .where('articleId','==',articleId)
      .orderBy('createdAt','desc')
}


export const updateCommentLikes = (id,likes) =>{
    return db.collection('comments').doc(id).update({
        likes
    })
}


export const deleteComment = (id) =>{
    return db.collection('comments').doc(id).delete();
}