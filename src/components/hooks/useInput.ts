import { ChangeEvent, useCallback, useState } from "react";

interface UseInputProp {
  input: string;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useInput = (
  prop?: ChangeEvent<HTMLInputElement>
): UseInputProp => {
  const [input, setInput] = useState("");
  const handleInput = useCallback((prop: ChangeEvent<HTMLInputElement>) => {
    setInput(prop.target.value);
  }, []);
  
  return {
    input,
    handleInput,
  };
};
