import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function RecipeDetails() {
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddIngredient = () => {
    const newIngredient = { ingredient, quantity };
    setIngredients([...ingredients, newIngredient]);
    setIngredient('');
    setQuantity('');
  };

  return (
    <div>
      <header className="bg-success text-white p-4">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h2">CookUp - Recipe Details</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#add-ingredient">Add Ingredient</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#ingredients-list">Ingredients List</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container my-5">
        <section id="add-ingredient" className="my-5">
          <h2 className="text-center text-success">Add Ingredient</h2>
          <div className="row justify-content-center mt-4">
            <div className="col-md-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingredient"
                  value={ingredient}
                  onChange={(e) => setIngredient(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <button
                onClick={handleAddIngredient}
                className="btn btn-success btn-block"
              >
                Add Ingredient
              </button>
            </div>
          </div>
        </section>

        <section id="ingredients-list" className="my-5">
          <h2 className="text-center text-success">Ingredients List</h2>
          <div className="row mt-4">
            {ingredients.length > 0 ? (
              ingredients.map((item, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{item.ingredient}</h5>
                      <p className="card-text">{item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No ingredients added yet.</p>
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

export default RecipeDetails;
