import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';


import Projects from './components/Projects';
import Home from './components/Home';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Profile from './components/Profilepage/Profile';

function App() {

  return (
    <>
      <p className='bg-[#ff0000] text-[#fff] fixed z-50 px-4 py-1 text-xs sm:text-xs'><b>Note:</b> This site is currently in developing phase</p>
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

        <Route path='/profile' element={
          <>
            <Profile />
            <BackToTop />
          </>
          } />
      </Routes>
    </>
  )
}

export default App;
