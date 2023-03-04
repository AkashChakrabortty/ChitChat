import React from 'react';
import ChatWithFriends from '../../../../SharedComponents/ChatWithFriends/ChatWithFriends';
import FriendRequests from '../../../../SharedComponents/FriendRequests/FriendRequests';

const RightContainer = () => {
    return (
        <div className='w-1/4'>
        <FriendRequests></FriendRequests>
        <ChatWithFriends></ChatWithFriends>
        </div>
    );
};

export default RightContainer;