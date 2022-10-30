import React from 'react';
import { Main } from './pages/main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Register } from './register/register';
import { Index } from './index/index';

export const App = () => {

  return(
    <Router>
      <Routes>
      <Route exact path="/" element={<Index />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/main" element={<Main />}/>
      </Routes>
    </Router>
  );
};
