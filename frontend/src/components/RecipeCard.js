import React from 'react';
// import { NavLink } from "react-router-dom";
import { Card , Button , Icon , Label , Image , Container } from "semantic-ui-react";

function RecipeCard ({ recipe }) {

const { title, cuisine, time, image_URL, difficulty } = recipe;
const kiss_count = recipe.kisses.map (kiss => kiss)
const kiss_count_total = kiss_count.length
const mess_count = recipe.messes.map (mess => mess)
const mess_count_total = mess_count.length
const comment_count = recipe.comments.map (comment => comment)
const comment_count_total = comment_count.length

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
        <Card.Content>
            <div>
                <Button  as='div' labelPosition='right'>
                    <Button icon>
                        <Icon name='thumbs up' />
                        Yes
                    </Button>
                    <Label as='a' basic pointing='left'>
                        {kiss_count_total}
                    </Label>
                </Button>
                <br></br>
                <br></br>
                <Button as='div' labelPosition='left'>
                    <Label as='a' basic pointing='right'>
                        {mess_count_total}
                    </Label>
                    <Button icon>
                        <Icon name='thumbs down' />
                        Mess
                    </Button>
                </Button>
            </div>
        </Card.Content>
        <Card.Content extra>
            <div class="content">
                <i class="comment icon"></i>
                {comment_count_total} comments
            </div>
        </Card.Content>
    </Card>
)
}

export default RecipeCard;
