import React from 'react';
import Select, { SingleValue } from 'react-select';
import { selectStyle } from './styles';
import { EventProp } from '../Form/Form';

interface CustomSelectProps {
  handleTipsSelect: (option: SingleValue<EventProp>) => void;
}

const options = [
  { value: '1.1', label: '10%' },
  { value: '1.15', label: '15%' },
  { value: '1.2', label: '20%' }
]

export const CustomSelect = ({ handleTipsSelect }: CustomSelectProps) => {
  return (
    <Select 
      options={options} 
      defaultValue={options[0]}
      onChange={handleTipsSelect}
      styles={selectStyle}
    />
  )
}
