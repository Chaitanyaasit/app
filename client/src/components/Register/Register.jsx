import React, { useState } from "react";
import "./Register.scss";
import "../../App.scss";
import { Link } from "react-router-dom";
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo.jpg";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import Axios from "axios";
const Register = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    Axios.post("http://localhost:3002/register", {
      Email: email,
      UserName: userName,
      password: password,
    }).then(() => {
      console.log("user has been created");
    });
  };
  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Employee Management System</h2>
            <p> By Chaitanya Asit</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Have an account</span>

            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let us know you</h3>
          </div>

          <form action="" className="form-grid">
            <div className="inputDiv">
              <label htmlFor="username" className="label">
                Username
              </label>
              <div className="input1 flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  className="imp"
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="input1 flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  className="imp"
                  onChange={(event) => {
                    setEmail(event.target.value);
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
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  className="imp"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
