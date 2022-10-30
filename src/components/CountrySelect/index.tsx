import React from 'react';
import { ControlProps } from '../../App';
import AmazonAPI, { Country } from '../../services/AmazonAPI';
import { SelectInput } from '../SelectInput';
import { compareName } from '../utils';

export const CountrySelect = ({ control }: ControlProps) => {
  const [countriesOptions, setCountriesOptions] = React.useState<Country[]>([]);

  React.useEffect(() => {
    const fetchCountries = async () => {
      const countries = await AmazonAPI.countries();
      countries.sort(compareName);
      setCountriesOptions(countries);
    };
    fetchCountries();
  }, []);

  return (
    <SelectInput
      control={control}
      label="Países"
      name="countries"
      options={countriesOptions}
      rules={{ required: 'Selecione pelo menos um país' }}
    />
  );
};
