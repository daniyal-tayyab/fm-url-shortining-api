import styled from "styled-components";

import shortenBg from "../../assets/images/bg-shorten-desktop.svg";

export const Container = styled.section`
  width: 100%;
  height: 110px;
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
  height: 40px;
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
  }

  button {
    width: 15%;
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
`;

export const RecentSection = styled.div`
  margin-top: 2rem;
  width: 100%;
  font-style: italic;
`;
