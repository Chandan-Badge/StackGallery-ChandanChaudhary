import { useState } from 'react';
import './App.css';


import Projects from './components/Projects';
import Home from './components/homepage/Home';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Home />
      <Projects />
      <Footer />
    </>
  )
}

export default App;
