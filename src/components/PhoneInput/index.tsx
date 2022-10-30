import React from 'react';

import validator from 'validator';
import { ControlProps } from '../../App';
import { TextInput } from '../TextInput';

export const PhoneInput = ({ control }: ControlProps) => {
  return (
    <TextInput
      control={control}
      name="phone"
      label="Telefone"
      rules={{
        validate: {
          isPhone: (v: string) =>
            validator.isMobilePhone(v) || 'Telefone inválido',
        },
      }}
    />
  );
};
