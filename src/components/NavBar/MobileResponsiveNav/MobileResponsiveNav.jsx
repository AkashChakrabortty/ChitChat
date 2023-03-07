import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useGetSearchUsersQuery } from '../../../features/api/apiSlice';
import BottomNav from './BottomNav/BottomNav';

const MobileResponsiveNav = () => {
  const [inputValue, setInputValue] = useState('');
  const {data} = useGetSearchUsersQuery({name:inputValue})
  const navigate = useNavigate()
 const handleSearch = (event) => {
  if (event.key === 'Enter') {
    navigate('/home/searchResult', { state: data })
   }
 
 }
    return (
        <div className="sm:hidden bg-white drop-shadow-lg rounded-lg p-2">
        <div className="upperNav flex items-center justify-between p-2">
          <div className="logo">
          <Link to='/home' className="text-2xl font-semibold" style={{ color: "#1877F2" }}>ChitChat.</Link>
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
                    className="input focus:outline-none w-full bg-base-200" name="name" onChange={(event) => setInputValue(event.target.value)} onKeyDown={handleSearch}
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