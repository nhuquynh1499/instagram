import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import searchLogo from "../../images/search.svg";
import homeLogo from "../../images/home.svg";
import compassLogo from "../../images/compass.svg";
import heartLogo from "../../images/heart.svg";

import "./style.css";

function Header(props) {
  const { item } = props;
  return (
    <div className="Header">
      <div className="Box-Header">
        <img className="logo" src={logo} alt="logo" />
        {item && (
            <div className="search">
              <img className="icon-search" src={searchLogo} alt="search logo" />
              <input type="text" placeholder="Tìm kiếm" />
            </div>
          ) && (
            <div className="menu">
              <Link to="/">
                <img className="item-menu" src={homeLogo} alt="home logo" />
              </Link>
              <img className="item-menu" src={compassLogo} alt="compass logo" />
              <img className="item-menu" src={heartLogo} alt="heart logo" />
              <div
                className="item-menu avatar"
                style={{ backgroundImage: `url(${item.avatarUser})` }}
              ></div>
            </div>
          )}
      </div>
    </div>
  );
}

export default Header;
