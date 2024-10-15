// src/App.jsx
import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import styles from './assets/styles/variables.module.css';
import Education from './components/Education/Education';
import Hero from './components/Hero/Hero';
import Skill from './components/Skill/Skill';
function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <Education/>
      <Skill/>
      <Projects/>
      <About />
      
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
