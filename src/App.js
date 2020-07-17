import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/index";
import SignIn from "./pages/SignIn/index";
import Home from "./pages/Home/index";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
