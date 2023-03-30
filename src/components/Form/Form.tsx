import React, { ChangeEvent, useState } from "react";
import { StyledForm, Title, Subtitle, Total } from "./styles";
import { Input } from "../Input/Input";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Button } from "../Button/Button";
import { SingleValue } from "react-select";

export interface EventProp {
  value: string;
  label: string;
}

export const Form = () => {
  const [bill, setBill] = useState("");
  const [persons, setPersons] = useState("");
  const [tips, setTips] = useState("1.1");
  const [total, setTotal] = useState("0,00");

  const enabled = Boolean(bill && persons);

  const handleBillInput = (event: ChangeEvent<HTMLInputElement>) => {
    setBill(event.target.value);
  };

  const handlePersonInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPersons(event.target.value);
  };

  const handleTipsSelect = (event: SingleValue<EventProp>) => {
    if (event) {
      setTips(event.value);
    }
  };

  const handleTotal = () => {
    setTotal(
      String(((Number(bill) * Number(tips)) / Number(persons)).toFixed(2))
    );
  };
  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let's go calculate your tips</Subtitle>
      <Input
        $placeholder="Enter bill"
        $value={bill}
        callbackInput={handleBillInput}
      />
      <Input
        $placeholder="Enter persons"
        $value={persons}
        callbackInput={handlePersonInput}
      />
      <CustomSelect handleTipsSelect={handleTipsSelect} />
      <Total>Total: {total}$</Total>
      <Button onClick={handleTotal} enabled={enabled} />
    </StyledForm>
  );
};
