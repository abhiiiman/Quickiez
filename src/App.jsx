import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
