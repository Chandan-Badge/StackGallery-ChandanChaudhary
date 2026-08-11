import { Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import './App.css';
import './style.css';

import Projects from './components/Projects';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Profile from './Pages/Profile';
import MouseAnimation from './components/MouseAnimation';
import Contact from './Pages/Contact';
import Hero from './components/Hero';
import NotFoundRedirect from './components/NotFoundRedirect';
import SEO from './components/SEO';
import { websiteSchema } from './components/seoSchemas';

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
        <Route path='/' element={
          <>
            <SEO
              description="StackGallery - the project portfolio of Chandan Chaudhary, a MERN Stack Developer & Freelancer from India. Explore React, Next.js, JavaScript, Java, CSS and Full Stack projects, freelance work and photography."
              keywords="StackGallery-ChandanChaudhary, React Projects, JavaScript Projects, Full Stack Projects, Next.js Projects, Java Projects, Freelance Projects"
              path="/"
              structuredData={websiteSchema}
            />
            <Hero />
            <Projects />
            <Footer />
          </>
        } />

        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='*' element={<NotFoundRedirect />} />
      </Routes>
    </>
  )
}

export default App;
