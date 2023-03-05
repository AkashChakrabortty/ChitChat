import React from 'react';
import { Link } from 'react-router-dom';

const MobileIconNav = ({data}) => {
    return (
        <div className="mobileProfileNav flex justify-between items-center mt-2 p-2">
            {
                data.data.map((value,index)=>{
                    return  <div  className='text-2xl' key={index}>
                    <Link to={value.link}>
                     {value.icon}
                    </Link>
                  </div>
                })
            }
           </div>
    );
};

export default MobileIconNav;