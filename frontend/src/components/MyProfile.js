import React from 'react';
import NavBar from './NavBar';
import RecipeCard from "./RecipeCard";
import { Card } from "semantic-ui-react";

function MyProfile ({currentUser}) {
    return (
        <>
            <NavBar/>
            <h1>{currentUser.first_name}'s Kitchen</h1>
        </>
    )
}

export default MyProfile;




function RecipeCollection({ allRecipes }) {
    const cards = allRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
    ));

    return (<Card.Group itemsPerRow={5}>{cards}</Card.Group>)

}