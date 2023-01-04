import React from "react";
import People from "./People";
import LogIn from "./LogIn";

function Home(props) {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Welcome to the travel App {props.loggedIn ? props.currentUser[0].name: ""}</h1>
      {props.loggedIn ? <People people={props.currentUser} currentUser={props.currentUser}/>:<LogIn {...props} />}
    </div>
  );
}

export default Home;