import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import logo from "../../images/logo.png";
import facebook from "../../images/facebook-white.svg";

import "./style.css";

function SignUp() {
  const [data, setData] = useState({
    contact: "",
    name: "",
    username: "",
    password: "",
    avatar: "https://picsum.photos/400",
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

    axios.post("http://localhost:8000/api/user", data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    history.push("/signin");
  };

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
            <div className="formItem">
              <span>Mobile Number or Email</span>
              <input name="contact" value={data.contact} onChange={handleChange} />
            </div>
            <div className="formItem">
              <span>Full name</span>
              <input name="name" value={data.name} onChange={handleChange} />
            </div>
            <div className="formItem">
              <span>Username</span>
              <input name="username" value={data.username} onChange={handleChange} />
            </div>
            <div className="formItem">
              <span>Password</span>
              <input name="password" type="password" value={data.password} onChange={handleChange} />
            </div>
            <button className="formItem" onClick={handleSubmit}>Sign up</button>
          </form>
          <p className="policy">
            By signing up, you agree to our
            <span> Terms</span>,<span> Data Policy </span>
            and
            <span> Cookies Policy</span>.
          </p>
        </div>
      </div>
      <div className="Item Change-Signin">
        <span>Have an account?</span>
        <Link to="/signin">Log in</Link>
      </div>
    </div>
  );
}

export default SignUp;
