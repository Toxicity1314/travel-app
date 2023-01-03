import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
        <NavLink className="button" to="/">home</NavLink>
        <NavLink className="button" to="/people">people</NavLink>
        <NavLink className="button" to="/places">places</NavLink>
        <NavLink className="button" to="/activities">activities</NavLink>
        
    </header>
  );
}

export default NavBar;