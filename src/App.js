import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/index";
import { UserProvider } from "./contexts/User";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Routes />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
