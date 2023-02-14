import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

// Allow for use of useNavigate if we need it
// const navigate = useNavigate();

function NavBar () {
    return (
        <nav className="navBar">
            <NavLink
                className="navLink"
                to="/"
                >Home
            </NavLink>
            <NavLink
                className="navLink"
                to="/recipes"
                >Recipes
            </NavLink>
            <NavLink
                className="navLink"
                to="/newrecipe"
                >New Recipe
            </NavLink>
            <NavLink
                className="navLink"
                to="/mykisses"
                >Chef's Kisses
            </NavLink>
        </nav>
    )
}

export default NavBar;