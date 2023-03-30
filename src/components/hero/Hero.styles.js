import styled from "styled-components";

import IllustrationWorking from "../../assets/images/illustration-working.svg";

export const Section = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: row-reverse;
  // background: pink;

  @media (max-width: 810px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentSection = styled.div`
  width: 50%;
  align-self: center;

  h1 {
    font-size: 5rem;
    font-weight: bold;
    line-height: 1.2;
  }

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme.grayishViolet};
    width: 90%;
  }

  button {
    margin-top: 3rem;
  }

  @media (max-width: 810px) {
    width: 90%;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

export const MediaSection = styled.div`
  width: 50%;
  height: 400px;

  img {
    height: 100%;

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
