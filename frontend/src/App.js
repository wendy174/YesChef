import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Kisses from './components/Kisses';
import Recipes from './components/Recipes';
import NewRecipe from './components/NewRecipe';
import logo from "./components/logo.png";

function App() {
  
  return (
    <div className="App">
      <img className="logo" alt="Yes, Chef!" src={logo} />
      <Routes>
        <Route
          path="/recipes"
          element={<Recipes/>}
        />
        <Route
          path="/newrecipe"
          element={<NewRecipe/>}
        />
        <Route
          path="/mykisses"
          element={<Kisses/>}
        />
        <Route
          path="/"
          element={<Home/>}
        />
      </Routes>
    </div>
  );
}

export default App;
