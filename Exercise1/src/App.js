import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Home'
import Contact from './Contact';
import About from './About';

function App() {
  const currentYear = new Date().getFullYear();
  const isLoggedIn = true;

  return (
    <div>
      <h1>ENSF-381:Full Stack Web Development</h1>
      <p>React Compnents</p>
      <p>Year : {currentYear}</p>

      <p>{isLoggedIn ? "Welcome back!":"Please log in "}</p>

      
      
    </div>
  );
}

export default App;
