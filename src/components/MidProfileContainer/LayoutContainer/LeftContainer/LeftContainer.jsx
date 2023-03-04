import React from 'react';
import DefaultProfileInfo from '../../DefaultProfileInfo/DefaultProfileInfo';
import LinkRoutes from '../../LinkRoutes/LinkRoutes';

const LeftContainer = () => {
    return (
        <div className='w-2/5'>
            <LinkRoutes />
            <DefaultProfileInfo />
        </div>
    );
};

export default LeftContainer;