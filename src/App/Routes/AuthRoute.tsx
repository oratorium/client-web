import React, { FC } from "react";
import { useAppSelector, AppStore } from "App/Store";

type Props = {
  component: FC;
  fallback: FC;
  isAuthorized: (store: AppStore) => boolean;

  /**
   * for react-router
   */
  path: string;
  exact?: boolean;
};

export const AuthRoute = ({ component: Component, fallback: Fallback, isAuthorized }: Props) => {
  const store = useAppSelector(store => store);
  return isAuthorized(store) ? <Component /> : <Fallback />;
};
