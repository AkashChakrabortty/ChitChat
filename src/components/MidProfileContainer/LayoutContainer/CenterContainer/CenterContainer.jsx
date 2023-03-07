import React, { useContext } from 'react';
import { profileLinkData } from '../../../../fakeData/profileLinkData/profileLinkData';
import DefaultProfileInfo from '../../DefaultProfileInfo/DefaultProfileInfo';
import UserPhoto from '../../UserPhoto/UserPhoto';
import PostDisplay from '../../../../SharedComponents/PostDisplay/PostDisplay'
import MobileIconNav from '../../../../SharedComponents/MobileIconNav/MobileIconNav';
import { UserInfo } from '../../../../UserContext/AuthProvider';
import { useGetAllIndividualUserPostsQuery } from '../../../../features/api/apiSlice';

const CenterContainer = () => {
    const { user } = useContext(UserInfo);
    const { data } = useGetAllIndividualUserPostsQuery({ email: user?.email });
    return (
        <div>
            <UserPhoto />
            <DefaultProfileInfo />
            <MobileIconNav data={{data: profileLinkData}}/>
            <PostDisplay data={data}/>
        </div>
    );
};

export default CenterContainer;