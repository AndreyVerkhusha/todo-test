import { Button, TextField } from '@mui/material';
import React, { FC, useState } from 'react';

import { InputFieldContainer } from './input-field.styles';

type InputFieldProps = {
  placeholder: string;
  textButton: string;
  onSubmit: (value: string) => void;
};

export const InputField: FC<InputFieldProps> = ({ onSubmit, placeholder, textButton }) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    onSubmit(value);
    setValue('');
  };

  return (
    <InputFieldContainer>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        size="small"
        variant="outlined"
      />
      <Button disabled={!value} onClick={handleSubmit} variant="contained">
        {textButton}
      </Button>
    </InputFieldContainer>
  );
};
