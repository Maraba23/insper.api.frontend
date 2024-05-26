import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserArea() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddRecipe = () => {
    const newRecipe = { title, description };
    setRecipes([...recipes, newRecipe]);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <header className="bg-success text-white p-4">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h2">CookUp - User Area</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#create-recipe">Create Recipe</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#my-recipes">My Recipes</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container my-5">
        <section id="create-recipe" className="my-5">
          <h2 className="text-center text-success">Create a New Recipe</h2>
          <div className="row justify-content-center mt-4">
            <div className="col-md-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipe Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Recipe Description"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <button
                onClick={handleAddRecipe}
                className="btn btn-success btn-block"
              >
                Add Recipe
              </button>
            </div>
          </div>
        </section>

        <section id="my-recipes" className="my-5">
          <h2 className="text-center text-success">My Recipes</h2>
          <div className="row mt-4">
            {recipes.length > 0 ? (
              recipes.map((recipe, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{recipe.title}</h5>
                      <p className="card-text">{recipe.description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">You have no recipes yet.</p>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-success text-white text-center p-4">
        <p>&copy; 2024 CookUp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default UserArea;
