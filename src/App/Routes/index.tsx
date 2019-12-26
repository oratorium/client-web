import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";

import { AppStore } from "App/Store";
import { ERROR, HOME, RESET_PASSWORD, SIGN_IN, SIGN_UP } from "constants/routes";
import { AuthRoute } from "./AuthRoute";
import { Error } from "./Error";
import { Home } from "./Home";
import { ResetPassword } from "./ResetPassword";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const isSignedIn = (store: AppStore) => !!store.Self.id;
const isNonSignedIn = (store: AppStore) => !store.Self.id;

const RedirectionToHome = () => <Redirect to={HOME} />;

export const Routes = () => (
  <Suspense fallback={null}>
    <Switch>
      <AuthRoute path={HOME} exact={true} component={Home} fallback={Home.RedirectionToSignIn} isAuthorized={isSignedIn} />
      <AuthRoute path={SIGN_IN} exact={true} component={SignIn} fallback={RedirectionToHome} isAuthorized={isNonSignedIn} />
      <AuthRoute path={SIGN_UP} exact={true} component={SignUp} fallback={RedirectionToHome} isAuthorized={isNonSignedIn} />
      <AuthRoute path={RESET_PASSWORD} exact={true} component={ResetPassword} fallback={RedirectionToHome} isAuthorized={isNonSignedIn} />
      <Route path={ERROR} component={Error} exact={true} />
      <Redirect to={ERROR} />
    </Switch>
  </Suspense>
);
