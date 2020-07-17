import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import lockIcon from "../../images/lock.svg";

import "./style.css";

function ForgotPassword(props) {
  return (
    <div className="ForgotPassword">
      <Header />
      <div className="Item Main">
        <img className="lock-icon" src={lockIcon} alt="" />
        <h2>Trouble Logging In?</h2>
        <div className="Content">
          <span>
            Enter your username or email and we'll send you a link to get back
            into your account.
          </span>
          <form className="form">
            <input
              className="formItem"
              placeholder="Email, Phone or UserName"
              name="username"
            />
            <button className="formItem">Send Login Link</button>
          </form>
          <div className="or">
            <div className="ngang"></div>
            <span>OR</span>
            <div className="ngang"></div>
          </div>
          <Link className="Change-Signup" to="/signup">Create New Account</Link>
        </div>
      </div>
      <button className="Item Change-Signin">
        <Link to="/signin">Back To Login </Link>
      </button>
    </div>
  );
}

export default ForgotPassword;
