import { Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import './App.css';
import './style.css';

import Projects from './components/Projects';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import About from './Pages/About';
import MouseAnimation from './components/MouseAnimation';
import Contact from './Pages/Contact';
import Hero from './components/Hero';
import NotFoundRedirect from './components/NotFoundRedirect';
import SEO from './components/SEO';
import Home from "./Pages/Home";

function App() {

  return (
    <>
      <div className='p-4 h-screen w-full fixed pointer-events-none z-50'>
        <MouseAnimation />
      </div>

      <Toaster
        position='bottom-right'
        containerStyle={{ zIndex: 9999 }}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#f9fafb',
            fontSize: '14px',
          },
        }}
      />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='*' element={<NotFoundRedirect />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;
