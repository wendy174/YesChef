import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import HomeCollection from './HomeCollection';
import { Container } from "semantic-ui-react"

function Home () {

    const [homeRecipes, setRecipes] = useState([]);

    useEffect (() => {
        fetch("http://localhost:9292/")
        .then(res => res.json())
        .then(setRecipes);
    }, []);

    return (
        <Container>
            <NavBar/>
            <h1>Yes, Chef!</h1>
            <HomeCollection homeRecipes={homeRecipes} />
        </Container>
    )
}

export default Home;