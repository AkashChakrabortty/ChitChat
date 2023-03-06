import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useGetSingleUserFriendReqQuery } from '../../features/api/apiSlice';
import { UserInfo } from '../../UserContext/AuthProvider';

const ShareLinkRoutes = ({data}) => {
    const { user} = useContext(UserInfo);
    const {data: frndReq} = useGetSingleUserFriendReqQuery({email:user.email});
    return (
        <div className=' bg-white drop-shadow-lg p-2 rounded-md mt-3'>
         {
                data.data.map((value,index)=>{
                    return  <div  className='p-1' key={index}>
                   {
                    value.id !== 5 ?  <Link to={value.link} className='flex gap-2 my-1'>
                    <span className='text-2xl text-gray-600'>{value.icon}</span>
                    <span className='font-semibold' >{value.name}
                    {
                        value.id === 3 && frndReq?.length > 0 ? <span className='ml-1' style={{color:'#1877F2'}}>{frndReq?.length}</span> : undefined
                    }
                    </span>
                    
                   </Link> : undefined
                   }
                  
                  </div>
                })
            }
        </div>
    );
};

export default ShareLinkRoutes;