import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;