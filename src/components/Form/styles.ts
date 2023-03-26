import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-gap: 35px;
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  justify-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-top: 200px;
`;

const Subtitle = styled.h3`
  font-size: 32px;
  color: rgba(117, 108, 108, 0.57);
`;

const Total = styled.p`
  justify-self: start;
  font-size: 24px;
  font-weight: 500;
`;

export { StyledForm, Title, Subtitle, Total };
