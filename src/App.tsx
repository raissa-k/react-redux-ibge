import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HomePageAlt from './pages/HomePageAlt';

const App = () => {
  return (
	<Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/useReducer" element={<HomePageAlt />} />
      </Routes>
    </BrowserRouter>
	</Provider>
  );
}

export default App;