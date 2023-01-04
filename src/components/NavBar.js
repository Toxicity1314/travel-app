import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "./styles";



function NavBar({loggedIn, setLoggedIn, setCurrentUser}) {
  const handleClick = ()=>{
    setLoggedIn(!loggedIn)
    setCurrentUser(
      [{
        id:"",
        name:"",
        city: "",
        username: "",
        password: "",
        photo: "",
        places:[]
      }]
    )
  }
if(loggedIn){
  return (
    <header>
        <Button as={NavLink} to="/">home</Button>
        <Button as={NavLink} to="/people">people</Button>
        <Button as={NavLink} to="/places">places</Button>
        <Button as={NavLink} to="/activities">activities</Button>
        <Button as={Link} onClick={handleClick} to="/">Log Out</Button>  
    </header>
  );
}else{
  return <Button as={Link} to="/formPeople">Register</Button>
}
}

export default NavBar;