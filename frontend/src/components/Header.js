import React from "react";
import { Menu, Image, Button } from "semantic-ui-react"
import {Link} from 'react-router-dom'
import { NavLink, useNavigate } from "react-router-dom";

import logo from "./YC Logo.png";
import toplogo from "./logo.png"

function Header({setLoggedIn, currentUser}) {
    
    const navigate = useNavigate()
    const handleLogout = () => {
        setLoggedIn(false);
        navigate("/")
    }
    
    return (
        <div>
        <img className="logo" alt="Yes, Chef!" src={toplogo} />
        <Menu ui secondary pointing>
            <Menu.Item position="left" as={Link} to ="/home">Home</Menu.Item>
            <Menu.Item position="left" as={Link} to ="/recipes">Browse Recipes</Menu.Item>
            <Menu.Item position="left" as={Link} to ="/newrecipe">New Recipe</Menu.Item>
            <Menu.Item position="left" as={Link} to ="/mykisses">Chef's Kisses</Menu.Item>
            <Menu.Item position="left" as={Link} to ="/profile">My Kitchen</Menu.Item>
            <Menu.Item position="right" as={Link} onClick={handleLogout}>Logout</Menu.Item>
        </Menu>

        </div>
    )
}

export default Header