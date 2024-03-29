import React, { useState, useEffect } from "react";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import gsap from "gsap";

import { Container, Nav, AuthContainer, MobileMenuIcon } from "./Header.styles";
import Button from "../button/Button";
import MobileMenu from "../mobile-menu/MobileMenu";

const Header = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);

  const toggleMobileMenu = () => {
    gsap.to(".mobile-menu", { x: 0, y: 200 });
    setIsMenuBarOpen(!isMenuBarOpen);
  };

  return (
    <Container>
      <Logo />
      <Nav>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </Nav>
      <AuthContainer>
        <Button>Login</Button>
        <Button type="inverted">Sign up</Button>
      </AuthContainer>
      <MobileMenuIcon onClick={toggleMobileMenu} />
      <MobileMenu isMenuBarOpen={isMenuBarOpen} className="mobile-menu" />
    </Container>
  );
};

export default Header;
