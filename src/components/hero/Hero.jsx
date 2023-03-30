import React from "react";

import Button from "../button/Button";
import { Section, ContentSection, MediaSection } from "./Hero.styles";
import IllustrationWorking from "../../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <Section>
      <MediaSection>
        <img src={IllustrationWorking} alt="hero" />
      </MediaSection>
      <ContentSection>
        <h1>More than just shorter links</h1>
        <p>
          Buil your brand's recognition and get detailed insightes on how your
          links are performing.
        </p>

        <Button type="inverted">Get Started</Button>
      </ContentSection>
    </Section>
  );
};

export default Hero;
