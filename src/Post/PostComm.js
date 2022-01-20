import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {postServices} from "../services/post.services";

const PostComm = () => {
    const {state} = useLocation()
    const [comm, setComm] = useState([])

    useEffect(()=>{

        postServices.getPosIdComm(state).then(value => setComm(value))

    },[])
    return (
        <div>
            <h3>comments: </h3>
            {
                comm.map(postcom => <div key={postcom.id}>{postcom.id}  {postcom.name}</div>)
            }}
        </div>
    );
};

export default PostComm;