import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.jsx";
import Login from '../pages/Login/Login.jsx'
import Register from '../pages/Register/Register.jsx'
import ChatContainer from '../components/MidHomeContainer/LayoutContainer/ChatContainer/ChatContainer.jsx'
import ChitChatUsersContainer from '../components/MidHomeContainer/LayoutContainer/ChitChatUsersContainer/ChitChatUsersContainer.jsx'
import FriendRequestsContainer from '../components/MidHomeContainer/LayoutContainer/FriendRequestsContainer/FriendRequestsContainer.jsx'
import MidHomeContainer from '../components/MidHomeContainer/LayoutContainer/MidHomeContainer/MidHomeContainer.jsx'
import ProfilePage from "../pages/ProfilePage/ProfilePage.jsx";
import MidProfileContainer from "../components/MidProfileContainer/LayoutContainer/MidProfileContainer/MidProfileContainer.jsx";
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import UserLikes from "../components/MidProfileContainer/UserLikes/UserLikes.jsx";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: '/home',
        element: <PrivateRoute><HomePage></HomePage></PrivateRoute>,
        children: [
            {
                path: '/home',
                element: <MidHomeContainer></MidHomeContainer>,
            },
            {
                path: '/home/chitChatUsers',
                element: <ChitChatUsersContainer></ChitChatUsersContainer>,
            },
            {
                path: '/home/friendRequest',
                element: <FriendRequestsContainer></FriendRequestsContainer>,
            },
            {
                path: '/home/chats',
                element: <ChatContainer></ChatContainer>,
            },
        ]
    },
    {
        path: '/profile',
        element: <ProfilePage></ProfilePage>,
        children: [
            {
                path: '/profile',
                element: <MidProfileContainer></MidProfileContainer>
            },
            {
                path: '/profile/likes',
                element: <UserLikes></UserLikes>
            }
        ]
    },
])
export default route;