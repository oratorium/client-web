import React, { ChangeEvent, FocusEvent, CSSProperties } from "react";
import styled from "styled-components";

import { identity } from "utils/identity";

const Layout = styled.input`
  border-bottom: 1px solid black;
`;

type Props = {
  className?: string;
  style?: CSSProperties;
  type?: "text" | "email" | "password";
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  minLength?: number;
  maxLnegth?: number;
  a11y?: string;
  onChange?: (value: string) => void;
  onFocus?: (value: string) => void;
  onBlur?: (value: string) => void;
};

export const InputText = ({
  className,
  style,
  type = "text",
  defaultValue,
  value,
  placeholder,
  minLength,
  maxLnegth,
  a11y,
  onChange = identity,
  onFocus = identity,
  onBlur = identity
}: Props) => {
  const change = (event: ChangeEvent<HTMLInputElement>) => onChange(event.currentTarget.value);
  const focus = (event: FocusEvent<HTMLInputElement>) => onFocus(event.currentTarget.value);
  const blur = (event: FocusEvent<HTMLInputElement>) => onBlur(event.currentTarget.value);
  return (
    <Layout
      className={className}
      style={style}
      type={type}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLnegth}
      alt={a11y}
      onChange={change}
      onFocus={focus}
      onBlur={blur}
    />
  );
};
