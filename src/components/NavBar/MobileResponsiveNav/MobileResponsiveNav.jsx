import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import BottomNav from './BottomNav/BottomNav';

const MobileResponsiveNav = () => {
    return (
        <div className="sm:hidden bg-white drop-shadow-2xl rounded-lg p-2">
        <div className="upperNav flex items-center justify-between p-2">
          <div className="logo">
            {" "}
            <span className="text-2xl font-semibold text-primary" style={{color: '#1877F2'}}>
              ChitChat.
            </span>
          </div>
          <div className="searchBox h-10 w-1/2 border rounded-lg bg-base-200 p-2 overflow-hidden">
            <div className="form-control -mt-3">
              <div className="flex items-center">
                <div className="icon ml-2">
                  <AiOutlineSearch />
                </div>
                <div className="in w-full">
                  <input
                    type="text"
                    placeholder="Search ChitChat"
                    className="input focus:outline-none w-full bg-base-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
       <BottomNav />
      </div>
    );
};

export default MobileResponsiveNav;