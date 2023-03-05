import React from 'react';
import { Link } from 'react-router-dom';

const ShareLinkRoutes = ({data}) => {
    return (
        <div className=' bg-white drop-shadow-lg p-2 rounded-md mt-3'>
         {
                data.data.map((value,index)=>{
                    return  <div  className='p-1' key={index}>
                   {
                    value.id !== 5 ?  <Link to={value.link} className='flex gap-2 my-1'>
                    <span className='text-2xl text-gray-600'>{value.icon}</span>
                    <span className='font-semibold' >{value.name}</span>
                   </Link> : undefined
                   }
                  
                  </div>
                })
            }
        </div>
    );
};

export default ShareLinkRoutes;