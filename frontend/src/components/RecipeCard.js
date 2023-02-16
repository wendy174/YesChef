import React from 'react';
// import { NavLink } from "react-router-dom";
import { Card , Button , Icon , Label , Image } from "semantic-ui-react";

function RecipeCard ({ recipe }) {

const { title, cuisine, time, image_URL, difficulty } = recipe;
return (
    <Card>
        <Image src= {image_URL} alt={title} wrapped ui={false}/>
        <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
            <span>{cuisine}</span> <br></br>
            <span className='date'>{time} Minutes</span><br></br>
            <span>{difficulty}</span>
        </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <div>
                <Button  as='div' labelPosition='right'>
                    <Button icon>
                        <Icon name='thumbs up' />
                        Yes
                    </Button>
                    <Label as='a' basic pointing='left'>
                        123,657
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
        </Card.Content>
    </Card>
)
}

export default RecipeCard;
