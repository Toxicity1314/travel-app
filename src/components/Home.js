import React from "react";
import People from "./People";
import LogIn from "./LogIn";

function Home(props) {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Welcome to the travel App {props.loggedIn ? props.currentUser.name: ""}</h1>
      {props.loggedIn ? <People people={props.people} currentUser={props.currentUser} setLoggedIn={props.setLoggedIn} setCurrentUser={props.setCurrentUser} setPeople={props.setPeople}/>:<LogIn {...props} />}
    </div>
  );
}

export default Home;