import React, { useContext, useEffect, useState } from "react";
import { useGetAllIndividualUserPostsQuery } from "../../../../features/api/apiSlice";
import PostDisplay from "../../../../SharedComponents/PostDisplay/PostDisplay";
import { UserInfo } from "../../../../UserContext/AuthProvider";
import UserPhoto from "../../UserPhoto/UserPhoto";

const RightContainer = () => {
  const { user } = useContext(UserInfo);
  const { data } = useGetAllIndividualUserPostsQuery({ email: user.email });
  // const [data,setData] = useState([])
  // useEffect(()=>{
  //   fetch(`http://localhost:5000/getAllIndividualUserPosts/${user?.email}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //   })
  // },[user])
  
  return (
    <div className="w-3/5">
      <UserPhoto></UserPhoto>
      <PostDisplay data={data}></PostDisplay>
    </div>
  );
};

export default RightContainer;
