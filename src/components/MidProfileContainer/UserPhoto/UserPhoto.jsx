import React from "react";

const UserPhoto = () => {
  return (
    <div>
      <div className="photo">
        <div className="cover">
          <img
            src="https://i.ibb.co/JkzvDHc/akash-2.png"
            alt="Akash"
            className="w-full h-52"
          />
        </div>
        <div className="profile text-center">
          <div className="avatar -mt-16">
            <div className="w-24 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2">
              <img src="https://i.ibb.co/JkzvDHc/akash-2.png" alt="Akash" />
            </div>
          </div>
        </div>
      </div>
      <div className="bio text-center font-semibold">
        <h2 className="">Akash Chakrabortty</h2>
        <p>Learner || Competitive Programmer || MERN-Stack Developer</p>
      </div>
    </div>
  );
};

export default UserPhoto;
