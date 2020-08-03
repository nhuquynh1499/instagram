import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./routes/index";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
