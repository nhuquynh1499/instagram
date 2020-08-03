import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home/index";
import SignUp from "../pages/SignUp/index";
import SignIn from "../pages/SignIn/index";
import ForgotPassword from "../pages/ForgotPassword/index";

import { PrivateRoute } from "./PrivateRoute";

export default function () {
  return (
    <Switch>
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <PrivateRoute exact path="/" component={Home} />
    </Switch>
  );
}