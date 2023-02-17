import React from "react";
import RecipeCard from "./RecipeCard";
import { Card } from "semantic-ui-react";

function RecipeCollection({ allRecipes, currentUser, setAllRecipes, handleDeleteRecipe }) {
    const cards = allRecipes.map((recipe) => (
        <RecipeCard currentUser={currentUser} key={recipe.id} recipe={recipe} allRecipes={allRecipes} setAllRecipes={setAllRecipes} handleDeleteRecipe={handleDeleteRecipe}/>
    ));

    return (<Card.Group itemsPerRow={5}>{cards}</Card.Group>)

}

export default RecipeCollection;
