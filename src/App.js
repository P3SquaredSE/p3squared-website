import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import Costs from './pages/Costs'; 
import Blog from './pages/Blog.jsx'; 
import Team from './pages/Team.jsx';
import './App.css';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/philosophy" element={<Philosophy />} />
      <Route path="/costs" element={<Costs />} /> 
      <Route path="/Blog" element={<Blog/>} /> 
      <Route path="/Team" element={<Team/>} />
    </Routes>
  );
}

export default App;
