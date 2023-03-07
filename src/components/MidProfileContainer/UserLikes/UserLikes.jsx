import React, { useContext } from 'react';
import { useGetAllLikesQuery } from '../../../features/api/apiSlice';
import { UserInfo } from '../../../UserContext/AuthProvider';

const UserLikes = () => {
    const {user} = useContext(UserInfo);
    const {data , isLoading} = useGetAllLikesQuery({email:user?.email})
  
    return (
        <div>
        <h1 className="text-center font-semibold m-2">Your likes</h1>
        {
          isLoading ?  <div className="flex justify-center items-center">
          <div className="custom-spinner"></div>
        </div> :   <>
        {
          data?.map((userInfo,index)=>{
            return  <div> 
            
                <div className="users sm:w-1/2 w-11/12 mx-auto border bg-white drop-shadow-lg p-2 mt-1 rounded-md" key={index}>
                <div className="top w-11/12 mx-auto flex gap-2">
                  <div className="img">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={userInfo.postImg} alt={userInfo.post}/>
                      </div>
                    </div>
                  </div>
                  <div className="name font-semibold">
                    You reacted <span style={{color:'#1877F2'}}>{userInfo.postOwnerName}'s</span> post on {new Date(userInfo.milliseconds).toUTCString()}
                  </div>
                </div>
              </div>
            </div>
          })
        }
        </>
        }
       
      </div>
    );
};

export default UserLikes;