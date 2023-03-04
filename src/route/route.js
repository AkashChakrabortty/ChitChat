import { createBrowserRouter } from "react-router-dom";
import ChatContainer from "../components/MidHomeContainer/ChatContainer.jsx";
import ChatWithFriends from "../components/MidHomeContainer/ChatWithFriends.jsx";
import ChitChatUsers from "../components/MidHomeContainer/ChitChatUsers.jsx";
import ChitChatUsersContainer from "../components/MidHomeContainer/ChitChatUsersContainer.jsx";
import FriendRequests from "../components/MidHomeContainer/FriendRequests.jsx";
import FriendRequestsContainer from "../components/MidHomeContainer/FriendRequestsContainer.jsx";
import MidHomeContainer from "../components/MidHomeContainer/MidHomeContainer.jsx";
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
    
])
export default route;