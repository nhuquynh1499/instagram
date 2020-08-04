import React, { Component } from "react";
import axios from 'axios';

export const UserContext = React.createContext();

export class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/api/user`)
      .then((res) => {
        const users = res.data;
        this.setState({ users });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          users: this.state.users,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
