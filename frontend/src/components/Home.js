import React, { useEffect, useState } from 'react';
import Header from './Header';
import HomeCollection from './HomeCollection';
import { Container } from "semantic-ui-react"


function Home ({setLoggedIn, currentUser}) {
    const [homeRecipes, setRecipes] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect (() => {
        fetch("http://localhost:9292/home")
        .then(res => res.json())
        .then(setRecipes);
    }, []);

    useEffect (() => {
        fetch("http://localhost;9292/comments")
        .then (res => res.json())
        .then(setComments);
    }, [])

    function handleNewRecipe(newRecipe) {
        setRecipes([...homeRecipes, newRecipe])
    }

    function handleNewComment(newComment){
        setComments([...comments,newComment])
    }

    return (
        <Container>
            <Header setLoggedIn={setLoggedIn}/>
            <h1>Today's Top Recipes</h1>
            <HomeCollection currentUser={currentUser} homeRecipes={homeRecipes} comments={comments}/>
        </Container>
    )
}

export default Home;