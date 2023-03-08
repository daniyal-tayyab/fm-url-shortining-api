import React from "react";
import { Container } from "./MobileMenu.styles";

const MobileMenu = ({ isMenuBarOpen }) => {
  return <Container open={isMenuBarOpen}>MobileMenu</Container>;
};

export default MobileMenu;
