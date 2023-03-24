import React from "react";

import Button from "../button/Button";
import { Container, Menu, Divider } from "./MobileMenu.styles";

const MobileMenu = ({ isMenuBarOpen }) => {
  return (
    <Container open={isMenuBarOpen}>
      <Menu>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
        <Divider />
        <Button>Login</Button>
        <Button type="inverted">Sign Up</Button>
      </Menu>
    </Container>
  );
};

export default MobileMenu;
