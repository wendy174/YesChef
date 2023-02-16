import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import RecipeCard from "./RecipeCard";
import { Card } from "semantic-ui-react";
import Header from "./Header";

function MyProfile ({currentUser, allRecipes}) {
    // state for recipes user has kisses
    const [kissedRecipes, setKissedRecipes] = useState([])

    const myRecipes = currentUser.recipes.map(recipe =>
        <RecipeCard key={recipe.id} recipe={recipe} />
    )

    // fetch for current user's kisses'
    useEffect(() => {
        fetch(`http://localhost:9292/users/${currentUser.id}/kisses`)
        .then((r) => r.json())
        .then((data) => setKissedRecipes(data));
    }, [])

    const myKisses = kissedRecipes.map(kiss =>
        <RecipeCard key={kiss.id} recipe={kiss.recipe} />
    )
    // console.log(kissedRecipes);

    return (
        <>
            <Header/>
            <h1>{currentUser.first_name}'s Kitchen</h1>
            <Card.Group itemsPerRow={5}>{myRecipes}</Card.Group>
            <h1>{currentUser.first_name}'s Chef's Kisses</h1>
            <Card.Group itemsPerRow={5}>{myKisses}</Card.Group>
        </>
    )
}

export default MyProfile;