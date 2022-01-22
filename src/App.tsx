import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portal from './pages/Portal';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portal' element={<Portal />} />
      </Routes>
    </Router>
  );
};

export default App;
