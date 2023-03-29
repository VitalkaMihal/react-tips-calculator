import React from 'react';
import Select from 'react-select';

interface EventProp {
  value: string;
  label: string;
}
interface CustomSelectProps {
  handleTipsSelect: (event: any) => void;
}

const options = [
  { value: '1.1', label: '10%' },
  { value: '1.15', label: '15%' },
  { value: '1.2', label: '20%' }
]

export const CustomSelect = ({ handleTipsSelect }: CustomSelectProps) => {
  console.log(typeof handleTipsSelect)
  return (
    <Select 
      options={options} 
      defaultValue={options[0]}
      onChange={handleTipsSelect}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          width: '560px',
          height: '68px',
          textAlign: 'center',
          border: 'none',
          borderRadius: '34px',
          fontSize: '18px',
          '@media (max-width: 768px)': { width: '330px' },
        }),
      }}
    />
  )
}
