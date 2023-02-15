import React from 'react';
// import { NavLink } from "react-router-dom";
import { Card , Button , Icon , Label } from "semantic-ui-react";

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
            <Button as='div' labelPosition='right'>
                <Button icon>
                    <Icon name='thumbs up' />
                    Yes
                </Button>
                <Label as='a' basic pointing='left'>
                         2,048
                </Label>
            </Button>
            <Button as='div' labelPosition='left'>
            <Label as='a' basic pointing='right'>
                2,048
            </Label>
            <Button icon>
                <Icon name='thumbs down' />
                Mess
            </Button>
         </Button>
        </div>
    </Card>
)
}

export default RecipeCard;
