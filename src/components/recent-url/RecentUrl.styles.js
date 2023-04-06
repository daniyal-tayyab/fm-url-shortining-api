import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: 1.4rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Original = styled.p`
  word-break: break-all;
  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const Shorten = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 1rem;
    color: ${(props) => props.theme.cyan};

    @media (max-width: 800px) {
      margin-bottom: 1rem;
    }
  }

  button {
    @media (max-width: 800px) {
      width: 100%;
    }
  }

  button:focus {
    background-color: ${(props) => props.theme.veryDarkViolet};
  }

  button:active {
    background-color: ${(props) => props.theme.veryDarkViolet};
  }

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;
