import React, { useState } from "react";
import { StyledForm, Title, Subtitle, Total } from "./styles";
import { Input } from "../Input/Input";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Button } from "../Button/Button";

export const Form = () => {
  const [bill, setBill] = useState(0);
  const [persons, setPersons] = useState(0);
  const [tips, setTips] = useState(0);
  const [total, setTotal] = useState("0,00");

  const enabled = Boolean(bill && persons && tips);

  const handleBillInput = (value: string) => {
    setBill(Number(value));
  };

  const handlePersonInput = (value: string) => {
    setPersons(Number(value));
  };

  const handleTipsSelect = (value: string) => {
    setTips(Number(value));
  };

  const handleTotal = () => {
    setTotal(String(((bill * tips) / persons).toFixed(2)));
  };

  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let's go calculate your tips</Subtitle>
      <Input $placeholder="Enter bill" callbackInput={handleBillInput} />
      <Input $placeholder="Enter persons" callbackInput={handlePersonInput} />
      <CustomSelect handleTipsSelect={handleTipsSelect} />
      <Total>Total: {total}$</Total>
      <Button onClick={handleTotal} enabled={enabled} />
    </StyledForm>
  );
};
