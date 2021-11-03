import { TSObjectKeyword } from '@babel/types';
import { call, put } from '@redux-saga/core/effects';
import { type } from 'os';
import { takeLatest } from 'redux-saga/effects';
import {
  FIND_CITY,
  FIND_CITY_FAIL,
  FIND_CITY_SUCCESS,
  GET_DATA,
  GET_DATA_SUCCESS,
} from '../../redux/actions/actions';
import { fetchApiOfNameCity, fetchApiOfWeek } from '../requests/fetchWeather';

function* handleGetData(action: any): Generator {
  const data = yield call(fetchApiOfWeek, action.lat, action.lon);
  yield put({ type: GET_DATA_SUCCESS, data });
}

export type TCoord = {
  lon: number;
  lat: number;
};

export type TCityResponse = {
  name: string;
  coord: TCoord;
};

function* handleFindCity(action: any): Generator {
  console.log('actions', action);
  try {
    const city = yield call(fetchApiOfNameCity, action.nameCity);
    const cityRes = city as TCityResponse;
    const nameCity = cityRes.name;
    const data = yield call(
      fetchApiOfWeek,
      cityRes.coord.lat,
      cityRes.coord.lon
    );
    yield put({ type: FIND_CITY_SUCCESS, data, nameCity });
  } catch (error) {
    yield put({ type: FIND_CITY_FAIL });
  }
}

export function* watchGetData() {
  yield takeLatest(GET_DATA, handleGetData);
}

export function* watchFindCity() {
  yield takeLatest(FIND_CITY, handleFindCity);
}
