import React, { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface InputProps {
  $placeholder: string;
  callbackInput: (arg: ChangeEvent<HTMLInputElement>) => void;
  $value: string;
}

export const Input = ({ $placeholder, callbackInput, $value }: InputProps) => {
  return (
    <StyledInput
      value={$value}
      type="number"
      placeholder={$placeholder}
      onChange={callbackInput}
    />
  );
};
