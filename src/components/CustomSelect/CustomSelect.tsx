import React from 'react';
import Select from 'react-select';

interface CustomSelectProps {
  handleTipsSelect: (arg: string) => void;
}

const options = [
  { value: '1.1', label: '10%' },
  { value: '1.15', label: '15%' },
  { value: '1.2', label: '20%' }
]

export const CustomSelect = ({ handleTipsSelect }: CustomSelectProps) => {
  const onHandleChange = (e: any) => {
    handleTipsSelect(e.value);
  }

  return (
    <Select 
      options={options} 
      onChange={onHandleChange}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          width: '560px',
          height: '68px',
          textAlign: 'center',
          border: 'none',
          borderRadius: '34px',
          fontSize: '18px',
        }),
      }}
    />
  )
}
