import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { BiComment } from "react-icons/bi";
import { useGetPostAllCommentsQuery, useInsertCommentsMutation } from "../../features/api/apiSlice";
import { UserInfo } from "../../UserContext/AuthProvider";

const Comment = ({ post }) => {
  const { user } = useContext(UserInfo);
  const [inputValue, setInputValue] = useState('');
  const [setComments, { isSuccess}] =
  useInsertCommentsMutation();
  const {data:allComments} = useGetPostAllCommentsQuery({id:post._id});
  const [isOpen,setIsOpen] = useState(false)
 const notify = ()=> toast.error(`You can't comment empty`)
  const handleComments = (event) => {
   
    if (event.key === 'Enter') {
        if(inputValue.trim().length===0){
         notify();
        }
        else{
            const commentsInfo = {
                email: user.email,
                _id: post._id,
                comment: inputValue
              };
              setComments(commentsInfo)
             
           }
        }
  };
 
  return (
    <div className="like flex gap-1 items-center text-xl cursor-pointer">
    <button
      className="btn-default"
      type="submit"
      style={{ border: "none" }}
      onClick={ () => setIsOpen(true)}
    >
        <span className="flex items-center">  <BiComment /> Comment</span>
    </button>
    <div className={`modal ${isOpen ? 'modal-open' : undefined}`}>
        <div className="modal-box relative h-96 overflow-auto">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={ () => setIsOpen(false)}>✕</label>
          <h3 className="text-lg font-semibold">
           Total comments: <span style={{ color: "#1877F2" }}>{allComments?.length}</span>
          </h3>
          <div className="form-control">
              <div className="flex items-center">
                <div className="icon ml-2">
                <BiComment /> 
                </div>
                <div className="in w-full">
                  <input
                    type="text"
                    placeholder="Your comments..."
                    className="input focus:outline-none w-full bg-base-200" name="comments" onChange={(event) => setInputValue(event.target.value)} onKeyDown={handleComments}
                  />
                </div>
              </div>
          </div>
          {
            allComments?.map((comment,index)=>{
                return   <div className="header flex gap-2 p-2" key={index}>
                <div className="img">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={comment.commentOwnerPhoto} alt={comment.commentOwnerName}/>
                    </div>
                  </div>
                </div>
                <div className="name flex items-center">
                  <span className="font-semibold">{comment.commentOwnerName}<br />
                  <span className="">{comment.comment}</span>
                  </span> 
                </div>
              </div>
            })
          }
        
          
        </div>
      </div>
  </div>
  );
};

export default Comment;
