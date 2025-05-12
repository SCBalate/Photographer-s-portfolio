import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
// import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
// import CustomCursor from './components/CustomCursor';
import  {Toaster} from "sonner"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Kuldeep Gawande | Cinematographer';
    
    // Get the default title element
    const titleElement = document.querySelector('[data-default]');
    if (titleElement) {
      titleElement.textContent = 'Kuldeep Gawande | Cinematographer';
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
<Toaster/>
      {/* <CustomCursor /> */}
      <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <PortfolioSection />
              <AboutSection />
              {/* <ServicesSection /> */}
              <TestimonialsSection />
          
              <ContactSection />
              <Footer/>
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;