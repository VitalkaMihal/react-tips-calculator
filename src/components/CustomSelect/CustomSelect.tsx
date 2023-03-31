import React from 'react';
import Select, { SingleValue } from 'react-select';
import { selectStyle } from './styles';
import { EventProp } from '../Form/Form';

interface CustomSelectProps {
  handleTipsSelect: (option: SingleValue<EventProp>) => void;
  tips: EventProp;
}

export const options: EventProp[] = [
  { value: '1.1', label: '10%' },
  { value: '1.15', label: '15%' },
  { value: '1.2', label: '20%' }
]

export const CustomSelect = ({ handleTipsSelect, tips }: CustomSelectProps) => {
  return (
    <Select 
      options={options} 
      defaultValue={tips}
      onChange={handleTipsSelect}
      styles={selectStyle}
    />
  )
}
