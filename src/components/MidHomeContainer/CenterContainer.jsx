import React from 'react';
import CreatePost from './CreatePost';
import FriendsPost from './FriendsPost';

const CenterContainer = () => {
    return (
        <div className='w-1/2 mt-3'>
         <CreatePost></CreatePost>
         <FriendsPost></FriendsPost>
        </div>
    );
};

export default CenterContainer;