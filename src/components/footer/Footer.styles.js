import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  padding: 5rem 20rem;
  background-color: ${(props) => props.theme.veryDarkViolet};
  justify-content: space-between;

  @media (max-width: 1050px) {
    padding: 5rem 15rem;
  }

  @media (max-width: 960px) {
    padding: 5rem 10rem;
  }

  @media (max-width: 960px) {
    padding: 5rem 5rem;
  }

  @media (max-width: 750px) {
    padding: 5rem 1rem;
  }

  @media (max-width: 670px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  column-gap: 7rem;

  @media (max-width: 1100px) {
    column-gap: 5rem;
  }

  @media (max-width: 670px) {
    margin: 4rem 0;
    flex-direction: column;
    column-gap: 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    color: #fff;
    margin-bottom: 2rem;
    font-size: 13px;
    font-weight: bold;
  }

  span {
    color: ${(props) => props.theme.grayishViolet};
    font-size: 13px;
    transition: all 0.5s;
    cursor: pointer;
    margin-bottom: 1rem;

    &:hover {
      color: ${(props) => props.theme.cyan};
    }
  }

  @media (max-width: 670px) {
    align-items: center;
    margin: 1.5rem;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  column-gap: 2rem;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
