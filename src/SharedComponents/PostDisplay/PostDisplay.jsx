import React from 'react';
import Like from '../Like/Like'
import Comment from '../Comment/Comment'

const PostDisplay = ({data}) => {
    return (
      <>
      {
        data?.map((post,index)=>{
          return   <div className=" bg-white drop-shadow-lg rounded-lg p-2 mt-5" key={index}>
          <div className="header flex gap-2 p-2">
            <div className="img">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={post.postOwnerPhoto} alt={post.postOwnerName}/>
                </div>
              </div>
            </div>
            <div className="name flex items-center">
              <span className="font-semibold">{post.postOwnerName}<br />
              <span className="font-semibold">{new Date(post.milliseconds).toUTCString()}</span>
              </span> 
            </div>
          </div>
          <p className='font-semibold'>{post.post}</p>
          <div className="img overflow-auto h-96">
      
          <img src={post.post_photo} className="w-full h-96" alt='post'/>
          </div>
          <div className="reaction flex gap-5 p-2 mt-2">
           <Like post={post}/>
           <Comment post={post}/>
          </div>
          <hr />
        </div>
        })
      }
      </>
    );
};

export default PostDisplay;