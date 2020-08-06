import React from "react";

import { UserContext } from "../../contexts/User";

import "./style.css";

function Story(props) {
  const { story } = props;
  return (
    <UserContext.Consumer>
      {({ users }) => {
        let user = users.find((item) => {
          return item._id === story.userId;
        });
        return (
          user && (
            <div className="Story">
              <div
                className="avatar-user"
                style={{ backgroundImage: `url(${user.avatar})` }}
              ></div>
              <div className="name-user">{user.username}</div>
            </div>
          )
        );
      }}
    </UserContext.Consumer>
  );
}

export default Story;
