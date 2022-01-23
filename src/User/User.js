import React from 'react';
import {Link} from "react-router-dom"


const User = ({user}) => {
    const {id, name} = user
    return (
        <div>
            <Link to={id.toString()} state={user}> {name}</Link>
            <Link to={`${id}/albums`} ><button>Выести альбомы</button></Link>
        </div>
    );
};

export default User;