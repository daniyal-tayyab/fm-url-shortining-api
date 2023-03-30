import React from "react";
import Button from "../button/Button";
import RecentUrl from "../recent-url/RecentUrl";

import { Container, InputContainer, RecentSection } from "./Input.styles";

const Input = () => {
  return (
    <>
      <Container>
        <InputContainer>
          <input placeholder="Shorten a link here..." />
          <Button type="inverted" shortBorder="true">
            Shorten It!
          </Button>
        </InputContainer>
      </Container>
      <RecentSection>
        <RecentUrl />
        <RecentUrl />
        <RecentUrl />
      </RecentSection>
    </>
  );
};

export default Input;
