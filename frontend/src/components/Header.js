import React from "react";
import { Menu, Image } from "semantic-ui-react"

import logo from "./YC Logo.png";
import toplogo from "./logo.png"

function Header() {
    return (
        <div>
        <img className="logo" alt="Yes, Chef!" src={toplogo} />
        <Menu secondary pointing>
            {/* <Image postition="left" src={logo} width={60} />
            <Menu.Item position="left" style={{fontSize: 24}}>Yes, Chef!</Menu.Item> */}
            <Menu.Item position="right">Home</Menu.Item>
            <Menu.Item position="right">Browse Recipes</Menu.Item>
            <Menu.Item position="right">New Recipe</Menu.Item>
            <Menu.Item position="right">Chef's Kisses</Menu.Item>
            <Menu.Item position="right">My Kitchen</Menu.Item>
            <Menu.Item position="right">Logout</Menu.Item>
        </Menu>
        </div>
    )
}

export default Header