import React from 'react';
import { useSelector } from 'redux-zero/react';
import { formatAMPM, getKm, getWindKmPerSec } from '../GetDateAmPm';
import {
  Humidity,
  IconUv,
  Pressure,
  SunriseAndSunset,
  Visibility,
  WindStatus,
} from '../Icon/Icon';
import classes from './WeatherOneDay.module.css';

const WeatherOneDay = () => {
  const data = useSelector((state: any) => state.data);
  console.log('data2', data);

  return (
    <>
      {data === undefined ? (
        <div>loadding...</div>
      ) : (
        <div className={`row ${classes.test}`}>
          <div className={`col c-6 l-4 m-12 ${classes.statusItem}`}>
            <div className={classes.bgWhite}>
              <div className={classes.mgBottom1r}>UV index</div>
              <div className={`${classes.icon} ${classes.uv}`}>
                <IconUv />
              </div>
              <div className={classes.content}>{data.current.uvi}</div>
            </div>
          </div>
          <div className={`col c-6 l-4 m-12 ${classes.statusItem}`}>
            <div className={classes.bgWhite}>
              <div className={classes.mgBottom1r}>Wind Status</div>
              <div className={classes.icon}>
                <WindStatus />
              </div>
              <div className={classes.content}>
                {getWindKmPerSec(data.current.wind_speed)}
              </div>
            </div>
          </div>
          <div className={`col c-6 l-4 m-12 ${classes.statusItem}`}>
            <div className={classes.bgWhite}>
              <div className={classes.mgBottom1r}>{'Sunrise & Sunset'}</div>
              <div className={`flex ${classes.icon}`}>
                <div className={classes.sunRise}>
                  <SunriseAndSunset />
                  <div className={classes.content}>
                    {formatAMPM(data.current.sunrise)}
                  </div>
                </div>
                <div className={classes.sunRise}>
                  <SunriseAndSunset />
                  <div className={classes.content}>
                    {formatAMPM(data.current.sunset)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col c-6 l-4 m-12 ${classes.statusItem}`}>
            <div className={classes.bgWhite}>
              <div className={classes.mgBottom1r}>Humidity</div>
              <div className={classes.icon}>
                <Humidity />
              </div>
              <div
                className={classes.content}
              >{`${data.current.humidity} %`}</div>
            </div>
          </div>
          <div className={`col c-6 l-4 m-12 ${classes.statusItem}`}>
            <div className={classes.bgWhite}>
              <div className={classes.mgBottom1r}>Visibility</div>
              <div className={classes.icon}>
                <Visibility />
              </div>
              <div className={classes.content}>
                {getKm(data.current.visibility)}
              </div>
            </div>
          </div>
          <div className={`col c-6 l-4 m-12 ${classes.statusItem}`}>
            <div className={classes.bgWhite}>
              <div className={classes.mgBottom1r}>Pressure</div>
              <div className={classes.icon}>
                <Pressure />
              </div>
              <div
                className={classes.content}
              >{`${data.current.pressure} hPa`}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherOneDay;
