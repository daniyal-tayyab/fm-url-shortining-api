import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translate(-50%);
  width: 90vw;
  height: 50rem;
  background-color: ${(props) => props.theme.veryDarkBlue};
  border-radius: 2rem;
  padding: 3rem 2rem;
  display: ${(props) => (props.open ? "block" : "none")};
  color: white;
`;
