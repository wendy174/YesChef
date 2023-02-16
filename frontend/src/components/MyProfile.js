import React from 'react';
import NavBar from './NavBar';
import RecipeCard from "./RecipeCard";
import { Card , Container } from "semantic-ui-react";
import Header from "./Header";

function MyProfile ({currentUser}) {
    const myRecipes = currentUser.recipes.map(recipe =>
        <RecipeCard key={recipe.id} recipe={recipe} />
    )

    return (
        <>
            <Container>
            <Header/>
            <h1>{currentUser.first_name}'s Kitchen</h1>
            <Card.Group itemsPerRow={5}>{myRecipes}</Card.Group>
            </Container>
        </>
    )
}

export default MyProfile;