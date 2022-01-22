import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portal from './pages/Portal';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portal' element={<Portal />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
