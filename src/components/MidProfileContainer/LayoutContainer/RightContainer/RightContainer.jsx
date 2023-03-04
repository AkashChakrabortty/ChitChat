import React from 'react';
import PostDisplay from '../../../../SharedComponents/PostDisplay/PostDisplay';
import UserPhoto from '../../UserPhoto/UserPhoto';

const  RightContainer = () => {
    return (
        <div className='w-3/5'>
        <UserPhoto></UserPhoto>
        <PostDisplay></PostDisplay>
        </div>
    );
};

export default RightContainer;