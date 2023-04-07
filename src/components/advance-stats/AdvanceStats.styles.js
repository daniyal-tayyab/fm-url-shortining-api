import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin: 10rem 0;
`;

export const HeadingSection = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;

  h3 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme.grayishViolet};
    margin-top: 1rem;
    width: 50%;
  }
`;

export const CardSection = styled.div`
  width: 100%;
  display: flex;
  column-gap: 2rem;
  margin-top: 10rem;
  height: 33rem;

  @media (max-width: 1145px) {
    height: 40rem;
  }

  @media (max-width: 955px) {
    height: 45rem;
    column-gap: 2.5rem;
  }

  @media (max-width: 925px) {
    height: 33rem;
    column-gap: 2rem;
  }

  @media (max-width: 775px) {
    height: 40rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`;
