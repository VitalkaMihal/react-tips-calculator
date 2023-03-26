import React from 'react'
import { StyledForm, Title, Subtitle } from './styles'
import { Input } from '../Input/Input'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { Button } from '../Button/Button'

export const Form = () => {
  return (
    <StyledForm>
      <Title>
        Welcome to App
      </Title>
      <Subtitle>
        Let's go calculate your tips
      </Subtitle>
      <Input $placeholder='Enter bill' />
      <Input $placeholder='Enter  persons' />
      <p>Total:  0.00$</p>
      <CustomSelect />
      <Button />
    </StyledForm>
  )
}
