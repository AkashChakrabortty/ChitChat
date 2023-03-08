import React, { useContext} from 'react';
import { useGetAllFriendsQuery } from '../../../features/api/apiSlice';
import { UserInfo } from '../../../UserContext/AuthProvider';

const UserFriends = () => {
  const {user} = useContext(UserInfo);
  const {data} = useGetAllFriendsQuery({email:user?.email});
 
    return (
        <div className="sm:w-1/2 w-full mx-auto">
      <h1 className="text-center font-semibold m-2">
        Total Friends:{" "}
        <span style={{ color: "#1877F2" }}>{data.length}</span>{" "}
      </h1>
    {
        data?.map((info)=>{
            return   <div className="users w-11/12 mx-auto border bg-white drop-shadow-lg p-2 rounded-md my-2" key={info._id}>
            <div className="top w-11/12 mx-auto flex gap-2 ">
              <div className="img">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={info.friendPhoto} alt={info.friendName}/>
                  </div>
                </div>
              </div>
              <div className="name flex items-center">
                <span className="font-semibold">{info.friendName}</span>
              </div>
            </div>
          </div>
        })
    }
    </div>
    );
};

export default UserFriends;