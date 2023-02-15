import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import RecipeCollection from './RecipeCollection';
import Search from './Search';

function Recipes () {

    const [allRecipes, setAllRecipes] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [selectedCuisine, setSelectedCuisine] = useState("All")
    const [selectedDifficulty, setSelectedDifficulty] = useState("All")
    const [selectedCookingTime, setSelectedCookingTime] = useState("All")

    // fetching all recipes
    useEffect (() => {
        fetch("http://localhost:9292/recipes")
        .then(res => res.json())
        .then(setAllRecipes);
    }, []);

    // filter items with search
    const recipeToDisplay = allRecipes.filter((recipe) => recipe.title.toLowerCase().includes(searchItem.toLowerCase()))

    // Handle cuisine selection change
    const selectedCuis = (e) => {
        setSelectedCuisine(e.target.value)
    }

    // Handle cooking difficulty selection change
    const selectedDiff = (e) => {
        setSelectedDifficulty(e.target.value)
    }

    // Handle cooking time selection change
    const selectedTime = (e) => {
        setSelectedCookingTime(e.target.value)
    }

    // filter items by cuisine search
    const filteredRecipes = recipeToDisplay
    .filter(recipe => {
        if(selectedCuisine === "All") return true
        return recipe.cuisine === selectedCuisine
    })
    .filter(recipe => {
        if(selectedDifficulty === "All") return true
        return recipe.difficulty === selectedDifficulty
    })
    .filter(recipe => {
        if(selectedCookingTime === "All") return true
        return recipe.time <= selectedCookingTime
    })

    return (
        <>
            <NavBar/>
            <h1>Recipes</h1>
            <Search
                searchItem={searchItem}
                onChangeSearch={setSearchItem}/>
            <div class ="filters">
                <h3>Filter by Cuisine</h3>
                <select onChange={selectedCuis}>
                    <option value="All">Wide palate</option>
                    <option value="American">American</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Greek">Greek</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Korean">Korean</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Thai">Thai</option>
                </select>
            </div>
            <div class ="filters">
                <h3>Filter by Difficulty</h3>
                <select onChange={selectedDiff}>
                    <option value="All">Not afraid</option>
                    <option value="easy">easy</option>
                    <option value="moderate">moderate</option>
                    <option value="hard">hard</option>
                </select>
            </div>
            <div class ="filters">
                <h3>Filter by Cooking Time</h3>
                <select onChange={selectedTime}>
                    <option value="All">All the time in the world</option>
                    <option value="15">15 minutes max</option>
                    <option value="30">30 minutes max</option>
                    <option value="45">45 minutes max</option>
                    <option value="60">60 minutes max</option>
                    <option value="75">75 minutes max</option>
                </select>
            </div>
            <RecipeCollection allRecipes={filteredRecipes}/>
        </>
    )
}

export default Recipes;