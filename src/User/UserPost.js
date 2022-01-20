import React, {useEffect, useState} from 'react';
import {userServices} from "../services/user.services";
import {useLocation} from "react-router-dom";


const UserPost = () => {

    const {state} = useLocation()

   const [posts, setPosts] = useState([])

     useEffect(()=>{

      userServices.getPostById(state).then(value => setPosts(value))

     },[])
    return (
        <div>
            {
                posts.map(post =>  <div key={post.id}>
                    {post.id} {post.title}
                </div>)
            }
        </div>
    );
};

export default UserPost;