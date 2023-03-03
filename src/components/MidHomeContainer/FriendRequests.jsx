import React from "react";

const FriendRequests = () => {
  return (
    <div className="w-1/4">
      <h1 className="text-center font-semibold m-2">Friend request</h1>
      <div className="users w-11/12 mx-auto border bg-white drop-shadow-2xl p-2 rounded-md">
        <div className="top w-11/12 mx-auto flex gap-2">
          <div className="img">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="https://i.ibb.co/JkzvDHc/akash-2.png" />
              </div>
            </div>
          </div>
          <div className="name flex items-center">
            <span className="font-semibold">Akash Chakrabortty</span>
          </div>
        </div>
        <div className="footerBtn flex gap-2 w-11/12 mx-auto">
          <button className="btn-default">Confrim</button>
          <button className="btn-default">Delete</button>
        </div>
      </div>

      <h1 className="text-center font-semibold m-2">Chat With Friends</h1>
      <div className="users w-11/12 mx-auto border bg-white drop-shadow-2xl p-2 rounded-md">
        <div className="top w-11/12 mx-auto flex gap-2">
          <div className="img">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="https://i.ibb.co/JkzvDHc/akash-2.png" />
              </div>
            </div>
          </div>
          <div className="name flex items-center">
            <span className="font-semibold">Akash Chakrabortty</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
