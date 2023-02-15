import React from 'react';
// import { NavLink } from "react-router-dom";
import { Card } from "semantic-ui-react";

function RecipeCard ({ recipe }) {

const { title, cuisine, time, image_URL, difficulty } = recipe;
return (
    <Card>
        <div className="recipe-card">
            <div className="image">
                <img style={{width: '230px', height: '250px'}}src= {image_URL} alt={title}/>
            </div>
            <div className="recipe-title">
                <h2 className="header">{title}</h2>
            </div>
            <div className="recipe-details">
                <h3>{cuisine}</h3>
                <h3>{time} minutes</h3>
                <h3>{difficulty}</h3>
            </div>
            <button className = "kissButton">Yes</button>
            <i className="thumbs up"/>
            <button className = "messButton">Mess</button>
        </div>
    </Card>
)
}

export default RecipeCard;
