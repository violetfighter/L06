import React from "react";

function Home(props){
    return(
        <div>
            <p><h3>{props.title}</h3></p>
            {/* <p>Welcome to the Home Page</p> */}
            <p>{props.description}</p>
        </div>
    );
}
export default Home;
