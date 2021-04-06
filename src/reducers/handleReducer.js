import { GET_CITIES, GET_CITY, LOAD_MOVIES } from '../actions/types';

const initialState = { cities: { list: [] } };

function handleReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES:
      return { ...state, cities: action.payload };
    case GET_CITY:
      return { ...state, city: action.payload };
    case LOAD_MOVIES:
      return { ...state, movies: action.payload };


    default:
      return state;
  }
}
export default handleReducer;
