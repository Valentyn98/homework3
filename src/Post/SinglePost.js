import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {userServices} from "../services/user.services";
import {postServices} from "../services/post.services";

const SinglePost = () => {
    const {id} = useParams()
    const {state} = useLocation()
    const [post, setPost] = useState(null)

    useEffect(()=>{
        if (state){
            setPost(state)
            return
        }
        postServices.getPostById(id).then(value => setPost(value))
    },[id])
    return (
        <div>
            {post &&(
            <div>
                <div>{post.userId} {post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
                <Link to={'comments'} state={post.id}><button>Comm</button></Link>
                <Outlet/>
            </div>
            )}
        </div>
    );
};

export default SinglePost;