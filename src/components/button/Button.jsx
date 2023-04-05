import React from "react";
import { Container } from "./Button.styles";

const Button = ({ children, type, shortBorder, handleClick }) => {
  return (
    <Container type={type} shortBorder={shortBorder} onClick={handleClick}>
      {children}
    </Container>
  );
};

export default Button;
