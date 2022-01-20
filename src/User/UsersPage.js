import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom"
import {userServices} from "../services/user.services";
import User from "./User";

const UsersPage = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        userServices.getAllUs().then(value =>setUsers(value) )
    },[])

    return (
        <div>
            <h1>Users :</h1>

            {users.map(user => <User key={user.id} user={user}/>)}

            <div>
                <Outlet/>
            </div>
        </div>

    );
};

export default UsersPage;