import React from 'react';
import ChitChatUsers from './ChitChatUsers'
import CenterContainer from './CenterContainer'
import FriendRequests from './FriendRequests'
const MidHomeContainer = () => {
    return (
        <div>
           <div className="w-11/12 mx-auto flex justify-center gap-5">
            <ChitChatUsers></ChitChatUsers>
            <CenterContainer></CenterContainer>
            <FriendRequests></FriendRequests>
           </div>
        </div>
    );
};

export default MidHomeContainer;