import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  enabled: boolean;
}

export const Button = ({ enabled }: ButtonProps) => {
  return (
    <StyledButton
      disabled={!enabled}
      enabled={enabled}
    >
      Ohhhoooo 🍻{" "}
    </StyledButton>
  );
};
