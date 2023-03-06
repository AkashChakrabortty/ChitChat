import React, { useContext } from "react";
import { useGetSingleUserInfoQuery } from "../../../features/api/apiSlice";
import { UserInfo } from "../../../UserContext/AuthProvider";

const UserPhoto = () => {
  const { user} = useContext(UserInfo);
    const {data} = useGetSingleUserInfoQuery({email:user.email});
  return (
    <div className="mt-3 bg-white drop-shadow-lg">
      <div className="photo">
        <div className="cover">
          <img
           src={data?.coverPhoto} alt={data?.name}
            className="w-full h-52"
          />
        </div>
        <div className="profile text-center">
          <div className="avatar -mt-16">
            <div className="w-24 rounded-full ring ring-blue-400 ring-offset-base-100 ring-offset-2">
              <img src={data?.profilePhoto} alt={data?.name} />
            </div>
          </div>
        </div>
      </div>
      <div className="bio text-center font-semibold p-2">
        <h2 className="">Akash Chakrabortty</h2>
        <p>Learner || Competitive Programmer || MERN-Stack Developer</p>
      </div>
    </div>
  );
};

export default UserPhoto;
