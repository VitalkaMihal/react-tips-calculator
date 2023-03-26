import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-gap: 35px;
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  justify-items: center;
  @media (max-width: 768px) {
    grid-gap: 25px;
    max-width: 330px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  margin-top: 200px;
  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 100px;
  }
`;

const Subtitle = styled.h3`
  font-size: 32px;
  color: rgba(117, 108, 108, 0.57);
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Total = styled.p`
  justify-self: start;
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 568px) {
    font-size: 18px;
  }
`;

export { StyledForm, Title, Subtitle, Total };
