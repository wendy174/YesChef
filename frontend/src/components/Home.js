import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import HomeCollection from './HomeCollection';
import { Container } from "semantic-ui-react"
import RecipeCard from './RecipeCard';
import NewRecipe from './NewRecipe';

function Home ({setLoggedIn}) {

    const [homeRecipes, setRecipes] = useState([]);

    useEffect (() => {
        fetch("http://localhost:9292/home")
        .then(res => res.json())
        .then(setRecipes);
    }, []);

    function handleNewRecipe(newRecipe) {
        setRecipes([...homeRecipes, newRecipe])
    }
    return (
        <Container>
            <Header setLoggedIn={setLoggedIn}/>
            <h1>Today's Top Recipes</h1>
            <HomeCollection homeRecipes={homeRecipes} />
        </Container>
    )
}

export default Home;