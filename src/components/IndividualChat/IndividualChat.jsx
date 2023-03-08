import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { MdCreate } from "react-icons/md";
import { useLocation } from "react-router-dom";
import {
  useGetAllChatsQuery,
  useInsertChatsMutation,
} from "../../features/api/apiSlice";
import { UserInfo } from "../../UserContext/AuthProvider";

const IndividualChat = () => {
  const location = useLocation();
  console.log(location);
  const { user } = useContext(UserInfo);
  const [inputValue, setInputValue] = useState("");
  const [setChats, { isSuccess }] = useInsertChatsMutation();
  const { data } = useGetAllChatsQuery({ id: location.state.friendRoom });

  const notify = () => toast.error(`You can't sent empty`);
  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      if (inputValue.trim().length === 0) {
        notify();
      } else {
        const chatInfo = {
          friendRoom: location.state.friendRoom,
          text: inputValue,
          senderEmail: user.email,
          friendName: location.state.friendName,
          friendEmail: location.state.friendEmail,
          friendPhoto: location.state.friendPhoto,
        };
        setChats(chatInfo);
      }
    }
  };
  return (
    <div className="w-10/12 mx-auto bg-white drop-shadow-lg p-2 mt-2">
      <div className="friendsInfo flex justify-center mt-3">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-blue-400  ring-offset-base-100 ring-offset-2">
            <img
              src={location.state.friendPhoto}
              alt={location.state.friendName}
            />
          </div>
        </div>
      </div>
      <h2 className="text-center font-semibold mt-1">
        {location?.state.friendName}
      </h2>

      {data?.map((value, index) => {
        return (
          <div key={index}>
            {value.senderEmail === user.email ? (
              <div className="chat chat-end my-2">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src={value.senderPhoto} alt={value.senderName}/>
                  </div>
                </div>
                <div className="chat-bubble">{value.text}</div>
              </div>
            ) : (
              <div className="chat chat-start my-2">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                  <img src={value.friendPhoto} alt={value.friendName}/>
                  </div>
                </div>
                <div className="chat-bubble">{value.text}</div>
              </div>
            )}
          </div>
        );
      })}

      <div className="sent">
        <div className="form-control">
          <div className="flex items-center">
            <div className="icon ml-2">
              <MdCreate />
            </div>
            <div className="in w-full">
              <input
                type="text"
                placeholder="Type here..."
                className="input focus:outline-none w-full bg-base-200"
                name="name"
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualChat;
