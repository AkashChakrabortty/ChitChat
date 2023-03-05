import React from 'react';
import { profileLinkData } from '../../../../fakeData/profileLinkData/profileLinkData';
import DefaultProfileInfo from '../../DefaultProfileInfo/DefaultProfileInfo';
import UserPhoto from '../../UserPhoto/UserPhoto';
import PostDisplay from '../../../../SharedComponents/PostDisplay/PostDisplay'
import MobileIconNav from '../../../../SharedComponents/MobileIconNav/MobileIconNav';

const CenterContainer = () => {
    return (
        <div>
            <UserPhoto />
            <DefaultProfileInfo />
            <MobileIconNav data={{data: profileLinkData}}/>
            <PostDisplay />
        </div>
    );
};

export default CenterContainer;