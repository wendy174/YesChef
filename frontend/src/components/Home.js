import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import HomeCollection from './HomeCollection';
import { Container } from "semantic-ui-react"

function Home ({setLoggedIn}) {

    const [homeRecipes, setRecipes] = useState([]);

    useEffect (() => {
        fetch("http://localhost:9292/home")
        .then(res => res.json())
        .then(setRecipes);
    }, []);

    return (
        <Container>
            <Header/>
            <NavBar setLoggedIn={setLoggedIn}/>
            <h1>Today's Top Recipes</h1>
            <HomeCollection homeRecipes={homeRecipes} />
        </Container>
    )
}

export default Home;