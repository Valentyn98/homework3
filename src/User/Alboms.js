import React, {useEffect, useState} from 'react';
import {userServices} from "../services/user.services";
import {Outlet, useLocation, useParams} from "react-router-dom";
import Albu from "./Albu";

const Alboms = () => {
    const {id} = useParams()
    const [albs , setAlb] = useState([])
    const {state} = useLocation()
    console.log(state)

    useEffect(()=>{

        userServices.getAlbumsById(id).then(value => setAlb([...value]))

    },[id])
    console.log(id)
    return (
        <div>
            {albs && albs.map(album => <Albu key={album.id} album={album}/>)}
            <div>
                <Outlet/>
            </div>
        </div>
    );
};
export default Alboms;