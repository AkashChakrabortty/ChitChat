import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useGetAllChitChatUsersQuery } from "../../features/api/apiSlice";
import { UserInfo } from "../../UserContext/AuthProvider";

const ChitChatUsers = () => {
  const { data , isLoading} = useGetAllChitChatUsersQuery();
  const {user} = useContext(UserInfo);
  const notify = (a) => toast(a);
  const addFriend = (people) => {
    const milliseconds = new Date().getTime();
    const reqInfo = {
      sender_email: user.email,
      receiver_email: people.email,
      milliseconds: milliseconds,
    };

    fetch("http://localhost:5000/addFriend", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reqInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        notify('Request Sent')
      });
  };

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
                <button className="btn-default"  onClick={() => addFriend(userInfo)}>Add Friend</button>
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
