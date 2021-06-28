import { useState, useEffect } from "react";
import { getCollection } from "../actions/dbActions";

export const useFirestoreDocument = (collection,documentId) =>{
    const [doc , setDoc] = useState({});

    useEffect(()=>{
        const unsubscribe = getCollection(collection)
                .doc(documentId)
                .onSnapshot(snapshot=>{
                    console.log(snapshot.data())
                    setDoc({id:documentId,...snapshot.data()});
                })

        return () => unsubscribe();
    },[collection,documentId])

    return { doc }
}