import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DefaultProfileInfoData } from '../../../fakeData/DefaultProfileInfoData/DefaultProfileInfoData';
import { useGetSingleUserInfoQuery } from '../../../features/api/apiSlice';
import { UserInfo } from '../../../UserContext/AuthProvider';

const DefaultProfileInfo = () => {
    const { user} = useContext(UserInfo);
    const {data} = useGetSingleUserInfoQuery({email:user?.email});
    return (
        <div className=' bg-white drop-shadow-lg p-2 rounded-md mt-3'>
         {
                DefaultProfileInfoData.map((value,index)=>{
                    return  <div  className='p-1' key={index}>
                    <Link to={value.link} className='flex gap-2 my-1'>
                    <span className='text-2xl text-gray-600'>{value.icon}</span>
                    {value.id === 1 ? <span className='font-semibold'>{data.study}</span> : undefined }
                    {value.id === 2 ? <span className='font-semibold'>{data.works}</span> : undefined }
                    {value.id === 3 ? <span className='font-semibold'>{data.from}</span> : undefined }
                    {value.id === 4 ? <span className='font-semibold'>{data.relationship}</span> : undefined }
                   </Link>    
                  </div>
                })
            }
        </div>
    );
};

export default DefaultProfileInfo;