import React, { Component } from "react";
import MoreIcon from "../../images/more.svg";
import SaveIcon from "../../images/save.svg";
import HeartIcon from "../../images/heart.svg";
import CommentIcon from "../../images/comment.svg";
import GpsIcon from "../../images/gps.svg";

import "./style.css";

class Status extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="Status">
        <div className="header">
          <div className="user">
            <div
              className="avatar-user"
              style={{ backgroundImage: `url(${item.avatarUser})` }}
            ></div>
            <div className="name-user">{item.userName}</div>
          </div>
          <img className="choice" src={MoreIcon} alt="choice" />
        </div>
        <div className="content">
          <div className="image-content" style={{ backgroundImage: `url(${item.imageContent})` }}>
            <img src={item.imageContent} />
          </div>
          <div className="main-content">
          <div className="action">
            <div className="emotion">
              <img src={HeartIcon} alt="Heart Icon "/>
              <img src={CommentIcon} alt="Comment Icon" />
              <img src={GpsIcon} alt="Gps Icon" />
            </div>
            <div className="save">
              <img src={SaveIcon} alt="Save Icon" />
            </div>
          </div>
          <div className="number-like">{item.likeCount} lượt thích</div>
          <div className="caption">
            <div className="name-user">{item.userName}</div>
            <div className="content-caption">{item.caption}</div>
          </div>
          <div className="comment">
            <p className="name-user">nnmvi</p>
            <p className="content-comment">Set bn ạ</p>
          </div>
          <div className="time">{item.date}</div>
        </div>
        </div>
        <div className="add-comment">
          <input type="text" placeholder="Thêm bình luận..." />
          <span>Đăng</span>
        </div>
      </div>
    );
  }
}

export default Status;
