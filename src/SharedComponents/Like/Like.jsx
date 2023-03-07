import React, { useContext, useEffect } from "react";
import { AiFillLike } from "react-icons/ai";
import toast  from "react-hot-toast";
import { useInsertLikeMutation } from "../../features/api/apiSlice";
import { UserInfo } from "../../UserContext/AuthProvider";

const Like = ({ post }) => {
  const { user } = useContext(UserInfo);
  const [setLike, { isLoading, data }] =
    useInsertLikeMutation();
  const notify = (a) => toast.success(a);
  const handleLike = (data) => {
    const likeInfo = {
      email: user.email,
      _id: post._id,
    };
    setLike(likeInfo);
  }; 
  useEffect(() => {
    if (data?.acknowledged) {
      notify("Liked");
    }
    else{
        notify("Already Liked");
    }
  }, [data]);

  return (
    <div className="like flex gap-1 items-center text-xl cursor-pointer">
      <button
        className="btn-default"
        type="submit"
        style={{ border: "none" }}
        onClick={handleLike}
      >
        { isLoading ? (
          <div className="flex justify-center items-center">
            <div className="custom-spinner"></div>
          </div>
        ) : (
          <span className="flex items-center"><AiFillLike /> Like</span>
        )}
      </button>
    </div>
  );
};

export default Like;
