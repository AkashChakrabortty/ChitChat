import React from 'react';
import { Link } from 'react-router-dom';
import { homeLinkData } from '../../../../fakeData/homeLinkData/homeLinkData';
import PopOver from '../../../../SharedComponents/PopOver/PopOver';
const BottomNav = () => {
    return (
        <div className="mainNav flex justify-between items-center mt-2 p-2">
            {
                homeLinkData.map((value,index)=>{
                    return  <div  className='text-2xl' key={index}>
                    <Link to={value.link}>
                     {value.icon}
                    </Link>
                  </div>
                })
            }
            <PopOver />
        </div>
    );
};

export default BottomNav;