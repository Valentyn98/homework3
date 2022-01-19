import {Routes, Route, Link} from "react-router-dom";



import HomePage from "./components/pages/HomePage/HomePage";
import UsersPage from "./components/pages/UsersPage/UsersPage";
import PostsPage from "./components/pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import SingleUserPage from "./components/pages/SingleUserPAge/SingleUserPage";
import SinglePostPage from "./components/pages/SinglePostPage/SinglePostPage";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUserPage/>}/>
                            <Route path={'posts'} element={<SingleUserPage/>}/>
                    </Route>
                    <Route path={'/posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}/>
                            <Route path={'comments'} element={<SinglePostPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
