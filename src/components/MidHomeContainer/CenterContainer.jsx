import React from 'react';
import CreatePost from './CreatePost';
import FriendsPost from './FriendsPost/FriendsPost';

const CenterContainer = () => {
    return (
        <div className='sm:w-1/2 w-full mt-3'>
         <CreatePost></CreatePost>
         <FriendsPost></FriendsPost>
        </div>
    );
};

export default CenterContainer;