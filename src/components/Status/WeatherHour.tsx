import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'redux-zero/react';
import { formatAMPM } from '../GetDateAmPm';

function WeatherHour() {
  type TState = {
    data: Object;
    error: string;
    nameCity: string;
  };

  const dataTesting = useSelector((state: TState) => state.data);

  const dataTemp: Array<number> = [];
  const dataFeelsLike: Array<number> = [];
  const currentTime: Array<string> = [];

  interface T {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

  type TRes = {
    clounds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    himidity: number;
    pop: number;
    pressure: number;
    temp: number;
    uvi: number;
    weather: Array<T>;
    visibility: number;
    wind_deg: number;
    wind_gust: number;
    wind_speed: number;
  };

  if (dataTesting.hourly !== undefined) {
    dataTesting.hourly.forEach((res: TRes, i: number) => {
      console.log('respon', res);
      if (i % 2 !== 0) {
        dataTemp.push(res.temp);
      }
    });
    dataTesting.hourly.forEach((res: TRes, i: number) => {
      if (i % 2 !== 0) {
        dataFeelsLike.push(res.feels_like);
      }
    });
    dataTesting.hourly.forEach((res: TRes, i: number) => {
      if (i % 2 !== 0) {
        const dataFormat = formatAMPM(res.dt);
        currentTime.push(dataFormat);
      }
    });
  }

  return (
    <>
      <Line
        data={{
          labels: currentTime,
          datasets: [
            {
              data: dataTemp,
              label: 'Temp °C',
              borderColor: '#3e95cd',
              fill: false,
            },
            {
              data: dataFeelsLike,
              label: 'Feel like °C',
              borderColor: '#8e5ea2',
              fill: false,
            },
          ],
        }}
      />
    </>
  );
}

export default WeatherHour;
