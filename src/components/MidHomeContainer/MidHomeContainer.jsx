import React from "react";
import CenterContainer from "./CenterContainer";
import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";
const MidHomeContainer = () => {
  return (
    <div>
      <div className="hidden sm:flex w-11/12 mx-auto justify-center gap-5">
        <LeftContainer></LeftContainer>
        <CenterContainer></CenterContainer>
        <RightContainer></RightContainer>
      </div>
      {/* Mobile View */}
      <div className="w-11/12 mx-auto justify-center sm:hidden">
        <CenterContainer></CenterContainer>
      </div>
    </div>
  );
};

export default MidHomeContainer;
