import React from "react";
import { Container } from "./Button.styles";

const Button = ({ children, type }) => {
  return <Container type={type}>{children}</Container>;
};

export default Button;
