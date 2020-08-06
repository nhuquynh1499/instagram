import React, { Component } from "react";
import axios from "axios";
import Header from "../../components/Header/index";
import NavBar from "../../components/NavBar/index";
import Status from "../../components/Statsus/index";
import Story from "../../components/Story/index";

import "./style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      story: [],
      user: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/api/story`)
      .then((res) => {
        const story = res.data;
        this.setState({ story });
      })
      .catch((error) => console.log(error));
    axios
      .get(`http://localhost:8000/api/status`)
      .then((res) => {
        const status = res.data;
        this.setState({ status });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { story, status } = this.state;
    return (
      <div className="Home">
        <Header />
        <div className="box-main">
          <div>
          <div className="box-story">
            {
              story.map((item, index) => {
                return <Story story={item} key={index} />
              })
            }
          </div>
          
          <div className="main">
            {status.map((item, index) => {
              return <Status item={item} key={index} />;
            })}
          </div>
          </div>
          <NavBar />
        </div>
      </div>
    );
  }
}

export default Home;
