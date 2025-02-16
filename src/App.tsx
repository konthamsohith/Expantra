import React from 'react';
import Hero from './components/Hero';
import OurServices from './components/OurServices';
import OurProjectGallery from './components/OurProjectGallery';
import OurProcess from './components/OurProcess';
import WhatOurClientsSay from './components/WhatOurClientsSay';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f2ede6' }}>
      <Hero />
      <OurServices />
      <OurProjectGallery />
      <OurProcess />
      <WhatOurClientsSay />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;