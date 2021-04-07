import axios from 'axios';

let load = 0;
let page = 1;
const key = 'c518001f713c0c7f139c3a44b0cba9a0';
// const key = '';
export const getTopMovies = async () => {
  console.log('hi getTopMovies');
  try {
    // c518001f713c0c7f139c3a44b0cba9a0
    if (load % 5 === 0 && load !== 0) {
      page++;
      load = 0;
    }
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${key}`
    );
    let myArr = res.data.results;
    myArr = myArr.slice(load * 4, load * 4 + 4);
    console.log(load);
    console.log(myArr);
  } catch (err) {
    console.log(err);
  }
  load++;
};

export const searchMovie = async (data) => {
  console.log(data);
  let res = [];
  try {
    res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&sort_by=popularity&query=batman&language=en-US`
    );
    console.log(res.data.results);
  } catch (err) {
    console.log(err);
  }
};
