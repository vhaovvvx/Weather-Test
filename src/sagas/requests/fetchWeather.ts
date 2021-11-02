// import { Component } from 'react';
import weatherApi from '../../api/weatherApi';

const api = {
  key: '90d689951f066eafb8634a169911a8db',
};

export const fetchApiOfNameCity = async (nameCity: string): Promise<any> => {
  const data = await weatherApi.getDataOneDay({
    q: nameCity,
    units: 'metric',
    APPID: api.key,
  });
  return data;
};

export const fetchApiOfWeek = async (
  lat: number,
  lon: number
): Promise<any> => {
  const data = await weatherApi.getDataWeek({
    lat: lat,
    lon: lon,
    units: 'metric',
    APPID: api.key,
  });
  return data;
};
