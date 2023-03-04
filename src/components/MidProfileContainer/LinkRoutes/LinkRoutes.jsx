import React from 'react';
import { profileLinkData } from '../../../fakeData/profileLinkData/profileLinkData';
import ShareLinkRoutes from '../../../SharedComponents/ShareLinkRoutes/ShareLinkRoutes';

const LinkRoutes = () => {
    return (
        <div>
       <ShareLinkRoutes data={{data: profileLinkData}}/>
        </div>
    );
};

export default LinkRoutes;