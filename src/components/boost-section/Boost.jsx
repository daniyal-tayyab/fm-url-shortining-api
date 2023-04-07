import React from "react";
import styled from "styled-components";

import background from "../../assets/images/bg-boost-desktop.svg";

import Button from "../button/Button";

const Container = styled.section`
  width: 100vw;
  height: 20rem;
  background-image: url(${background});
  background-color: ${(props) => props.theme.darkViolet};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h4 {
    font-size: 3rem;
    margin-bottom: 2rem;

    @media (max-width: 600px) {
      font-size: 2.3rem;
    }
  }
`;

const Boost = () => {
  return (
    <Container>
      <h4>Boost your links today</h4>
      <Button type="inverted">Get Started</Button>
    </Container>
  );
};

export default Boost;
