import React from "react";
import ChitChatUsers from "./ChitChatUsers";
import CenterContainer from "./CenterContainer";
import RightContainer from "./RightContainer";
const MidHomeContainer = () => {
  return (
    <div>
      <div className="hidden sm:flex w-11/12 mx-auto justify-center gap-5">
        <ChitChatUsers></ChitChatUsers>
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
