import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HomePageAlt from './pages/HomePageAlt';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/useReducer" element={<HomePageAlt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;