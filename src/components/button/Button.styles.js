import styled from "styled-components";

export const Container = styled.button`
  padding: 1.2rem 2.5rem;
  background-color: ${(props) =>
    props.type === "inverted" ? "hsl(180, 66%, 49%)" : "transparent"};

  color: ${(props) =>
    props.type === "inverted" ? "#fff" : "hsl(257, 7%, 63%)"};

  border-radius: 2rem;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
