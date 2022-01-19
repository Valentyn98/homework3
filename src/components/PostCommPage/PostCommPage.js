import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postService} from "../services/post-service";

const PostCommPage = () => {
    const {state} = useLocation()
    const {id: userId} = useParams()
    const [comm, setComm] = useState(null)
    useEffect(()=>{

        postService.getUserPost(userId).then(value => setComm(value))
    },[userId])

    return (
        <div>
            {comm.map()}
        </div>
    );
};

export default PostCommPage;