import React from 'react';
import Alboms from "./Alboms";
import {Link} from "react-router-dom";

const Albu = ({album}) => {
    const {userId,id,title} = album
    return (
        <div>

            <div> userId: {userId}</div>
            <div> 888888888: {id}</div>
            <div>title: {title}</div>

            <Link to={`${id}/photos`} state={album.id}><button>current photo</button></Link>


        </div>
    );
};

export default Albu;