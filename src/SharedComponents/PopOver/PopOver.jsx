import React, { useContext, useState } from 'react';
import { useGetSingleUserInfoQuery } from '../../features/api/apiSlice';
import { UserInfo } from '../../UserContext/AuthProvider';

const PopOver = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const { logout, user} = useContext(UserInfo);
    const {data} = useGetSingleUserInfoQuery({email:user?.email});
    return (
        <div className="img cursor-pointer relative" onClick={()=>setIsPopoverOpen(!isPopoverOpen)}>
        <div className="avatar ">
          <div className="w-12 rounded-full ring ring-blue-400 ring-offset-base-100 ring-offset-2">
            <img src={data?.profilePhoto} alt={data?.name}/>
          </div>
        </div>

        <div
          className={`${isPopoverOpen ? 'absolute top-2 right-1 mt-10 ml-2 bg-base-200 p-2 rounded drop-shadow-lg w-28 font-semibold' : 'hidden'}`}
          name='content'
        >
          <p onClick={logout}>Logout</p>
        </div>

      </div>
    );
};

export default PopOver;