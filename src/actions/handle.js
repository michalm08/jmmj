import axios from "axios";
import { GET_CITIES, GET_CITY } from "./types";
const apiKey = "3fd029c881261271be8ef93145d66839";

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
