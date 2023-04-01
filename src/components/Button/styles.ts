import styled from "styled-components";

interface StyledButtonProps {
  enabled: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  min-height: 61px;
  background-color: #2ed2c9;
  opacity: ${({ enabled }) => (enabled ? 1 : 0.4)};
  border: none;
  font-size: 24px;
  color: #ffffff;
`;

export { StyledButton };
