import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Seguros from './components/Seguros';

//pages
import Homepage from './pages/Homepage';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Brokeris from './pages/brokeris';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/seguros/:slug" element={<Seguros />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brokeris" element={<Brokeris />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
