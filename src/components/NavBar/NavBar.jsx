import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { IoMan } from 'react-icons/io5';
import { HiUserGroup } from "react-icons/hi";


const NavBar = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="drop-shadow-2x sm:flex justify-between items-center hidden pt-2">
        <div className="left">
          <span className="text-2xl font-semibold text-primary">ChitChat.</span>
        </div>
        <div className="center flex items-center">
          <div className="form-control">
            <div className="flex items-center border rounded-full">
              <div className="icon ml-2">
                <AiOutlineSearch />
              </div>
              <div className="in bg-base-200">
                <input
                  type="text"
                  placeholder="Search ChitChat"
                  className="input focus:outline-none bg-base-200"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="right flex items-center gap-5">
          <div className="icon text-2xl">
            <GrNotification />
          </div>
          <div className="img">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="https://i.ibb.co/JkzvDHc/akash-2.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile responsive */}
      <div className="sm:hidden">
        <div className="upperNav flex items-center justify-between p-2">
          <div className="logo">
            {" "}
            <span className="text-2xl font-semibold text-primary">
              ChitChat.
            </span>
          </div>
          <div className="searchBox h-10 w-1/2 border rounded-full p-2">
            <div className="form-control -mt-2">
              <div className="flex items-center">
                <div className="icon ml-2">
                  <AiOutlineSearch />
                </div>
                <div className="in bg-base-200 w-full">
                  <input
                    type="text"
                    placeholder="Search ChitChat"
                    className="input focus:outline-none bg-base-200 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainNav flex text-2xl justify-between items-center">
            <div className="home">
                <AiOutlineHome />
            </div>
            <div className="chats">
                <BsChatDots />
            </div>
            <div className="request">
                <IoMan />
            </div>
            <div className="users">
                <HiUserGroup />
            </div>
            <div className="notification">
                <GrNotification />
            </div>
            <div className="img">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="https://i.ibb.co/JkzvDHc/akash-2.png" />
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
