import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const MainSection = styled.div`
  padding: 0 20rem;
  padding-top: 3rem;
  padding-bottom: 6rem;

  @media (max-width: 925px) {
    padding: 3rem 5rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;
