import React from "react";
import { StyledInput } from "./styles";

interface InputProps {
  $placeholder: string;
  callbackInput: (arg: string) => void;
}

export const Input = ({ $placeholder, callbackInput }: InputProps) => {
  const handleChange = (event: any) => {
    callbackInput(event.target.value);
  };

  return (
    <StyledInput
      type="number"
      placeholder={$placeholder}
      onChange={handleChange}
    />
  );
};
