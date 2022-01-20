import React, {useEffect, useState} from 'react';
import Post from "./Post";
import {postServices} from "../services/post.services";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    const [post, setPosts] = useState([])

    useEffect(()=>{
        postServices.getAllPost().then(value =>setPosts(value) )
    },[])
    return (
        <div>
            <h1>Posts :</h1>
            {
                post.map(post => <Post key={post.id} post={post}/>)
            }
            <div>
                <Outlet/>
            </div>
        </div>

    );
};

export default PostsPage;