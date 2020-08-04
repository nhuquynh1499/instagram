import React, { Component } from "react";

import "./style.css";

class Story extends Component {
  render() {
    const { stories } = this.props;
    console.log(stories);
    return (
      <div className="Story">
        {stories &&
          stories.map((item, index) => {
            return (
              <div className="item-story">
                <div
                  className="avatar-user"
                  style={{ backgroundImage: `url(${item.avatarUser})` }}
                ></div>
                <div className="name-user">{item.userName}</div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Story;
