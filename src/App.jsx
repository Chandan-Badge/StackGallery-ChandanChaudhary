import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';


import Projects from './components/Projects';
import Home from './components/Home';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Profile from './components/homepage/Profile';

function App() {

  return (
    <>
      <p className='bg-[#fff] text-red-500 fixed z-50 px-4 py-1 text-xs sm:text-base'><b>Note:</b> The site is currently in developing phase</p>
        {/* <Home />
        <Projects />
        <Footer />

        <BackToTop /> */}

      <Routes>
        <Route path='/' element={
          <>
            <Home />
            <Projects />
            <Footer />

            <BackToTop />
          </>
        } />

        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App;
