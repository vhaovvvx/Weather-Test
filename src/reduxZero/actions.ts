import {
  fetchApiOfWeek,
  fetchApiOfNameCity,
} from '../sagas/requests/fetchWeather';

export const getDataWeek = async (_: any, lat: number, lon: number) => {
  const data = await fetchApiOfWeek(lat, lon);
  return { data };
};

export const findCityName = async (_: any, nameCity: string) => {
  try {
    const city = await fetchApiOfNameCity(nameCity);
    const nameOfCity = city.name;
    const data = await fetchApiOfWeek(city.coord.lat, city.coord.lon);
    return { data, nameCity: nameOfCity, error: '' };
  } catch (error) {
    return { error: 'City not found' };
  }
};
