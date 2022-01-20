import {Link, Outlet} from "react-router-dom";

import React from 'react';

const Layout = () => {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
            </div>
            <Outlet/>                {/*vuvod*/}
        </div>
    );
};

export default Layout;