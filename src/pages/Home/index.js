import React, { Component } from "react";
import axios from "axios";
import Header from "../../components/Header/index";
import Status from "../../components/Statsus/index";
import Story from "../../components/Story/index";

import "./style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      story: [],
      user:[]
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/story`)
      .then((res) => {
        const story = res.data;
        this.setState({ story });
      })
      .catch((error) => console.log(error));
    axios
      .get(`http://localhost:8000/status`)
      .then((res) => {
        const status = res.data;
        this.setState({ status });
      })
      .catch((error) => console.log(error));
    axios
      .get(`http://localhost:8000/user`)
      .then((res) => {
        const user = res.data;
        this.setState({ user });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { story, status, user } = this.state;
    let userIsLogged = {};
    userIsLogged = user.find((item) => {
      return item.isLogged;
    });
    return (
      <div className="Home">
<Header item={user}/>
        <div className="box-main">
          <Story users={user}/>
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
            {/* <div className="box-story">
              <div className="header-story">
                <span className="title">Tin</span>
                <a href="#" className="more">
                  Xem tất cả
                </a>
              </div>
              <div className="content-story">
                {story.map((item, index) => {
                  return <Story item={item} key={index} />;
                })}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
