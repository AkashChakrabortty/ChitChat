import React from "react";
import { useGetAllChitChatUsersQuery } from "../../features/api/apiSlice";

const ChitChatUsers = () => {
  const { data , isLoading} = useGetAllChitChatUsersQuery();
 
  return (
    <div>
      <h1 className="text-center font-semibold m-2">ChitChat Users</h1>
      {
        isLoading ?  <div className="flex justify-center items-center">
        <div className="custom-spinner"></div>
      </div> :   <>
      {
        data?.map((user,index)=>{
          return  <div className="users w-11/12 mx-auto border bg-white drop-shadow-lg p-2 rounded-md" key={index}>
          <div className="top w-11/12 mx-auto flex gap-2">
            <div className="img">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user.profilePhoto} alt={user.name}/>
                </div>
              </div>
            </div>
            <div className="name flex items-center">
              <span className="font-semibold">{user.name}</span>
            </div>
          </div>
          <div className="footerBtn flex gap-2 w-11/12 mx-auto">
            <button className="btn-default">Add Friend</button>
          </div>
        </div>
        })
      }
      </>
      }
     
    </div>
  );
};

export default ChitChatUsers;
