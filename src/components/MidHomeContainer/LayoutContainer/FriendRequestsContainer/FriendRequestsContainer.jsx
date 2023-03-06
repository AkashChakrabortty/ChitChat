import React, { useContext } from 'react';
import { useGetSingleUserFriendReqQuery } from '../../../../features/api/apiSlice';
import FriendRequests from '../../../../SharedComponents/FriendRequests/FriendRequests';
import { UserInfo } from '../../../../UserContext/AuthProvider';

const FriendRequestsContainer = () => {
    const { user} = useContext(UserInfo);
    const {data} = useGetSingleUserFriendReqQuery({email:user.email});
    return (
        <div className='sm:w-1/4 w-1/2 mx-auto'>
        <FriendRequests data={data}/>
    </div>
    );
};

export default FriendRequestsContainer;