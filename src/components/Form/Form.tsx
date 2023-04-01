import React, { useState } from "react";
import { StyledForm, Title, Subtitle, Total } from "./styles";
import { Input } from "../Input/Input";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Button } from "../Button/Button";
import { SingleValue } from "react-select";
import { useInput } from "../hooks/useInput";

export interface EventProp {
  value: string;
  label: string;
}

export const options: EventProp[] = [
  { value: "1.1", label: "10%" },
  { value: "1.15", label: "15%" },
  { value: "1.2", label: "20%" },
];

export const Form = () => {
  const bill = useInput();
  const persons = useInput();
  const [tips, setTips] = useState(options[0]);
  const [total, setTotal] = useState("0,00");
  const enabled = Boolean(bill.input && persons.input);

  const handleTipsSelect = (event: SingleValue<EventProp>) => {
    if (event) {
      setTips(event);
    }
  };

  const handleTotal = () => {
    setTotal(
      String(
        (
          (Number(bill.input) * Number(tips.value)) /
          Number(persons.input)
        ).toFixed(2)
      )
    );
  };
  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let's go calculate your tips</Subtitle>
      <Input placeholder="Enter bill" {...bill} />
      <Input placeholder="Enter persons" {...persons} />
      <CustomSelect
        handleTipsSelect={handleTipsSelect}
        tips={tips}
        options={options}
      />
      <Total>Total: {total}$</Total>
      <Button onClick={handleTotal} enabled={enabled} />
    </StyledForm>
  );
};
