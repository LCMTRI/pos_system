import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Intro from './pages/Intro/Intro';
import Menu from './pages/Menu/Menu';
import Table from './pages/Table/Table';
import Dashboard from './pages/Dashboard/Dashboard'
import Employee from './pages/Employee/Employee';

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/table" element={<Table />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;