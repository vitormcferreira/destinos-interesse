import React from 'react';

import validator from 'validator';
import { ControlProps } from '../../App';
import { TextInput } from '../TextInput';

export const EmailInput = ({ control }: ControlProps) => {
  return (
    <TextInput
      control={control}
      name="email"
      label="E-mail"
      rules={{
        validate: {
          isEmail: (v: string) => validator.isEmail(v) || 'Email inválido',
        },
      }}
    />
  );
};
