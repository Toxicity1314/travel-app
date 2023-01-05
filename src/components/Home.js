import React from "react";
import People from "./People";
import LogIn from "./LogIn";

function Home(props) {
  return (
    <div>
      <br/>
      <img src={'https://i.pinimg.com/originals/8e/bb/96/8ebb96be428c20e1418863602b9c4ae2.gif'} alt='travelGif'/>
      <br/>
      <h1 style={{textAlign: "center", fontSize: "larger"}}>Welcome to 'travelApp', {props.loggedIn ? props.currentUser.name: ""}</h1>
      <br/>
      <br/>
      {props.loggedIn ? <People people={props.people} currentUser={props.currentUser} setLoggedIn={props.setLoggedIn} setCurrentUser={props.setCurrentUser} setPeople={props.setPeople}/>:<LogIn {...props} />}
    </div>
  );
}

export default Home;