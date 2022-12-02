import { faSignIn, faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import { EmpData } from './AccountData';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password, name);
      EmpData.push({
        name: name,
        email: email,
        role: "Người dùng",
        photo: "./photo_user.jpg"
      })
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="sign-up-container">
      <img src={require("./coffee-bar.jpg")} alt="" />
      <div className="img-overlay"></div>
      <div className="form-container">
        <div>
          <FontAwesomeIcon style={{ fontSize: "50px", marginBottom: "15px" }} icon={faKitchenSet} />
          <h1 style={{marginBottom: "3rem", fontSize: "30px"}}>Sign up</h1>
          <p style={{marginBottom: "1.5rem", fontSize: "1.1rem", textAlign: "left"}}>
            Already have an account?{" "}
            <Link to='/signin' style={{color: "#10A19D", fontWeight: "600", textDecoration: "underline"}}>
              Sign in.
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label className="py-2 font-medium">User Name</label>
            <input onChange={(e) => setName(e.target.value)} type="name" />
            <label className="py-2 font-medium">Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" />
            <label className="py-2 font-medium">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" />
          </div>
          <div className="flex flex-col py-2"></div>
          <div className="flex flex-col py-2"></div>
          <button onClick={handleSubmit} style={{alignSelf: "center"}}>
            <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faSignIn} />
            | Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
