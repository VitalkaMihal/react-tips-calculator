import { ChangeEvent, useState } from "react";

interface UseInputProp {
  input: string;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useInput = (
  prop?: ChangeEvent<HTMLInputElement>
): UseInputProp => {
  const [input, setInput] = useState("");
  const handleInput = (prop: ChangeEvent<HTMLInputElement>) => {
    setInput(prop.target.value);
  };
  return {
    input,
    handleInput,
  };
};
