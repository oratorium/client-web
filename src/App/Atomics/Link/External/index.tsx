import React from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const External = ({ children, ...props }: Props) => <a {...props}>{children}</a>;
