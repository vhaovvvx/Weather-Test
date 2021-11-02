import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export type rootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
