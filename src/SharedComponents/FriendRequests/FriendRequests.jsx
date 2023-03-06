import React from "react";

const FriendRequests = ({data}) => {
  return (
    <div>
      <h1 className="text-center font-semibold m-2">Friend request <span style={{color:'#1877F2'}}>{data?.length}</span> </h1>
      {
        data?.map((value,index)=>{
          return   <div className=" users w-11/12 mx-auto border bg-white drop-shadow-lg p-2 rounded-md" key={index}>
          <div className="top w-11/12 mx-auto flex gap-2">
            <div className="img">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={value.sender_photo} alt={value.sender_name}/>
                </div>
              </div>
            </div>
            <div className="name flex items-center">
              <span className="font-semibold">{value.sender_name}</span>
            </div>
          </div>
          <div className="footerBtn flex gap-2 w-11/12 mx-auto">
            <button className="btn-default">Confrim</button>
            <button className="btn-default">Delete</button>
          </div>
        </div>
        })
      }
    </div>
  );
};

export default FriendRequests;
