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
import Profile from './pages/profile/Profile';
import { createClient } from "@supabase/supabase-js";
import { Globals } from './Globals';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import About from './pages/about/About';
const SUPABASECLIENT = createClient(Globals.REACT_APP_SUPABASE_URL, Globals.REACT_APP_SUPABASE_KEY)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ReactNotifications isMobile={true}/>
    <Routes>
      <Route element={<ProtectedRoute/>}>
        <Route path="/" element={ <App className="bg-mercury-600"/>} />
        <Route path="/add-new-period" element={ <NewPeriod className="bg-mercury-900" SupabaseClient={ SUPABASECLIENT }/> } />
        <Route path="/current-tasks" element={ <CurrentTasks className="bg-mercury-900" SupabaseClient={ SUPABASECLIENT }/> } />
        <Route path='/profile' element={ <Profile className="bg-mercury-900"/> }/>
        <Route path='/about' element={ <About className="bg-mercury-900"/> }/>
      </Route>
      <Route path="/signup" element={ <SignUp supabaseClient={ SUPABASECLIENT }/> } />
      <Route path="/login" element={ <Login className="bg-mercury-900" supabaseClient={ SUPABASECLIENT }/> } />
      <Route path="/landing" element={ <Landing/>}/>
    </Routes>
  </BrowserRouter>
);