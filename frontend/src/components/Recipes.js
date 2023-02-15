import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import RecipeCollection from './RecipeCollection';


function Recipes () {
    
    const [allRecipes, setAllRecipes] = useState([]);

    useEffect (() => {
        fetch("http://localhost:9292/recipes")
        .then(res => res.json())
        .then(setAllRecipes);
    }, []);
    
    return (
        <>
            <NavBar/>
            <h1>Recipes</h1>
            <RecipeCollection allRecipes={allRecipes}/>
        </>
    )
}

export default Recipes;