import axios from 'axios';
import { GET_CITIES, GET_CITY } from './types';
const apiKey = '3fd029c881261271be8ef93145d66839';
let load = 0;
let page = 1;
export const getTopMovies = () => async (dispatch) => {
  console.log('hi there');

  try {
    // c518001f713c0c7f139c3a44b0cba9a0
    if (load % 5 === 0 && load !== 0) {
      page++;
      load = 0;
    }
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=c518001f713c0c7f139c3a44b0cba9a0`
    );
    let myArr = res.data.results;
    myArr = myArr.slice(load * 4, load * 4 + 3);
    console.log(myArr);

  } catch (err) {
    console.log(err);
  }
  load++;
};

export const getCities = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/find?lat=54.79&lon=18.40&cnt=10&appid=${apiKey}`
    );
    dispatch({
      type: GET_CITIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCity = (city) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    dispatch({
      type: GET_CITY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
