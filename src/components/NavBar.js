import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./styles";

function NavBar() {
  return (
    <header>
        <Button as={NavLink} exact to="/">home</Button>
        <Button as={NavLink} to="/people">people</Button>
        <Button as={NavLink} to="/places">places</Button>
        <Button as={NavLink} to="/activities">activities</Button>
        
    </header>
  );
}

export default NavBar;