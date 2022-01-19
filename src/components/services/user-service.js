import {axiosService} from "./axios-service";
import {urls} from "../../config/urls";

export const userService = {
    getAllUsers:()=>axiosService.get(urls.users)
        .then(value => value.data),
    getUserById:(id)=>axiosService.get(`${urls.users}/${id}`)
        .then(value => value.data),
    getUserPost:(id)=>axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}
