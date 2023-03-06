import React, { useContext } from 'react';
import { MdCreate } from 'react-icons/md';
import { useGetSingleUserInfoQuery } from '../../../features/api/apiSlice';
import { UserInfo } from '../../../UserContext/AuthProvider';

const CreatePost = () => {
    const { user} = useContext(UserInfo);
    const {data} = useGetSingleUserInfoQuery({email:user.email});
    return (
        <div className="postContainer bg-white drop-shadow-lg rounded-lg p-5">
        <div className="headerContainer flex gap-2 w-10/12 mx-auto">
            <div className="logo flex items-center bg-base-200 rounded-full p-2">
                <MdCreate />
            </div>
            <div className="text bg-base-200 rounded p-2 font-semibold w-full">
                Create your post
            </div>
        </div>
        <hr className='my-2 w-11/12 mx-auto'/>
        <div className="post border-gray-400 w-10/12 mx-auto flex p-2 gap-2">
        <div className="logo flex items-center">
        <div className="avatar">
          <div className="w-12 rounded-full">
          <img src={data?.profilePhoto} alt={data?.name}/>
          </div>
        </div>
            </div>
            <div className="text font-semibold rounded-lg bg-base-200 p-2 w-full">
                What's on your mind?
            </div>
        </div>
       </div>
    );
};

export default CreatePost;