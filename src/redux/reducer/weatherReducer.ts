import {
  GET_DATA_SUCCESS,
  FIND_CITY_FAIL,
  FIND_CITY_SUCCESS,
} from '../../redux/actions/actions';

export interface CouterState {
  data: any;
  nameCity: string;
  error: string;
}

const initialState: CouterState = {
  data: [],
  nameCity: 'Ha Noi',
  error: '',
};

export interface TAction {
  type?: string;
  nameCity?: string;
  data?: any;
}

// export type TAction = {
//   type: string,
//   data: any
// };

const weatherReducer = (state: typeof initialState, action: TAction) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return { ...state, data: action.data };
    case FIND_CITY_SUCCESS:
      return {
        ...state,
        data: action.data,
        nameCity: action.nameCity,
        error: '',
      };
    case FIND_CITY_FAIL:
      return { ...state, error: 'Not found city (404)' };

    default:
      return state;
  }
};

export default weatherReducer;
