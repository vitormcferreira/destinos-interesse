import { axios } from './axios';

export interface Country {
  code: string;
  name: string;
}

export interface City {
  code: string;
  name: string;
  country_code: string;
}

export default abstract class AmazonAPI {
  static async countries(): Promise<Country[]> {
    const res = await axios.get('country');
    const countries = JSON.parse(res.data);

    return countries;
  }

  static async cities(): Promise<City[]> {
    const res = await axios.get('city');
    const cities = JSON.parse(res.data);

    return cities;
  }
}
