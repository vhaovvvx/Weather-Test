import axiosClient from './axiosClient';

const api = {
  baseUrlWeather: 'https://api.openweathermap.org/data/2.5/weather',
  baseUrlOneCall: 'https://api.openweathermap.org/data/2.5/onecall',
};

// interface params {
//   lat: number;
//   lon: number;
//   q: string;
//   units: string;
//   APPID: string;
// }

const weatherApi = {
  getDataOneDay: async (params: any) => {
    const data = await axiosClient.get(api.baseUrlWeather, {
      params: params,
    });
    return data;
  },
  getDataWeek: async (params: any) => {
    const data = await axiosClient.get(api.baseUrlOneCall, {
      params: params,
    });
    return data;
  },
};

export default weatherApi;
