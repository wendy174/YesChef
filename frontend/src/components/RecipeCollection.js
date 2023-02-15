import React from "react";
import RecipeCard from "./RecipeCard";
import { Card } from "semantic-ui-react";

function RecipeCollection({ allRecipes }) {
    const cards = allRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
    ));

    return (<Card.Group itemsPerRow={5}>{cards}</Card.Group>)

}

export default RecipeCollection;
