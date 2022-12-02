import { faSignIn, faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext';
import './Authen.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  return (
    <div className='sign-in-container'>
      <img src={require("./coffee-bar.jpg")} alt="" />
      <div className="img-overlay"></div>
      <div className="form-container">
        <div>
          <FontAwesomeIcon style={{ fontSize: "50px", marginBottom: "15px" }} icon={faKitchenSet} />
          <h1 style={{marginBottom: "3rem", fontSize: "30px"}}>Sign in</h1>
          <p style={{marginBottom: "1.5rem", fontSize: "1.1rem", textAlign: "left"}}>
            Don't have any account?{'  '}
            <Link to='/signup' style={{color: "#10A19D", fontWeight: "600", textDecoration: "underline"}}>
              Sign up.
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} style={{width: "auto"}}>
          <div className='form-item'>
            <label>Email Address:</label><br/>
            <input onChange={(e) => setEmail(e.target.value)} type='email' required style={{marginBottom: "1.3rem"}}/><br/>
            <label>Password:</label><br/>
            <input onChange={(e) => setPassword(e.target.value)} type='password' required/>
          </div>
          <button onClick={handleSubmit} style={{alignSelf: "center"}}>
            <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faSignIn} />
            | Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
