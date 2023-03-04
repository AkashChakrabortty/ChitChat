import React from 'react';
import Like from '../Like/Like'
import Comment from '../Comment/Comment'

const PostDisplay = () => {
    return (
        <div className=" bg-white drop-shadow-2xl rounded-lg p-2 mt-5">
        <div className="header flex gap-2 p-2">
          <div className="img">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="https://i.ibb.co/JkzvDHc/akash-2.png" />
              </div>
            </div>
          </div>
          <div className="name flex items-center">
            <span className="font-semibold">Akash Chakrabortty <br />
            <span className="font-semibold">3h ago</span>
            </span> 
          </div>
        </div>
        <div className="img overflow-auto h-96">
        <img src="https://i.ibb.co/JkzvDHc/akash-2.png" className="w-full"/>
        </div>
        <div className="reaction flex gap-5 p-2 mt-2">
         <Like />
         <Comment />
        </div>
        <hr />
      </div>
    );
};

export default PostDisplay;