import React from 'react';
import { ControlProps } from '../../App';
import AmazonAPI, { City } from '../../services/AmazonAPI';
import { SelectInput } from '../SelectInput';
import { compareName } from '../utils';

export const CitySelect = ({ control }: ControlProps) => {
  const [citiesOptions, setCitiesOptions] = React.useState<City[]>([]);

  React.useEffect(() => {
    const removerVilaNova = (cities: City[]) => {
      const vilaNova = 'Vila Nova de Gaia, Portugal';
      const index = cities.findIndex((city) => city.name === vilaNova);
      cities.splice(index, 1);
    };

    const fetchCities = async () => {
      const cities = await AmazonAPI.cities();
      cities.sort(compareName);

      // remover repetição de "Vila Nova de Gaia, Portugal"
      removerVilaNova(cities);

      setCitiesOptions(cities);
    };
    fetchCities();
  }, []);

  return (
    <SelectInput
      control={control}
      label="Cidades"
      name="cities"
      options={citiesOptions}
      rules={{ required: 'Insira pelo menos uma cidade' }}
    />
  );
};
