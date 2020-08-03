import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "../../images/logo.png";
import facebook from "../../images/facebook-blue.svg";

import "./style.css";

function SignIn() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  let history = useHistory();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        history.push("/");
      })
      .catch((error) => {
        toast.error("Invalid username or password");
      });
  };

  return (
    <div className="SignIn">
      <ToastContainer />
      <div className="Item">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="Content">
          <form className="form-SignIn">
            <div className="formItem">
              <span>Username</span>
              <input
                name="username"
                value={data.username}
                onChange={handleChange}
              />
            </div>
            <div className="formItem">
              <span>Password</span>
              <input
                name="password"
                type="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <button className="formItem" onClick={handleSubmit}>Sign in</button>
          </form>
          <div className="or">
            <div className="ngang"></div>
            <span>OR</span>
            <div className="ngang"></div>
          </div>
          <button className="ByFacebook">
            <img src={facebook} alt="facebook" />
            <span>Log in with Facebook</span>
          </button>
          <Link to="/forgot-password" className="forgot">
            Forgot Password?
          </Link>
        </div>
      </div>
      <div className="Item Change-Signup">
        <span>Don't have an accout?</span>
        <Link to="/signup">Sign up </Link>
      </div>
    </div>
  );
}

export default SignIn;
