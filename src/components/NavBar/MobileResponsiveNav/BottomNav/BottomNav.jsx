import React from 'react';
import { homeLinkData } from '../../../../fakeData/homeLinkData/homeLinkData';
import MobileIconNav from '../../../../SharedComponents/MobileIconNav/MobileIconNav';
import PopOver from '../../../../SharedComponents/PopOver/PopOver';
const BottomNav = () => {
    return (
        <div className='flex justify-between mt-2'>
            <div className="icon w-10/12">
            <MobileIconNav data={{data: homeLinkData}}/>
            </div>
            <div className="popOver flex items-center">
            <PopOver />
            </div>
        </div>
    );
};

export default BottomNav;
