import React from "react";
import "./Intro.css";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import { EmpData } from "../Authen/AccountData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

function Intro() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  var userInfo = user && EmpData.find((e) => e.email === user.email);
  userInfo = userInfo ? userInfo : {
    email: user.email,
    name: user.displayName,
    photo: "./photo_user.jpg",
    role: "Người dùng"
  }

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="intro-container">
      <div className="img-container">
        <img src={require(`${userInfo.photo}`)} alt="" />
      </div>
      <div>{console.log(user.displayName)}</div>
      <h1 style={{ marginBottom: "20px", fontSize: "40px" }}>{userInfo && userInfo.name}</h1>
      <h2 style={{ marginBottom: "20px" }}>
        {(userInfo && userInfo.role === "Người dùng") ? "" : "Chức vụ: "} {userInfo && userInfo.role}
      </h2>
      <button onClick={handleLogout}>
        <FontAwesomeIcon style={{ marginRight: "15px" }} icon={faSignOut} />
        Sign out
      </button>
    </div>
  );
}

export default Intro;
