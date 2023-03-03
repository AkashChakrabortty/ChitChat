import React from 'react';
import ChatWithFriends from './ChatWithFriends';
import FriendRequests from './FriendRequests';

const RightContainer = () => {
    return (
        <div className='w-1/4'>
        <FriendRequests></FriendRequests>
        <ChatWithFriends></ChatWithFriends>
        </div>
    );
};

export default RightContainer;