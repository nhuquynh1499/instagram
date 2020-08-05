import React from "react";

import Suggest from "../Suggest/index";
import { UserContext } from "../../contexts/User";

import "./style.css";

function NavBar() {
  return (
    <div className="NavBar">
      <UserContext.Consumer>
        {({ users }) => {
          let user = users.find((user) => {
            return user._id === localStorage.getItem("userId");
          });
          return (
            user && (
              <div>
                <div className="user">
                  <div
                    className="avatar"
                    style={{ backgroundImage: `url(${user.avatar})` }}
                  ></div>
                  <div className="name-user">
                    <div className="name-web">{user.username}</div>
                    <div className="name-real">{user.name}</div>
                  </div>
                </div>
                <div className="box-suggest">
                  <div className="header-suggest">
                    <span className="title">Suggestions For You</span>
                    <a href="/" className="more">
                      Xem tất cả
                    </a>
                  </div>
                  <div className="content-suggest">
                    {users.map((item, index) => {
                      return <Suggest user={item} key={index} />;
                    })}
                  </div>
                </div>
              </div>
            )
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default NavBar;
