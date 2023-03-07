import React from "react";
import { useLocation } from "react-router-dom";

const SearchResult = () => {
  const { state } = useLocation();
  return (
    <div className="sm:w-1/2 w-full mx-auto">
      <h1 className="text-center font-semibold m-2">
        Total Search Result:{" "}
        <span style={{ color: "#1877F2" }}>{state.length}</span>{" "}
      </h1>
    {
        state?.map((info)=>{
            return   <div className="users w-11/12 mx-auto border bg-white drop-shadow-lg p-2 rounded-md" key={info._id}>
            <div className="top w-11/12 mx-auto flex gap-2 justify-center">
              <div className="img">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={info.profilePhoto} alt={info.name}/>
                  </div>
                </div>
              </div>
              <div className="name flex items-center">
                <span className="font-semibold">{info.name}</span>
              </div>
            </div>
          </div>
        })
    }
    </div>
  );
};

export default SearchResult;
