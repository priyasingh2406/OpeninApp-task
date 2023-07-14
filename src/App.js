import React, {useState} from 'react';
import './style.css';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    
    <BrowserRouter>
    <Routes>
    <Route
          path="/"
          element={<Login  />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;