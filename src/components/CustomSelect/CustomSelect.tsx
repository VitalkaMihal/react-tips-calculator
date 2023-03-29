import React from 'react';
import Select from 'react-select';
import { selectStyle } from './styles';
import { EventProp } from '../Form/Form';

interface CustomSelectProps {
  handleTipsSelect: (event: any) => void;
  $value: string;
}

const options = [
  { value: '1.1', label: '10%' },
  { value: '1.15', label: '15%' },
  { value: '1.2', label: '20%' }
]

export const CustomSelect = ({ handleTipsSelect, $value }: CustomSelectProps) => {
  return (
    <Select 
      options={options} 
      defaultValue={options[0]}
      onChange={handleTipsSelect}
      styles={selectStyle}
    />
  )
}
