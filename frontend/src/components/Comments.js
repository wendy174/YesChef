// import React, {useState, useEffect}  from 'react';
// import {Card, List} from 'semantic-ui-react';

// function Comment({recipeId}) {

//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//         fetch (`http://localhost:9292/recipe${recipe_id}`)
//         .then (resp => resp.json())
//         .then( data => setRecipes(data))
//     }, [])

//     return (
//         <div> 
//             <h1> recipes </h1>
//             {recipes.map(recipe => {
//                 <div key={recipe.id}>
//                     {recipe.title}
//                     {recipe.steps}
//                 </div> 
//             })
//             }





//         </div>



//     );

//         }

// export default Comment;