import React, { useState } from 'react';

const PopOver = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    return (
        <div className="img cursor-pointer relative" onClick={()=>setIsPopoverOpen(!isPopoverOpen)}>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://i.ibb.co/JkzvDHc/akash-2.png" />
          </div>
        </div>

        <div
          className={`${isPopoverOpen ? 'absolute top-2 right-1 mt-10 ml-2 bg-base-200 p-2 rounded drop-shadow-lg w-28 font-semibold' : 'hidden'}`}
          name='content'
        >
          <p>Logout</p>
        </div>

      </div>
    );
};

export default PopOver;