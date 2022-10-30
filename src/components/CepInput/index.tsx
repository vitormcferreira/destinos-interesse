import React from 'react';

import cep from 'cep-promise';
import { ControlProps } from '../../App';
import { TextInput } from '../TextInput';

const isCep = async (v: string) => {
  // A validação do formato do CEP deveria ser feita
  // por cep-promise conforme indicado em:
  // https://github.com/BrasilAPI/cep-promise#quando-o-cep-possui-um-formato-inv%C3%A1lido
  // mas não está funcionando corretamente. Então fiz
  // uma validação aqui
  const isValid = (cep: string) => /^[0-9]{5}-?[0-9]{3}$/.test(cep);

  if (!isValid(v)) {
    return false;
  }

  return await cep(v)
    .then(() => true)
    .catch(() => false);
};

export const CepInput = ({ control }: ControlProps) => {
  return (
    <TextInput
      control={control}
      name="cep"
      label="CEP"
      rules={{
        validate: {
          isCep: async (v: string) => (await isCep(v)) || 'CEP inválido',
        },
      }}
    />
  );
};
