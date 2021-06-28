import { useState, useEffect } from "react";
import { storage, timestamp } from "../firebase/firebase";
import { addPicture } from "../actions/dbActions";
import { useAuth} from "../contexts/AuthContext";
import { useHistory } from "react-router";

export const useStorage = ({file,country,description}) =>{

    const { currentUser } = useAuth();
    const history = useHistory();
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url,setUrl] = useState(null);


    useEffect(()=>{
        const storageRef = storage.ref(file.name);

        storageRef.put(file).on('state_changed',snapshot =>{
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        },error =>{
            setError(error);
        }, async ()=>{
            const url = await storageRef.getDownloadURL();
            addPicture({
                url,
                country,
                description,
                author : currentUser.displayName,
                authorId: currentUser.uid,
                createdAt : timestamp()
            })
            setUrl(url);
            history.push('gallery');
        })
    },[country,currentUser,description,history, file]);


    return {url , progress , error};
}


