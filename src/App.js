import Layout from "./Layout/Layout";
import {Route, Routes, Link} from "react-router-dom";
import UsersPage from "./User/UsersPage";
import UserPost from "./User/UserPost";
import PostsPage from "./Post/PostsPage";
import SinglePost from "./Post/SinglePost";
import PostComm from "./Post/PostComm";
import Alboms from "./User/Alboms";
import Photo from "./User/Photo";
import SingleUserPage from "./User/SingleUser";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id/albums'} element={<Alboms/>}>
                        <Route path={':albumId/photos'} element={<Photo/>}/>
                    </Route>
                    <Route path={':id'} element={<SingleUserPage/>}>//
                        <Route path={'posts'} element={<UserPost/>}/>//

                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>//
                    <Route path={':id'} element={<SinglePost/>}>//
                        <Route path={'comments'} element={<PostComm/>}/>//
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
