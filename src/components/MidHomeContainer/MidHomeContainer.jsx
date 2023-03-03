import React from 'react';
import LeftContainer from './LeftContainer'
import CenterContainer from './CenterContainer'
import RightContainer from './RightContainer'
const MidHomeContainer = () => {
    return (
        <div>
           <div className="w-11/12 mx-auto flex justify-center gap-5">
            <LeftContainer></LeftContainer>
            <CenterContainer></CenterContainer>
            <RightContainer></RightContainer>
           </div>
        </div>
    );
};

export default MidHomeContainer;