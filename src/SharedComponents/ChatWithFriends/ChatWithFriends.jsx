import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useGetAllFriendsQuery } from "../../features/api/apiSlice.js";
import { UserInfo } from "../../UserContext/AuthProvider.js";
const ChatWithFriends = () => {
  const {user} = useContext(UserInfo);
  const {data} = useGetAllFriendsQuery({email:user?.email});
  return (
    <div>
      <h1 className="text-center font-semibold m-2">Chat With Friends</h1>
     {
      data?.map((value,index)=>{
        return  <Link to={`/home/chats/${value.friendRoom}`} state={value}>
        <div className="users w-11/12 mx-auto border bg-white drop-shadow-lg p-2 my-2 rounded-md" key={index}>
        <div className="top w-11/12 mx-auto flex gap-2">
          <div className="img">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={value.friendPhoto} alt={value.friendName}/>
              </div>
            </div>
          </div>
          <div className="name flex items-center">
            <span className="font-semibold">{value.friendName}</span>
          </div>
        </div>
        </div>
        </Link>
      })
     }
    </div>
  );
};

export default ChatWithFriends;
