import React from 'react';
import { Link } from 'react-router-dom';
import { DefaultProfileInfoData } from '../../../fakeData/DefaultProfileInfoData/DefaultProfileInfoData';

const DefaultProfileInfo = () => {
    return (
        <div className=' bg-white drop-shadow-2xl p-2 rounded-md mt-3'>
         {
                DefaultProfileInfoData.map((value,index)=>{
                    return  <div  className='p-1' key={index}>
                    <Link to={value.link} className='flex gap-2 my-1'>
                    <span className='text-2xl text-gray-600'>{value.icon}</span>
                    <span className='font-semibold' >{value.name}</span>
                   </Link>    
                  </div>
                })
            }
        </div>
    );
};

export default DefaultProfileInfo;