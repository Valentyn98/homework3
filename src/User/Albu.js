import React from 'react';
import Alboms from "./Alboms";
import {Link} from "react-router-dom";
import css from "./albu.module.css"

const Albu = ({album}) => {
    const {userId,id,title} = album
    return (
        <div className={css.posts} >
            <div className={css.block}>
                <div>userId: {userId}</div>
                <div>id : {id}</div>
                <div>title: {title}</div>
            </div>
            <div><Link to={`${id}/photos`} state={album.id}><button className={css.but}>current photo</button></Link></div>
        </div>
    );
};

export default Albu;