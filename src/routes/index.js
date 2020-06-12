import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import Home from "../pages/Home";
import Casts from "../pages/Casts";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/casts" component={Casts} />
      <Redirect to="/" />
    </Switch>
  );
}
