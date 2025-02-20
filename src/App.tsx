import React from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider/Slider';
import CreativeSection from './components/CreativeSection';
import Companies from './components/Companies';
import ThingsWeDo from './components/ThingsWeDo';
import Services from './components/Services';
import Work from './components/Work';
import PortfolioSection from './components/PortfolioSection';


import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Slider />

      <CreativeSection />
      <PortfolioSection />
      <Companies />
      <ThingsWeDo />
      <Services />
      
      <Work />
      <Contact />
      <Footer />
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;