import React from 'react';
import { Link } from 'react-router-dom';
import { linkData } from '../../../../fakeData/linkData/linkData';
import PopOver from '../../../../SharedComponents/PopOver/PopOver';
const BottomNav = () => {
    return (
        <div className="mainNav flex justify-between items-center mt-2 p-2">
            {
                linkData.map((value,index)=>{
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