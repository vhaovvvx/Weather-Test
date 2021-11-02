import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'redux-zero/react';
import { formatAMPM } from '../GetDateAmPm';

function WeatherHour({ data }: any) {
  const dataTesting = useSelector((state: any) => state.data);
  const dataTemp: any = [];
  const dataFeelsLike: any = [];
  const currentTime: any = [];

  if (dataTesting.hourly !== undefined) {
    dataTesting.hourly.forEach((res: any, i: number) => {
      if (i % 2 !== 0) {
        dataTemp.push(res.temp);
      }
    });
    dataTesting.hourly.forEach((res: any, i: number) => {
      if (i % 2 !== 0) {
        dataFeelsLike.push(res.feels_like);
      }
    });
    dataTesting.hourly.forEach((res: any, i: number) => {
      if (i % 2 !== 0) {
        currentTime.push(formatAMPM(res.dt));
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
