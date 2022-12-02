import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Intro from './pages/Intro/Intro';
import Menu from './pages/Menu/Menu';
import Reservation from './pages/Reservation/Reservation';
import Dashboard from './pages/Dashboard/Dashboard'
import Employee from './pages/Employee/Employee';
import Menuside from './pages/Menu/Menuside';
import Employeeside from './pages/Employee/Employeeside';
// import ProtectedRoute from './pages/Authen/ProtectedRoute';
import Signin from './pages/Authen/Signin';
import Signup from './pages/Authen/Signup';
import { UserAuth } from './contexts/AuthContext';
import { getAuth } from 'firebase/auth';

const App = () => {
    const { user } = UserAuth();
    console.log("user : ", user);
    return (
        <>
            <div className="app-container">
                <Routes>
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path={"/*"} element={user ? (user['providerId'] ? <Navbar /> : null) : <Navigate to="/signin" />} />
                </Routes>

                <Routes>
                    <Route path="/" element={user && user['providerId'] ? <div className="mid-container"><Intro /></div> : null} />
                    <Route path="/menu" element={user && user['providerId'] ? <div className="mid-container"><Menu /></div> : null} />
                    <Route path="/reservation" element={user && user['providerId'] ? <div className="mid-container"><Reservation /></div> : null} />
                    <Route path="/dashboard" element={user && user['providerId'] ? <div className="mid-container"><Dashboard /></div> : null} />
                    <Route path="/employee" element={user && user['providerId'] ? <div className="mid-container"><Employee /></div> : null} />
                </Routes>

                <Routes>
                    <Route path="/" element={user && user['providerId'] ? <div className="right-container"><img src={require("./pages/Intro/sale.png")} alt="" /></div> : null} />
                    <Route path="/menu" element={user && user['providerId'] ? <div className="right-container"><Menuside /></div> : null} />
                    <Route path="/employee" element={user && user['providerId'] ? <div className="right-container"><Employeeside /></div> : null} />
                    <Route path="/*" element={null} />
                </Routes>
            </div>
        </>
    );
};

export default App;
