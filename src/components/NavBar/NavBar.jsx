import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";

const NavBar = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="drop-shadow-2x flex justify-between items-center">
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
    </div>
  );
};

export default NavBar;
