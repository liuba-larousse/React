/** @format */

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Search from './components/Search';

export default function App() {
  const APP_ID = '010a114c';
  const APP_KEY = 'ccebdf128c16197b74c886431a8d41d1';

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('chicken');
  const [search, setSearch] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);

  async function getRecipes() {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  function getSearch(event) {
    event.preventDefault();
    setQuery(search);
  }

  function updateSearch(event) {
    setSearch(event.target.value);
    console.log(search);
  }

  return (
    <div className="app">
      <Header />
      <form
        onSubmit={getSearch}
        className="form-inline justify-content-center my-4"
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          value={search}
          placeholder="Search"
          aria-label="Search"
          onChange={updateSearch}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="container ">
        <div className="row justify-content-center">
          {recipes.map((recipe) => (
            <Card
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={Math.round(recipe.recipe.calories)}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
