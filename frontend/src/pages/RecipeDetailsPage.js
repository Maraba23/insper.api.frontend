import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeDetailsPage = () => {
  const sampleRecipe = {
    title: 'Spaghetti Carbonara',
    ingredients: [
      { name: 'Spaghetti', quantity: '200g' },
      { name: 'Eggs', quantity: '4' },
      { name: 'Pancetta', quantity: '100g' },
      { name: 'Parmesan Cheese', quantity: '50g' },
      { name: 'Black Pepper', quantity: 'to taste' },
      { name: 'Salt', quantity: 'to taste' }
    ],
    description: '1. Cook the spaghetti according to the package instructions. \n' +
                 '2. In a separate pan, fry the pancetta until crispy. \n' +
                 '3. Beat the eggs in a bowl and mix in the grated Parmesan cheese. \n' +
                 '4. Drain the spaghetti and return it to the pot. \n' +
                 '5. Quickly mix in the egg and cheese mixture, ensuring the heat of the pasta cooks the eggs to form a creamy sauce. \n' +
                 '6. Add the pancetta and mix well. \n' +
                 '7. Season with salt and plenty of black pepper. Serve immediately.'
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
        <section id="recipe-details" className="my-5">
          <h2 className="text-center text-success">{sampleRecipe.title}</h2>
          <div className="mt-4">
            <h4 className="text-success">Ingredients</h4>
            <ul className="list-group mb-4">
              {sampleRecipe.ingredients.map((ingredient, index) => (
                <li key={index} className="list-group-item">
                  {ingredient.quantity} - {ingredient.name}
                </li>
              ))}
            </ul>
            <h4 className="text-success">Description</h4>
            <p className="text-muted" style={{ whiteSpace: 'pre-line' }}>{sampleRecipe.description}</p>
          </div>
        </section>
      </main>

      <footer className="bg-success text-white text-center p-4">
        <p>&copy; 2024 CookUp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RecipeDetailsPage;
