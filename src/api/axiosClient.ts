import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: '',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config:AxiosRequestConfig) => {
  //handle token here...
  return config;
});

axiosClient.interceptors.response.use(
  (response:AxiosResponse) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    //handle errors
    throw error;
  }
);

export default axiosClient;
