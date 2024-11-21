import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import ProjectCreate from 'pages/SelectBoothStyle';
import SelectCountry from 'pages/SelectCountryInfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/newproject' element={<ProjectCreate />}></Route>
      <Route path='/country' element={<SelectCountry />}></Route>
    </Routes>
  );
}

export default App;
