import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LandingPage() {
    return (
      <div>
        <header className="bg-success text-white p-4">
          <div className="container d-flex justify-content-between align-items-center">
            <h1 className="h2">CookUp</h1>
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
          <section id="home" className="text-center my-5">
            <h2 className="display-4 text-success">Welcome to CookUp</h2>
            <p className="lead text-muted">Share and discover amazing recipes from around the world!</p>
          </section>
          
          <section id="recipes" className="my-5">
            <h2 className="text-center text-success">Featured Recipes</h2>
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Recipe Title 1</h5>
                    <p className="card-text">A brief description of the recipe.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Recipe Title 2</h5>
                    <p className="card-text">A brief description of the recipe.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Recipe Title 3</h5>
                    <p className="card-text">A brief description of the recipe.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section id="contact" className="my-5">
            <h2 className="text-center text-success">Stay Updated</h2>
            <div className="row justify-content-center mt-4">
              <div className="col-md-6">
                <form>
                  <div className="mb-3">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Your email address" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-success btn-block"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="bg-success text-white text-center p-4">
          <p>&copy; 2024 CookUp. All rights reserved.</p>
        </footer>
      </div>
    );
}

export default LandingPage;
