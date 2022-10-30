import React from 'react';
import { ControlProps } from '../../App';

import { TextInput } from '../TextInput';

export const NameInput = ({ control }: ControlProps) => {
  return (
    <TextInput
      control={control}
      name="name"
      label="Nome"
      rules={{
        required: 'Insira um nome',
        minLength: { value: 3, message: 'Deve ter mais de 3 caracteres' },
      }}
    />
  );
};
