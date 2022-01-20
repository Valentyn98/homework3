import {axiosService} from "./axios.services";

import {urls} from "../urls/urls";

export const postServices = {
    getAllPost:() => axiosService.get(urls.posts).then(value => value.data),
    getPostById:(id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getPosIdComm:(userId) => axiosService.get(`${urls.posts}/${userId}/comments`).then(value => value.data)
}
