import { AiOutlineHome } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { IoMan } from 'react-icons/io5';
import { HiUserGroup } from "react-icons/hi";
import { GrNotification } from "react-icons/gr";

export const linkData = [
    {
        id: 1,
        icon: <AiOutlineHome />,
        link: '/home',
        name: 'Home'
    },
    {
        id: 2,
        icon: <BsChatDots />,
        link: '/home/chats',
        name: 'Chat'
    },
    {
        id: 3,
        icon: <IoMan />,
        link: '/home/friendRequest',
        name: 'Friend Request'
    },
    {
        id: 4,
        icon:  <HiUserGroup />,
        link: '/home/chitChatUsers',
        name: 'ChitChat Users'
    },
    {
        id: 5,
        icon:  <GrNotification />,
        link: '/notifications',
        name: 'Notifications'
    }
]