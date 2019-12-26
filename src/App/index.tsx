import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./styles";
import { Routes } from "./Routes";

export const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
