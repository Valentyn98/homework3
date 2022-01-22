import {axiosService} from "./axios.services";

import {urls} from "../urls/urls";

export const userServices = {
    getAllUs:() => axiosService.get(urls.users).then(value => value.data),
    getUserById:(id)=>axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getPostById:(userId) =>axiosService.get(`${urls.users}/${userId}/posts`).then(value => value.data),
    getAlbumsById:(userId)=>axiosService.get(`${urls.users}/${userId}/albums`).then(value => value.data),
    getPhotoById:(albumId)=>axiosService.get(`${urls.albums}/${albumId}/photos`).then(value => value.data)
}