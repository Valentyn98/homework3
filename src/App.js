import Layout from "./Layout/Layout";
import './App.css';
import {Route, Routes, Link} from "react-router-dom";
import User from "./User/User";
import UsersPage from "./User/UsersPage";
import SingleUser from "./User/SingleUser";
import UserPost from "./User/UserPost";
import PostsPage from "./Post/PostsPage";
import SinglePost from "./Post/SinglePost";
import PostComm from "./Post/PostComm";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<SingleUser/>}>
                        <Route path={'posts'} element={<UserPost/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<SinglePost/>}>
                        <Route path={'comments'} element={<PostComm/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
