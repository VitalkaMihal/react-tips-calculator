import React from "react";
import Select, { SingleValue } from "react-select";
import { selectStyle } from "./styles";
import { EventProp } from "../Form/Form";

interface CustomSelectProps {
  handleTipsSelect: (option: SingleValue<EventProp>) => void;
  tips: EventProp;
  options: EventProp[];
}

export const CustomSelect = ({
  handleTipsSelect,
  tips,
  options,
}: CustomSelectProps) => {
  return (
    <Select
      options={options}
      defaultValue={tips}
      onChange={handleTipsSelect}
      styles={selectStyle}
    />
  );
};
