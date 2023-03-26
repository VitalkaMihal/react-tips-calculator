import styled from "styled-components";

const StyledButton = styled.button<{ enabled: boolean }>`
  width: 100%;
  min-height: 61px;
  background-color: #2ed2c9;
  opacity: ${({ enabled }) => (enabled ? 1 : 0.4)};
  border: none;
  font-size: 24px;
  color: #ffffff;
`;

export { StyledButton };
