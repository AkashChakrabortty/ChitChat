import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useGetSearchUsersQuery } from "../../features/api/apiSlice";
import PopOver from "../../SharedComponents/PopOver/PopOver";
import MobileResponsiveNav from "./MobileResponsiveNav/MobileResponsiveNav";

const NavBar = () => {
  const [inputValue, setInputValue] = useState('');
  const {data} = useGetSearchUsersQuery({name:inputValue})
  const navigate = useNavigate()
 const handleSearch = (event) => {
  if (event.key === 'Enter') {
    navigate('/home/searchResult', { state: data })
   }
 
 }
  return (
    <div className="w-11/12 mx-auto">
      <div className=" sm:flex justify-between items-center hidden bg-white drop-shadow-lg rounded-lg p-2">
        <div className="left">
          <Link to='/home' className="text-2xl font-semibold" style={{ color: "#1877F2" }}>ChitChat.</Link>
        </div>
        <div className="center flex items-center bg-base-200">
          <div className="form-control">
            <div className="flex items-center border rounded-lg ">
              <div className="icon ml-2">
                <AiOutlineSearch />
              </div>
              <div className="in">
                <input
                  type="text"
                  placeholder="Search ChitChat"
                  className="input focus:outline-none bg-base-200"  name="name" onChange={(event) => setInputValue(event.target.value)} onKeyDown={handleSearch}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="right flex items-center gap-5">
          <div className="icon text-2xl">
            <GrNotification />
          </div>

          {/* popover */}
         <PopOver />
        </div>
      </div>
      {/* mobile responsive */}
      <MobileResponsiveNav />
    </div>
  );
};

export default NavBar;
