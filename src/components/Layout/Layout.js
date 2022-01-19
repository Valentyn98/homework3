import {Link, Outlet} from "react-router-dom";

import css from "./Layout.module.css"
import React from "react";


const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <Link to="/">home</Link>
                <Link to="/users">users</Link>
                <Link to="/posts">posts</Link>
            </div>
            <Outlet/>
            <Link to={'/users'} > <button>Action</button> </Link>

        </>
    );
};

export default Layout;