import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import facebook from "../../images/facebook-blue.svg";

import "./style.css";

function SignIn() {
  return (
    <div className="SignIn">
      <div className="Item">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="Content">
        <form className="form-SignIn">
          <input className="formItem" placeholder="UserName" name="username" />
          <input className="formItem" placeholder="Password" name="password" />
          <button className="formItem" >Sign up</button>
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
        <Link to="/forgot-pass"className="forgot">
          Forgot Password?
        </Link>
      </div>
      </div>
      <div className="Item Change-Signup">
        <span>Don't have an accout?</span>
        <Link to='/signup'>Sign up </Link>
      </div>
    </div>
  );
}

export default SignIn;
