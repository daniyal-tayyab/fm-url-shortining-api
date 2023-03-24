import styled from "styled-components";

import { AiOutlineMenu } from "react-icons/ai";

export const Container = styled.header`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 1080px) {
    justify-content: space-between;
  }

  @media (max-width: 1080px) {
    justify-content: space-between;
  }
`;

export const Nav = styled.nav`
  font-size: 1.3rem;

  margin-left: 5rem;
  color: ${(props) => props.theme.grayishViolet};

  ul {
    list-style: none;
    display: flex;

    li {
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: ${(props) => props.theme.veryDarkViolet};
      }
    }

    li:not(:last-child) {
      margin-right: 4rem;
    }
  }

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const AuthContainer = styled.div`
  margin-left: auto;

  button:not(:last-child) {
    margin-right: 1rem;
  }

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled(AiOutlineMenu)`
  margin-left: 2rem;
  color: ${(props) => props.theme.grayishViolet};
  font-size: 2rem;
  cursor: pointer;

  @media (min-width: 1080px) {
    display: none;
  }
`;
