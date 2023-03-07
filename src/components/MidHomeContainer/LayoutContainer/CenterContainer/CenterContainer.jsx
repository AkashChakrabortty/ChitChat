import React, { useContext } from 'react';
import { useGetAllFriendsPostsQuery } from '../../../../features/api/apiSlice';
import PostDisplay from '../../../../SharedComponents/PostDisplay/PostDisplay';
import { UserInfo } from '../../../../UserContext/AuthProvider';
import CreatePost from '../../CreatePost/CreatePost';

const CenterContainer = () => {
    const {user} = useContext(UserInfo)
    const {data} = useGetAllFriendsPostsQuery({email:user?.email});
  
    return (
        <div className='sm:w-1/2 w-full mt-3'>
         <CreatePost></CreatePost>
         <PostDisplay data={data}></PostDisplay>
        </div>
    );
};

export default CenterContainer;