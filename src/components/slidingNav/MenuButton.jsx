import React, {memo} from 'react';

const menuButton = ({onClick}) => {
    console.log("Rendering MenuButton>");
    return (
        <button id="roundButton" onClick={onClick}></button>
    );
};

export default memo(menuButton);