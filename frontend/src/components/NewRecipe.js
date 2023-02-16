import React from 'react';
import NavBar from './NavBar';
import Header from './Header';

// import { useNavigate } from "react-router-dom";

// this will allow us to navigate back to the recipes page or directly to the newly added recipe
// const navigate = useNavigate();

function NewRecipe () {
    return (
        <>
        <Header/>
        <h1>Add a new recipe</h1>
        </>
    )
}

export default NewRecipe;