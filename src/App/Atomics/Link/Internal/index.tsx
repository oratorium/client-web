import { LocationState } from "history";
import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

type Props = NavLinkProps<LocationState>;

export const Internal = ({ to, style, className, activeStyle, activeClassName, onClick, children }: Props) => (
  <NavLink to={to} style={style} activeStyle={activeStyle} className={className} activeClassName={activeClassName} onClick={onClick}>
    {children}
  </NavLink>
);
