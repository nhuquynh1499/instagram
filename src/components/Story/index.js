import React, { Component } from "react";

import "./style.css";

class Story extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="Story">
        <div className="item-story-infor">
          <div
            className="avatar-user"
            style={{ backgroundImage: `url(${item.avatarUser})` }}
          ></div>
          <div className="infor">
            <div className="name-user">{item.userName}</div>
            <div className="time">{item.date}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
