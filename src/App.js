import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/style.scss';
import MyNavBar from './components/MyNavBar';
import Topbar from './components/Topbar';
import Servicios from './components/Servicios';
//pages

import Homepage from './pages/Homepage';
import About from './pages/About';
function App() {
  return (
    <>
      <Topbar />
      <MyNavBar />

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Servicios />
    </>
  );
}

export default App;
