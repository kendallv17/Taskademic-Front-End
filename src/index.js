import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import NewPeriod from './pages/newPeriod/newPeriod';
import CurrentTasks from './pages/currentTasks/CurrentTasks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Landing from './pages/landing/Landing';
import { createClient } from "@supabase/supabase-js";
import { Globals } from './Globals';


const SUPABASECLIENT = createClient(Globals.REACT_APP_SUPABASE_URL, Globals.REACT_APP_SUPABASE_KEY)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<ProtectedRoute user={null}/>}>
        <Route path="/" element={ <App className="bg-mercury-600"/>} />
        <Route path="/add-new-period" element={ <NewPeriod className="bg-mercury-900"/> } />
        <Route path="/current-tasks" element={ <CurrentTasks className="bg-mercury-900"/> } />
      </Route>
      <Route path="/signup" element={ <SignUp supabaseClient={ SUPABASECLIENT }/> } />
      <Route path="/login" element={ <Login className="bg-mercury-900" supabaseClient={ SUPABASECLIENT }/> } />
      <Route path="/landing" element={ <Landing/>}/>
    </Routes>
  </BrowserRouter>
);