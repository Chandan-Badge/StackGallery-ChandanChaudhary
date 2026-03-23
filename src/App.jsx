import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';


import Projects from './components/Projects';
import Home from './components/Home';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Profile from './components/Profilepage/Profile';
import MouseAnimation from './components/MouseAnimation';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <div className='p-4 h-screen w-full fixed pointer-events-none z-50'>
        <MouseAnimation />
      </div>

      <Routes>
        <Route path='/' element={
          <>
            <Home />
            <Projects />
            <Footer />
          </>
        } />

        <Route path='/profile' element={<Profile />} />

        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;
