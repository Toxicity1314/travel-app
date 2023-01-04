import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "./styles";



function NavBar({loggedIn, setLoggedIn}) {
  return (
    <header>
        <Button as={NavLink} to="/">home</Button>
        <Button as={NavLink} to="/people">people</Button>
        <Button as={NavLink} to="/places">places</Button>
        <Button as={NavLink} to="/activities">activities</Button>
        {loggedIn ? <Button as={Link} onClick={()=>setLoggedIn(!loggedIn)}>Log Out</Button>:""}  
    </header>
  );
}

export default NavBar;