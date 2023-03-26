import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  onClick: () => void;
  enabled: boolean;
}

export const Button = ({ onClick, enabled }: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      disabled={!enabled}
      onClick={onClick}
      enabled={enabled}
    >
      Ohhhoooo 🍻{" "}
    </StyledButton>
  );
};
