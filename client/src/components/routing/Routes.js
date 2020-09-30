import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/Login";
import Reset from "../auth/Reset";
import Register from "../auth/Register";
import Profiles from "../profiles/Profiles";
import NotFound from "../layout/NotFound";
import Alert from "../layout/Alert";

const Routes = () => {
  return (
    <section id="main-section" className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/profiles" component={Profiles}></Route>
        <Route exact path="/reset" component={Reset}></Route>
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};
export default Routes;
