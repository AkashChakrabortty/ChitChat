import { createBrowserRouter, Outlet } from "react-router-dom";
import ChatWithFriends from "../components/MidHomeContainer/ChatWithFriends.jsx";
import ChitChatUsers from "../components/MidHomeContainer/ChitChatUsers.jsx";
import FriendRequests from "../components/MidHomeContainer/FriendRequests.jsx";
import MidHomeContainer from "../components/MidHomeContainer/MidHomeContainer.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import Login from '../pages/Login/Login.jsx'
import Register from '../pages/Register/Register.jsx'
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
        element: <HomePage></HomePage>,
        children: [
            {
                path: '/home',
                element: <MidHomeContainer></MidHomeContainer>,
            },
            {
                path: '/home/chitChatUsers',
                element: <ChitChatUsers></ChitChatUsers>,
            },
            {
                path: '/home/friendRequest',
                element: <FriendRequests></FriendRequests>,
            },
            {
                path: '/home/chats',
                element: <ChatWithFriends></ChatWithFriends>,
            },
        ]
    },
    
])
export default route;