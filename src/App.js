// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Amenities from './components/Amenities/Amenities';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Villas from './components/Villas/Villas';
import VillaDetail from './components/VillaDetail/VillaDetail';
import VillasLandingPage from './components/VillasLandingPage/VillasLandingPage';
import WhatsappContact from './components/WhatsappContact/WhatsappContact'; // Import the component
import './i18n';

function App() {
  return (
    <Router>
      <div className="App" style={{ overflow: 'auto', overflowX: 'hidden' }}>
        <WhatsappContact /> {/* Add the WhatsAppContact component here */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <VillasLandingPage />
              <About />
              <Amenities />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/villas" element={<Villas />} />
          <Route path="/villas/:id" element={<VillaDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
