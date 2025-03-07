import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Home'
import Contact from './Contact';
import About from './About';
import EngineeringTopics from './EngineeringTopics'

function App() {
  const currentYear = new Date().getFullYear();
  const isLoggedIn = true;
  const homeM = "Home Page";
  const aboutM = "About Us";
  const contactM = "Contact Us";
  return (
    <div>
      <h1>ENSF-381:Full Stack Web Development</h1>
      <p>React Compnents</p>
      <p>Year : {currentYear}</p>

      <p>{isLoggedIn ? "Welcome back!":"Please log in "}</p>

      <Home title = {homeM} description = "Welcome to our website"/>
      <About title = {aboutM} description ="We are passionate about delivering quality experiences" />
      <Contact title = {contactM} description = "Feel free to reach out to us via email or phone." />
      <EngineeringTopics />
    </div>
  );
}

export default App;
