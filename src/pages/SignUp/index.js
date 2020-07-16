import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import facebook from "../../images/facebook-white.svg";

import "./style.css";

function SignUp() {
  return (
    <div className="SignUp">
      <div className="Item">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="Content">
        <div>
          <h2>Sign up to see photos and videos from your friends.</h2>
        </div>
        <button className="ByFacebook">
          <img src={facebook} alt="facebook" />
          <span>Log in with Facebook</span>
        </button>
        <div className="or">
          <div className="ngang"></div>
          <span>OR</span>
          <div className="ngang"></div>
        </div>

        <form className="form-signup">
          <input className="formItem" placeholder="Mobile Number or Email" name="contact" />
          <input className="formItem" placeholder="Full Name" name="full-name" />
          <input className="formItem" placeholder="UserName" name="username" />
          <input className="formItem" placeholder="Password" name="password" />
          <button className="formItem" >Sign up</button>
        </form>
        <p className="policy">
          By signing up, you agree to our 
          <span> Terms</span>
          ,
          <span> Data Policy </span>
          and
          <span> Cookies Policy</span>
          .
        </p>
      </div>
      </div>
      <div className="Item Change-Signin">
        <span>Have an account?</span>
        <Link to='/signin'>Log in</Link>
      </div>
    </div>
  );
}

export default SignUp;
