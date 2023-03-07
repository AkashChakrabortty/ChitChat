import React, { useContext, useState } from "react";
import { MdCreate } from "react-icons/md";
import { useGetSingleUserInfoQuery } from "../../../features/api/apiSlice";
import { UserInfo } from "../../../UserContext/AuthProvider";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { user } = useContext(UserInfo);
  const { data } = useGetSingleUserInfoQuery({ email: user.email });
  const notify = (a) => toast(a);
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate()
  const handleForm = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    const text = event.target.text.value;
    const img = event.target.photo.files[0];
    const milliseconds = new Date().getTime();

    const imgbb_key = process.env.REACT_APP_imgbb_key;
    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;
    if (text.trim().length > 0 || img) {
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          const postInfo = {
            email: user.email,
            post: text.trim(),
            post_photo: data.data.display_url,
            milliseconds: milliseconds
          };

          //insert db
          fetch("https://chitchat-one-pearl.vercel.app/insertPost", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(postInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              event.target.reset();
              notify("Post success");
              setIsLoading(false);
              navigate("/profile")
            });
        });
    } else {
      notify("You can't post empty");
    }
  };
  return (
    <div className="postContainer bg-white drop-shadow-lg rounded-lg p-5">
      <div className="headerContainer flex gap-2 w-10/12 mx-auto">
        <div className="logo flex items-center ">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={data?.profilePhoto} alt={data?.name} />
            </div>
          </div>
        </div>
        <div className="text p-2 font-semibold w-full">Create your post</div>
      </div>
      <hr className="my-1 w-11/12 mx-auto" />
      <div className="post border-gray-400 w-10/12 mx-auto flex gap-2">
        <div className="logo flex items-center">
          <MdCreate />
        </div>

        <div className="text font-semibold p-4 w-full">
          <form onSubmit={handleForm}>
            <textarea
              placeholder="What's on your mind?"
              className="textarea textarea-bordered textarea-sm w-full max-w-xs bg-base-200"
              name="text"
            ></textarea>
            <input
              type="file"
              className="border border-gray-200"
              name="photo"
            />
            <div className="form-control mt-2 w-1/4">
              <button
                className={`btn-default`}
                type="submit"
                style={{ border: "none" }}
              >
                {
                      isLoading ? <div className="flex justify-center items-center">
                      <div className="custom-spinner"></div>
                     </div> :  <span>Post</span>
                    }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
