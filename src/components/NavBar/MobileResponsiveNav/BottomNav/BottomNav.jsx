import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { IoMan } from 'react-icons/io5';
import { HiUserGroup } from "react-icons/hi";
import {Link} from 'react-router-dom'
import { GrNotification } from "react-icons/gr";
import PopOver from '../../../../SharedComponents/PopOver/PopOver';
const BottomNav = () => {
    const bottomData = [
        {
            id: 1,
            icon: <AiOutlineHome />,
            link: '/home'
        },
        {
            id: 2,
            icon: <BsChatDots />,
            link: '/home/chats'
        },
        {
            id: 3,
            icon: <IoMan />,
            link: '/home/friendRequest'
        },
        {
            id: 4,
            icon:  <HiUserGroup />,
            link: '/home/chitChatUsers'
        },
        {
            id: 5,
            icon:  <GrNotification />,
            link: '/notifications'
        }
    ]
    return (
        <div className="mainNav flex justify-between items-center mt-2 p-2">
            {
                bottomData.map((value,index)=>{
                    return  <div key={index}>
                    <Link to={value.link} className='text-2xl'>
                     {value.icon}
                    </Link>
                  </div>
                })
            }
            <PopOver />
        </div>
    );
};

export default BottomNav;