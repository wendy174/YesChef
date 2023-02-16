import React, {useState} from 'react';
// import { NavLink } from "react-router-dom";
import { Card , Button , Icon , Label , Image , Container, Modal } from "semantic-ui-react";
function RecipeCard ({ recipe , allcomment}) {

const { title, steps, ingredients, cuisine, time, image_URL, difficulty  } = recipe;


console.log("beforeallcomment")
console.log(allcomment, "allcomment")
console.log(recipe, "reipe")

const [openSteps, setOpenSteps] = useState(false); 

const handleClick = () => {
    setOpenSteps(true);
}

return (
    <Card onClick = {handleClick}>
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
                        123,657
                    </Label>
                </Button>
                <br></br>
                <br></br>
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
        <Card.Content extra>
            <div class="content">
                <i class="comment icon"></i>
                3
            </div>
        </Card.Content>
        <Modal open = {openSteps} onClose = {() => setOpenSteps(false)} >
            <Modal.Header> {title}   </Modal.Header>
            <Modal.Content> 
                <h3>Ingredients </h3>
                <h3><span>-  {ingredients} </span> <br></br></h3>
                <div class="ui divider"></div>
                <h4>Steps </h4>
                <h4><span>{steps}</span> <br></br></h4>
            </Modal.Content>

        </Modal>
    </Card>
)
}

export default RecipeCard;
