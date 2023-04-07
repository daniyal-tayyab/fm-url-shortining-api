import styled from "styled-components";

export const Card = styled.div`
    flex-1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

     @media (max-width: 600px) {
        align-items: center;
        margin-bottom: 3rem;
     }
`;

export const CardMedia = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.darkViolet};
`;

export const CardTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-transform: capitalize;
  margin: 2rem 0;
`;

export const CardDescription = styled.div`
  color: ${(props) => props.theme.grayishViolet};
  font-size: 1.4rem;
  line-height: 1.7;
  width: 90%;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    text-align: center;
    width: 90%;
  }
`;
