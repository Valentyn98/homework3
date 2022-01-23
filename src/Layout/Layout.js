import {Link, Outlet} from "react-router-dom";

import React from 'react';

import css from "./Layout.module.css"

const Layout = () => {
    return (
        <div className={css.header}>
            <div className={css.navm}>
                <Link to="/"  className={css.but}>Home</Link>
                <Link to="/users" className={css.but} >Users</Link>
                <Link to="/posts"  className={css.but}>Posts</Link>
            </div>
            <Outlet/>                {/*vuvod*/}
        </div>
    );
};

export default Layout;