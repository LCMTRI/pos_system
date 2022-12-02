import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext';
import { EmpData } from './AccountData';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  var userInfo = user && EmpData.filter((e) => e === user.email);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>Account</h1>
      <p>User Name: {userInfo.name}</p>
      <img src={user && (userInfo.email === "admin@gmail.com" ? require("../Intro/photo.jpg") : "") } alt='photo' ></img>

      <button onClick={handleLogout} className='border px-6 py-2 my-4'>
        Logout
      </button>
    </div>
  );
};

export default Account;
