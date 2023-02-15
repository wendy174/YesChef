import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";


function NavBar ({setLoggedIn, currentUser}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setLoggedIn(false);
        navigate("/")
    }

    return (
        <nav className="navBar">
            <NavLink
                className="navLink"
                to="/home"
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
            <NavLink
                className="navLink"
                to="/profile"
                >My Kitchen
            </NavLink>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    )
}

export default NavBar;