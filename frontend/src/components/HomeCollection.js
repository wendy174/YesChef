import React from "react";
import RecipeCard from "./RecipeCard";
import { Card } from "semantic-ui-react";


function HomeCollection({ homeRecipes, comments}) {
    const cards = homeRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
    ));
    const newComments = comments.map((allcomment) => (
        <RecipeCard key={allcomment.id} allcomment={allcomment} />
    ))




    return (<Card.Group itemsPerRow={5}>{cards}{newComments} </Card.Group>)

}

export default HomeCollection;
