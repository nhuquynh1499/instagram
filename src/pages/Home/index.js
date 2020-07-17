import React, { Component } from "react";
import axios from "axios";
import Status from "../../components/Statsus/index";
import Story from "../../components/Story/index";

import "./style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      story: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8080/story`)
      .then((res) => {
        const story = res.data;
        this.setState({ story });
      })
      .catch((error) => console.log(error));
    axios
      .get(`http://localhost:8080/status`)
      .then((res) => {
        const status = res.data;
        this.setState({ status });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { status } = this.state;
    return (
      <div className="Home">
        <div className="main">
          {status.map((item, index) => {
            return <Status item={item} key={index} />;
          })}
        </div>
        <div className="nav-bar">
          <div className="user">
            <div
              className="avatar-user"
              style={{
                backgroundImage: `url(${"https://picsum.photos/200/300"})`,
              }}
            ></div>
            <div className="name-user">
              <div className="name-web">ABC</div>
              <div className="name-real">Nhu Quynh</div>
            </div>
          </div>
          <div className="box-story">
            <div className="header-story">
              <span className="title">Tin</span>
              <a href="#" className="more">
                Xem tất cả
              </a>
            </div>
            <div className="content-story">
              {status.map((item, index) => {
                return <Story item={item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
