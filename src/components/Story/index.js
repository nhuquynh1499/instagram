import React, { Component } from "react";

import "./style.css";

class Story extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="Story">
        <div class="item-story-infor">
          <div
            class="avatar-user"
            style={{ backgroundImage: `url(${item.avatarUser})` }}
          ></div>
          <div class="infor">
            <div class="name-user">{item.userName}</div>
            <div class="time">{item.date}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
