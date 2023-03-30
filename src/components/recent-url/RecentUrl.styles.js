import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: 1.4rem;
`;

export const Original = styled.p``;

export const Shorten = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 1rem;
    color: ${(props) => props.theme.cyan};
  }
`;
