import React from "react";
import { Container } from "./Button.styles";

const Button = ({ children, type, shortBorder }) => {
  return (
    <Container type={type} shortBorder={shortBorder}>
      {children}
    </Container>
  );
};

export default Button;
