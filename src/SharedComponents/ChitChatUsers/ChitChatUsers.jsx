import React, { useContext, useEffect, useState } from "react";
import { useGetAllChitChatUsersQuery, useSentFriendRequestMutation } from "../../features/api/apiSlice";
import { UserInfo } from "../../UserContext/AuthProvider";
import toast  from "react-hot-toast";

const ChitChatUsers = () => {
  const { data , isLoading} = useGetAllChitChatUsersQuery();
  const {user} = useContext(UserInfo);
  const notify = (a) => toast.success(a);
  const [ setReqInfo, {isLoading:isSentLoading , isSuccess: isSentSuccess} ] = useSentFriendRequestMutation();
  const [currentUser,setCurrentUser] = useState({})
  const addFriend = (people) => {
    setCurrentUser(people)
    const milliseconds = new Date().getTime();
    const reqInfo = {
      sender_email: user.email,
      receiver_email: people.email,
      milliseconds: milliseconds,
    };
    setReqInfo(reqInfo)
  };

  useEffect(()=>{
    if(isSentSuccess){
      notify('Request Sent')
    }
  },[isSentSuccess])

  return (
    <div>
      <h1 className="text-center font-semibold m-2">ChitChat Users</h1>
      {
        isLoading ?  <div className="flex justify-center items-center">
        <div className="custom-spinner"></div>
      </div> :   <>
      {
        data?.map((userInfo,index)=>{
          return  <div>
            {
              userInfo.email !== user.email ? <div className="users w-11/12 mx-auto border bg-white drop-shadow-lg p-2 mt-1 rounded-md" key={index}>
              <div className="top w-11/12 mx-auto flex gap-2">
                <div className="img">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={userInfo.profilePhoto} alt={userInfo.name}/>
                    </div>
                  </div>
                </div>
                <div className="name flex items-center">
                  <span className="font-semibold">{userInfo.name}</span>
                </div>
              </div>
              <div className="footerBtn flex gap-2 w-11/12 mx-auto">
                <button  onClick={() => addFriend(userInfo)} className='btn-default' btn type="submit" style={{border: 'none'}}>
                  {
                      isSentLoading && userInfo._id === currentUser._id ? <div className="flex justify-center items-center">
                      <div className="custom-spinner"></div>
                     </div> :  <span>Add Friend</span>
                    }
                  </button>
              </div>
            </div> : undefined
            }
          </div>

        })
      }
      </>
      }
     
    </div>
  );
};

export default ChitChatUsers;
