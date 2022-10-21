import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Intro from './pages/Intro/Intro';
import Menu from './pages/Menu/Menu';
import Reservation from './pages/Reservation/Reservation';
import Dashboard from './pages/Dashboard/Dashboard'
import Employee from './pages/Employee/Employee';
import Menuside from './pages/Menu/Menuside';

const App = () => {

  return (
    <>
      <Navbar />
      <div className="mid-container">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </div>
      <div className="right-container">
        <Routes>
          <Route path="/menu" element={<Menuside />} />
          <Route path="/*" element={
            <>
              <h1>Side-section</h1>
              <br />
              <h3>In progress...</h3>
            </>
          } />
        </Routes>
      </div>
    </>
  );
};

export default App;