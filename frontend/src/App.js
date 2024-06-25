import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Recipes from './components/Recipes';
import NewRecipe from './components/NewRecipe';
import MyProfile from './components/MyProfile';

function App() {
    // state
    const [allRecipes, setAllRecipes] = useState([]);
    const [users, setUsers] = useState();
    const [currentUser, setCurrentUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    // const [userId, setUserId] = useState(null)

    const navigate = useNavigate();

    // fetching all recipes
    useEffect (() => {
      fetch("http://localhost:9292/recipes")
      .then(res => res.json())
      .then(setAllRecipes);
    }, []);

    // fetch users from database and store users in state for iterating
    useEffect(() => {
      fetch("http://localhost:9292/users")
      .then(r => r.json())
      .then(obj => setUsers(obj));
    }, [])

    // fetch for current user and store in currentUser state
    useEffect(() => {
      fetch(`http://localhost:9292/users/${currentUser.id}`)
      .then((r) => r.json())
      .then((data) => setCurrentUser(data));
    }, [currentUser.id])

    // function for logging in users
    function login(loginData) {
    // using .find to match user email with what was entered on the DOM
      const foundUser = users.find(user => user.email === loginData.email)
    // if email is found, and the password matches, set state and allow user to login
      if (foundUser !== undefined) {
        if (foundUser.password === loginData.password) {
          setCurrentUser(foundUser);
          setLoggedIn(true);
          navigate("/home")
        } // if email is right, but password is not, alert with incorrect pw
        else {
          alert("Incorrect password")
        }
      } // if email is not found, alert with incorrect email
      else {
        alert("Incorrect email. Try again or signup.")
      }
    }

    // helper function for adding new recipe
    function handleNewRecipe(newRecipe) {
      setAllRecipes([...allRecipes, newRecipe])
  }

  // helper function for deleting recipe
  const handleDeleteRecipe = (deletedRecipe) => {
    const deletedRecipeList = allRecipes.filter(recipe => recipe.id !== deletedRecipe.id)
    setAllRecipes(deletedRecipeList)
  }

  return (
    <div className="App">
      {/* <img className="logo" alt="Yes, Chef!" src={logo} /> */}
      {/* ternary for if logged in is true. if so, user can see all routes and site, if not, will return to login page*/}
      {(loggedIn === true) ? (
      <Routes>
        <Route
          path="/recipes"
          element={<Recipes currentUser={currentUser} allRecipes={allRecipes} setAllRecipes={setAllRecipes} handleDeleteRecipe={handleDeleteRecipe}/>}
        />
        <Route
          path="/newrecipe"
          element={<NewRecipe currentUser={currentUser} handleNewRecipe={handleNewRecipe}/>}
        />
        {/* <Route
          path="/mykisses"
          element={<Kisses currentUser={currentUser}/>}
        /> */}
        <Route
          path="/home"
          element={<Home currentUser={currentUser} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/profile"
          element={<MyProfile currentUser={currentUser} allRecipes={allRecipes}/>}
        />
        {/* <Route
          path="/"
          element={<Login setCurrentUser={setCurrentUser}/>}
        /> */}
      </Routes>
      ) : (
        <Login login={login}/>
      )
    }
    </div>
  );
}

export default App;
