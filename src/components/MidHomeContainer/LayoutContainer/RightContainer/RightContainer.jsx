import React, { useContext } from 'react';
import { useGetSingleUserFriendReqQuery } from '../../../../features/api/apiSlice';
import ChatWithFriends from '../../../../SharedComponents/ChatWithFriends/ChatWithFriends';
import FriendRequests from '../../../../SharedComponents/FriendRequests/FriendRequests';
import { UserInfo } from '../../../../UserContext/AuthProvider';

const RightContainer = () => {
    const { user} = useContext(UserInfo);
    const {data} = useGetSingleUserFriendReqQuery({email:user.email});
    return (
        <div className='w-1/4'>
          <FriendRequests data={data}/>
        <ChatWithFriends></ChatWithFriends>
        </div>
    );
};

export default RightContainer;