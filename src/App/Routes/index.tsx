import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";

import { ERROR, HOME } from "constants/routes";
import { Error } from "./Error";
import { Home } from "./Home";

export const Routes = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route path={HOME} component={Home} exact={true} />
      <Route path={ERROR} component={Error} exact={true} />
      <Redirect to={ERROR} />
    </Switch>
  </Suspense>
);
