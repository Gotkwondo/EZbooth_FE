import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import ProjectCreate from 'pages/ProjectCreate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/newproject' element={<ProjectCreate />}></Route>
    </Routes>
  );
}

export default App;
