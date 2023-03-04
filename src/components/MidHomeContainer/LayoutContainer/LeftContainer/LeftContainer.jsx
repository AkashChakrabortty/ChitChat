import React from 'react';
import ChitChatUsers from '../../../../SharedComponents/ChitChatUsers/ChitChatUsers';
import LinkRoutes from '../../LinkRoutes/LinkRoutes';

const LeftContainer = () => {
    return (
        <div className='w-1/4'>
            <LinkRoutes />
            <ChitChatUsers />
        </div>
    );
};

export default LeftContainer;