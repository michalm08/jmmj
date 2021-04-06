import React, { useState } from 'react';
import axios from 'axios';
// import { searchMovie } from '../api';
const SeachMovie = () => {
  const [data, setData] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState({
    title: 'nazwa',
    imgSource: '123',
    date: '12-12-1212',
    vote: 5,
  });

  const searchMovie = async (data) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=c518001f713c0c7f139c3a44b0cba9a0&sort_by=popularity&query=${data}&language=en-US`
      );

      const myArr = res.data.results.slice(0, 5);
      console.log(myArr);
      setMovies(myArr);
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setData(e.target.value);
    // if (data.length>3) {
    if (e.target.value != '') {
      searchMovie(e.target.value);
    }
  };
  return (
    <>
      <input
        type='text'
        value={data}
        placeholder='Search movie'
        onChange={onChange}
      />
      {/* <input type='submit' value='Search' /> */}
      <ul>
        {movies.map((movie) => (
          <li
            key={movie.id}
            onClick={() =>
              setSelectMovie({
                title: movie.original_title,
                // imgSource: movie.poster_path,
                // date: movie.release_date,
                // vote: movie.vote_average,
              })
            }
          >
            {movie.original_title}
          </li>
        ))}
      </ul>

      <div className='box'>
        <img
          src={`https://image.tmdb.org/t/p/w500/yHx8OLSKc3VtIBB5lIe90c0fHOX.jpg`}
          alt='imgg'
        />
        <h1>Name</h1>
      </div>
    </>
  );
};

export default SeachMovie;
