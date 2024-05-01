import React, { useState } from "react";
import "./Login.scss";
import "../../App.scss";
import { Link, useNavigate } from "react-router-dom";
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo.jpg";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import Dashboard from "./../Dashboard/Dashboard";
import Axios from "axios";
const Login = () => {
  const [loginUserName, setloginUserName] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const navigateTo = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3002/login", {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword,
    }).then((response) => {
      // console.log(response.data.message);
      // if credentials dont match
      if (response.data.message) {
        navigateTo("/"); //if credentials dont match navigate to same user login page
      } else {
        navigateTo("/dashboard");
      }
    });
  };
  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Employee Management System</h2>
            <p> By Chaitanya Asit</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Dont have account</span>

            <Link to={"/register"}>
              <button className="btn">Sign up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className="form-grid">
            {/* <span className="message">Login Status will go here</span> */}

            <div className="inputDiv">
              <label htmlFor="username" className="label">
                Username
              </label>
              <div className="input1 flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  className="imp"
                  onChange={(event) => {
                    setloginUserName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="input1 flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  className="imp"
                  type="password"
                  id="username"
                  placeholder="Enter Username"
                  onChange={(event) => {
                    setloginPassword(event.target.value);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <a href="/dashboard">Dashboard</a>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
