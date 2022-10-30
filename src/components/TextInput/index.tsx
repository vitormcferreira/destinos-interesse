import React from 'react';

import { FormControl, FormHelperText, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { ControlProps, Formulario } from '../../App';

type TextInputProps = {
  name: keyof Formulario;
  label: string;
  rules?: any;
} & ControlProps;

export const TextInput = ({ name, control, label, rules }: TextInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <TextField
            {...field}
            required
            autoComplete="off"
            margin="normal"
            label={label}
            variant="outlined"
            error={!!error}
          />
          {error && <FormHelperText error>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};
