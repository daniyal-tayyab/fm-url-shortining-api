import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translate(-50%);
  width: 90vw;
  height: 40rem;
  background-color: ${(props) => props.theme.darkViolet};
  border-radius: 1rem;
  padding: 3rem 2rem;
  display: ${(props) => (props.open ? "block" : "none")};
  color: white;
`;

export const Menu = styled.nav`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  a {
    text-decoration: none;
    color: inherit;

    margin-bottom: 2rem;
  }

  button {
    margin-bottom: 2rem;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.grayishViolet};
  margin-bottom: 2rem;
`;
