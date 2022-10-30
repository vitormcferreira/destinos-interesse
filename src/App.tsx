import React from 'react';

import { Button, Container, DialogTitle, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { Control, SubmitHandler, useForm } from 'react-hook-form';
import { CepInput } from './components/CepInput';
import { CitySelect } from './components/CitySelect';
import { CountrySelect } from './components/CountrySelect';
import { EmailInput } from './components/EmailInput';
import { NameInput } from './components/NameInput';
import { PhoneInput } from './components/PhoneInput';

export type Formulario = {
  name: string;
  email: string;
  phone: string;
  cep: string;
  countries: [];
  cities: [];
};

export type ControlProps = {
  control: Control<Formulario, any>;
};

const App = () => {
  const { control, handleSubmit } = useForm<Formulario>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      cep: '',
      countries: [],
      cities: [],
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Formulario> = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <Container>
      <Paper
        elevation={4}
        sx={{
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <Box display="flex" justifyContent="space-around">
          <Box display="flex" flexDirection="column" width="40%">
            <DialogTitle>Dados Pessoais</DialogTitle>
            <NameInput control={control} />
            <EmailInput control={control} />
            <PhoneInput control={control} />
            <CepInput control={control} />
          </Box>
          <Box display="flex" flexDirection="column" width="40%">
            <DialogTitle>Dados de Destino</DialogTitle>
            <CountrySelect control={control} />
            <CitySelect control={control} />
          </Box>
        </Box>
        <Button
          sx={{
            padding: '16px 32px',
            width: 'fit-content',
            alignSelf: 'center',
          }}
          type="submit"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
        >
          Confirmar
        </Button>
      </Paper>
    </Container>
  );
};

export default App;
