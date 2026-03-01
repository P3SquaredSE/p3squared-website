import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Philosophy from './pages/Philosphy';
import './App.css';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/philosophy" element={<Philosophy />} />
    </Routes>
  );
}

export default App;
