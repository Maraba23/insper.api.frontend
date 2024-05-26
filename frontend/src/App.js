import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserArea from './pages/UserArea';
import RecipeDetails from './pages/RecipeDetails';
import RecipeList from './pages/RecipeList';
import RecipeDetailsPage from './pages/RecipeDetailsPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-area" element={<UserArea />} />
        <Route path="/recipe-details" element={<RecipeDetails />} />
        <Route path="/recipe-list" element={<RecipeList />} />
        <Route path="/recipe-details-page" element={<RecipeDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
