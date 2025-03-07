import React from "react";

function About(props){
    return(
        <div>
            <p><h3>{props.title}</h3></p>
            {/* <p>Welcome to the About Us</p> */}
            <p>{props.description}</p>
        </div>
    );
}
export default About;
