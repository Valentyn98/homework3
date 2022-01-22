import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {userServices} from "../services/user.services";

const Photo = () => {
    const {id} = useParams()
    const {state} = useLocation()
    const [photo, setPhoto] = useState([])

    useEffect(()=>{

        userServices.getPhotoById(id).then(value => setPhoto(value))

    },[id])

    return (
    <div>
        {
            photo.map(photo => <div key={photo.id}>
                <div>{photo.title} </div>
                <img src={photo.url} alt=""/></div>)
        }
    </div>
    );
};

export default Photo;