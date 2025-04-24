import { useState } from 'react';
import './App.css';


import Projects from './components/Projects';
import Home from './components/homepage/Home';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {

  return (
    <>
    <p className='bg-[#fff] text-red-500 fixed z-50 px-4 py-1 text-xs sm:text-base'><b>Note:</b> The site is currently in developing phase</p>
      <Home />
      <Projects />
      <Footer />

      <BackToTop />
    </>
  )
}

export default App;
