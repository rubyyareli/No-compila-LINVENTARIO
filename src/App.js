import React from 'react';
import { Main } from './pages/main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Index } from './pages/index';

export const App = () => {

  return(

  <div className="App">
    <Router>
      <Routes>
      <Route exact path="/" element={<Index />}></Route>
      <Route exact path="/register" element={<Register />}></Route>
      <Route exact path="/main" element={<Main />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  </div>
  );
};
