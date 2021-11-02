import { GET_DATA, FIND_CITY } from './actions';

export interface SetDataAction {
  type: typeof GET_DATA;
  lat: number;
  lon: number;
}

export interface SetDataSucces {
  type: typeof FIND_CITY;
  nameCity: string;
}

export const getData = (lat: number, lon: number) => {
  return {
    type: GET_DATA,
    lat,
    lon,
  };
};

export const findCityByName = (nameCity: string) => {
  return {
    type: FIND_CITY,
    nameCity,
  };
};
