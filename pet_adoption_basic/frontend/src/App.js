import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Pets from './pages/Pets';
import Dashboard from './pages/Dashboard';

export default function App(){
  return (
    <div style={{fontFamily:'Arial', padding:20}}>
      <header style={{display:'flex', gap:10, marginBottom:20}}>
        <Link to="/">Home</Link>
        <Link to="/pets">Pets</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pets" element={<Pets/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}
