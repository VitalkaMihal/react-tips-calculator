import React, { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface InputProps {
  placeholder: string;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  input: string;
}

export const Input = ({ placeholder, input, handleInput }: InputProps) => {
  return (
    <StyledInput
      value={input}
      type="number"
      placeholder={placeholder}
      onChange={handleInput}
    />
  );
};
