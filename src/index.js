import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import NewPeriod from './pages/newPeriod/newPeriod';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App className="bg-mercury-600"/>} />
      <Route path="/signup" element={ <SignUp/> } />
      <Route path="/login" element={ <Login className="bg-mercury-900"/> } />
      <Route path="/add-new-period" element={ <NewPeriod className="bg-mercury-900"/> } />
    </Routes>
  </BrowserRouter>
);