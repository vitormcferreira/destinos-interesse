import React from 'react';

import {
  Autocomplete,
  FormControl,
  FormHelperText,
  TextField,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { ControlProps, Formulario } from '../../App';

type OptionsProps = {
  code: string;
  name: string;
};

type SelectInputProps = {
  name: keyof Formulario;
  label: string;
  options: OptionsProps[];
  rules?: any;
} & ControlProps;

export const SelectInput = ({
  name,
  label,
  options,
  control,
  rules,
}: SelectInputProps) => {
  const [values, setValues] = React.useState<OptionsProps[]>([]);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <Autocomplete
            {...field}
            multiple
            onChange={(_, d) => {
              field.onChange(d);
              setValues(d);
            }}
            value={values}
            isOptionEqualToValue={(option, value) => option.code === value.code}
            getOptionLabel={(option) => option.name}
            options={options}
            groupBy={(option) => option.name[0]}
            renderInput={(params) => (
              <>
                <TextField
                  {...params}
                  required
                  margin="normal"
                  label={label}
                  variant="outlined"
                  error={!!error}
                />
                {error && (
                  <FormHelperText error>{error.message}</FormHelperText>
                )}
              </>
            )}
          />
        </FormControl>
      )}
    />
  );
};
