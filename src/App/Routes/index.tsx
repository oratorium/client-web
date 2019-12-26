import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";

import { AppStore } from "App/Store";
import { ERROR, HOME } from "constants/routes";
import { AuthRoute } from "./AuthRoute";
import { Error } from "./Error";
import { Home } from "./Home";

const isSignedIn = (store: AppStore) => !!store.Self.id;

export const Routes = () => (
  <Suspense fallback={null}>
    <Switch>
      <AuthRoute path={HOME} exact={true} component={Home} fallback={Home.RedirectionToSignIn} isAuthorized={isSignedIn} />
      <Route path={ERROR} component={Error} exact={true} />
      <Redirect to={ERROR} />
    </Switch>
  </Suspense>
);
