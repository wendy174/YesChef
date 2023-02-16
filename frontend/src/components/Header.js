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
        <Menu secondary pointing>
            {/* <Image postition="left" src={logo} width={60} />
            <Menu.Item position="left" style={{fontSize: 24}}>Yes, Chef!</Menu.Item> */}
            <Menu.Item position="right" as={Link} to ="/home">Home</Menu.Item>
            <Menu.Item position="right" as={Link} to ="/recipes">Browse Recipes</Menu.Item>
            <Menu.Item position="right" as={Link} to ="/newrecipe">New Recipe</Menu.Item>
            <Menu.Item position="right" as={Link} to ="/newrecipe">Chef's Kisses</Menu.Item>
            <Menu.Item position="right" as={Link} to ="/profile">My Kitchen</Menu.Item>
            <Menu.Item position="right" as={Link} onClick={handleLogout}>Logout</Menu.Item>
        </Menu>
        </div>
    )
}

export default Header