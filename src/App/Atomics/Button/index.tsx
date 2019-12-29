import React, { ReactNode } from "react";
import styled from "styled-components";

const Layout = styled.button``;

type Props = {
  type?: "button" | "reset" | "submit";
  children: ReactNode;
  onClick: () => void;
};

export const Button = ({ type = "button", children, onClick }: Props) => (
  <Layout type={type} onClick={onClick}>
    {children}
  </Layout>
);
