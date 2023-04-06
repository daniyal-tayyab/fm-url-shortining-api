import styled from "styled-components";

import shortenBg from "../../assets/images/bg-shorten-desktop.svg";

export const Container = styled.section`
  width: 100%;
  height: auto;
  padding: 4rem;
  border-radius: 8px;
  background-image: url(${shortenBg});
  background-color: ${(props) => props.theme.darkViolet};
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  column-gap: 2rem;

  position: relative;

  input {
    width: 85%;
    border-radius: 8px;
    border: none;
    padding-left: 1.5rem;
    color: ${(props) => props.theme.grayishViolet};

    &[aria-invalid="true"] {
      outline: 2px solid ${(props) => props.theme.red};
    }

    &[aria-invalid="true"] ~ span {
      opacity: 1;
      transform: translateY(0);
    }

    &[aria-invalid="false"] ~ span {
      opacity: 0;
    }

    @media (max-width: 500px) {
      width: 100%;
      margin-bottom: 1rem;
      padding: 1.2rem;
      margin-bottom: 2.8rem;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  left: 0;
  top: 4.5rem;

  font-size: 1rem;
  color: ${(props) => props.theme.red};
  opacity: 0;
  transform: translateY(-1rem);
  transition: all 0.5s;

  @media (max-width: 500px) {
  }
`;

export const RecentSection = styled.div`
  margin-top: 2rem;
  width: 100%;
  font-style: italic;
`;
