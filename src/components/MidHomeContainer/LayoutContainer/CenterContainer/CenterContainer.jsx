import React from 'react';
import PostDisplay from '../../../../SharedComponents/PostDisplay/PostDisplay';
import CreatePost from '../../CreatePost/CreatePost';

const CenterContainer = () => {
    return (
        <div className='sm:w-1/2 w-full mt-3'>
         <CreatePost></CreatePost>
         <PostDisplay></PostDisplay>
        </div>
    );
};

export default CenterContainer;