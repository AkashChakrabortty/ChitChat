import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useGetSingleUserFriendReqQuery } from "../../features/api/apiSlice";
import { UserInfo } from "../../UserContext/AuthProvider";

const MobileIconNav = ({ data }) => {
    const { user} = useContext(UserInfo);
    const {data: frndReq} = useGetSingleUserFriendReqQuery({email:user?.email});
  return (
    <div className="mobileProfileNav flex justify-between items-center mt-2 p-2">
      {data.data.map((value, index) => {
        return (
          <div className="text-2xl" key={index}>
            <Link to={value.link}>
              <div className="indicator">
              {
                value.id === 3 ?   <span className="indicator-item mb-1 font-semibold" style={{ color: "#1877F2" , fontSize: '15px' }} >
                {frndReq?.length}
              </span> : undefined
              }
               {value.icon}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MobileIconNav;
