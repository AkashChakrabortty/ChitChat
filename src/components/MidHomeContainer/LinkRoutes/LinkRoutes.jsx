import React from 'react';
import { homeLinkData } from '../../../fakeData/homeLinkData/homeLinkData';
import ShareLinkRoutes from '../../../SharedComponents/ShareLinkRoutes/ShareLinkRoutes';

const LinkRoutes = () => {
    return (
        <div>
          <ShareLinkRoutes data={{data: homeLinkData}}/>
        </div>
    );
};

export default LinkRoutes;