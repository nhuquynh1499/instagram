import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import searchLogo from "../../images/search.svg";
import homeLogo from "../../images/home.svg";
import compassLogo from "../../images/compass.svg";
import heartLogo from "../../images/heart.svg";
import profileLogo from "../../images/user.svg";
import saveLogo from "../../images/save.svg";
import settingsLogo from "../../images/settings.svg";

import "./style.css";

function Header(props) {
  const { item } = props;
  return (
    <div className="Header">
      <div className="Box-Header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
          <div className="search">
            <div className="icon-search">
              <img src={searchLogo} alt="search logo" />
            </div>
            <input type="text" placeholder="Tìm kiếm" />
          </div>
          <div className="menu">
            <Link to="/">
              <img className="item-menu" src={homeLogo} alt="home logo" />
            </Link>
            <img className="item-menu" src={compassLogo} alt="compass logo" />
            <img className="item-menu" src={heartLogo} alt="heart logo" />
            <div className="item-menu item-avatar">
              <div
                className="avatar"
                style={{ backgroundImage: `url(${item.avatarUser})` }}
              ></div>
              <ul id="header-more-action">
                <li>
                  <img src={profileLogo} alt="" />
                  <span>Profile</span>
                </li>
                <li>
                  <img src={saveLogo} alt="" />
                  <span>Saved</span>
                </li>
                <li>
                  <img src={settingsLogo} alt="" />
                  <span>Settings</span>
                </li>
                <li>Log Out</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Header;
