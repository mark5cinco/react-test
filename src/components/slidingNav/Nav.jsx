import React from "react";

const nav = ({menuVisibility, onClick}) => {
    let visibility = "hide";

    if (menuVisibility) {
        visibility = "show";
    }

    console.log("Rendering Nav");

    return (

        <div id="flyoutMenu"
             onClick={onClick}
             className={visibility}>
            <h2><a href="#">Home</a></h2>
            <h2><a href="#">About</a></h2>
            <h2><a href="#">Contact</a></h2>
            <h2><a href="#">Search</a></h2>
        </div>
    )
};

export default nav;