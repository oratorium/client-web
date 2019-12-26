import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./styles";
import { Routes } from "./Routes";
import { AppStoreProvider } from "./Store";

export const App = () => (
  <BrowserRouter>
    <AppStoreProvider>
      <Routes />
    </AppStoreProvider>
  </BrowserRouter>
);
