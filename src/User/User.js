import React from 'react';
import {Link} from "react-router-dom"
import css from "./user.module.css"

const User = ({user}) => {
    const {id, name} = user
    return (
        <div className={css.centruser}>
            <div className={css.users}>
                <Link to={id.toString()} state={user}> {name}</Link>
                <Link to={`${id}/albums`} ><button>Вывести альбомы</button></Link>
            </div>
        </div>
    );
};

export default User;