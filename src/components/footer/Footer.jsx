import React from "react";
import {
  Column,
  Container,
  LinksContainer,
  SocialContainer,
} from "./Footer.styles";

import { ReactComponent as Logo } from "../../assets/images/logo-white.svg";

import facebook from "../../assets/images/icon-facebook.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";

const socials = [facebook, instagram, pinterest, twitter];

const Footer = () => {
  return (
    <Container>
      <Logo />
      <LinksContainer>
        <Column>
          <h5>Features</h5>
          <span>Link Shortening</span>
          <span>Branded Links</span>
          <span>Analytics</span>
        </Column>
        <Column>
          <h5>Resources</h5>
          <span>Blog</span>
          <span>Developers</span>
          <span>Support</span>
        </Column>
        <Column>
          <h5>Company</h5>
          <span>About</span>
          <span>Our Team</span>
          <span>Careers</span>
          <span>Contact</span>
        </Column>
      </LinksContainer>
      <SocialContainer>
        {socials.map((item, index) => (
          <img src={item} key={index} alt={item} />
        ))}
      </SocialContainer>
    </Container>
  );
};

export default Footer;
