import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function RecipeList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes] = useState([
    { title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Quick and easy to prepare...' },
    { title: 'Chicken Alfredo', description: 'Creamy pasta with chicken, garlic, and parmesan. Perfect for a weeknight dinner...' },
    { title: 'Beef Stroganoff', description: 'A Russian dish of sautéed beef in a sauce with smetana, onions, and mushrooms. A comforting and delicious meal...' },
    { title: 'Vegetable Stir Fry', description: 'A healthy and quick vegetable dish with a mix of colorful veggies, soy sauce, and garlic. Great for a light lunch...' },
    { title: 'Tacos', description: 'Traditional Mexican dish with various fillings like beef, chicken, or vegetables, topped with salsa, cheese, and lettuce...' },
    { title: 'Caesar Salad', description: 'A salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, and parmesan cheese...' },
  ]);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header className="bg-success text-white p-4">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h2">CookUp - All Recipes</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#recipes">Recipes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">Add Recipe</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container my-5">
        <section id="search" className="my-5">
          <h2 className="text-center text-success">Search Recipes</h2>
          <div className="row justify-content-center mt-4">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search by recipe title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section id="recipes" className="my-5">
          <h2 className="text-center text-success">All Recipes</h2>
          <div className="row mt-4">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{recipe.title}</h5>
                      <p className="card-text">{recipe.description.substring(0, 100)}...</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No recipes found.</p>
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

export default RecipeList;
