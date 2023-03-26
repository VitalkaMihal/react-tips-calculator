import React, { useState } from "react";
import { StyledInput } from "./styles";

interface InputProps {
  $placeholder: string;
  callInput: (arg: string) => void;
}

export const Input = ({ $placeholder, callInput }: InputProps) => {
  const handleChange = (event: any) => {
    callInput(event.target.value);
  };

  return (
    <StyledInput
      type="number"
      placeholder={$placeholder}
      onChange={handleChange}
    />
  );
};
