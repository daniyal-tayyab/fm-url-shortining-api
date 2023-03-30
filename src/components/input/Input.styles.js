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

  input {
    width: 85%;
    border-radius: 8px;
    border: none;
    padding-left: 1.5rem;
    color: ${(props) => props.theme.grayishViolet};
  }

  button {
    width: 15%;
  }
`;

export const RecentSection = styled.div`
  margin-top: 2rem;
  width: 100%;
`;
