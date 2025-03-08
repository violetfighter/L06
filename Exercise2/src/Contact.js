import React from "react";

function Contact(props){
    return(
        <div>
            <p><h3>{props.title}</h3></p>
            {/* <p>Welcome to the Contact Us</p> */}
            <p>{props.description}</p>

        </div>
    );
}
export default Contact;
