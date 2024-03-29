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
import SearchResult from "../pages/SearchResult/SearchResult.js";
import UserComments from "../components/MidProfileContainer/UserComments/UserComments.jsx";
import UserFriends from "../components/MidProfileContainer/UserFriends/UserFriends.jsx";
import IndividualChat from "../components/IndividualChat/IndividualChat.jsx";
import ProfileInfoEdit from "../components/MidProfileContainer/ProfileInfoEdit/ProfileInfoEdit.jsx";

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
            {
                path: '/home/chats/:id',
                element: <IndividualChat></IndividualChat>,
            },
            {
                path: '/home/searchResult',
                element: <SearchResult></SearchResult>,
            },
        ]
    },
    {
        path: '/profile',
        element: <PrivateRoute><ProfilePage></ProfilePage></PrivateRoute>,
        children: [
            {
                path: '/profile',
                element: <MidProfileContainer></MidProfileContainer>
            },
            {
                path: '/profile/likes',
                element: <UserLikes></UserLikes>
            },
            {
                path: '/profile/comments',
                element: <UserComments></UserComments>
            },
            {
                path: '/profile/friends',
                element: <UserFriends></UserFriends>
            },
            {
                path: '/profile/profileInfoEdit',
                element: <ProfileInfoEdit></ProfileInfoEdit>
            }
        ]
    },
])
export default route;