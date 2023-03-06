import React, { useContext } from 'react';
import { useGetAllIndividualUserPostsQuery } from '../../../../features/api/apiSlice';
import { UserInfo } from '../../../../UserContext/AuthProvider';
import CenterContainer from '../../../MidProfileContainer/LayoutContainer/CenterContainer/CenterContainer';
import LeftContainer from '../../../MidProfileContainer/LayoutContainer/LeftContainer/LeftContainer';
import RightContainer from '../../../MidProfileContainer/LayoutContainer/RightContainer/RightContainer';

const MidProfileContainer = () => {
  
    return (
        <div>
        <div className="hidden sm:flex w-11/12 mx-auto justify-center gap-5">
          <LeftContainer></LeftContainer>
          <RightContainer></RightContainer>
        </div>
        {/* Mobile View */}
        <div className="w-11/12 mx-auto justify-center sm:hidden">
          <CenterContainer></CenterContainer>
        </div>
      </div>
    );
};

export default MidProfileContainer;