import React, { useState } from 'react';
import axios from 'axios';
let load = 0;
let page = 1;
const TopMovies = ({ apiKey }) => {
  const scrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

  const [topMovies, setTopMovies] = useState([]);

  const getTopMovies = async () => {
    try {
      if (load % 5 === 0 && load !== 0) {
        page++;
        load = 0;
      }
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${apiKey}`
      );
      let myArr = res.data.results;
      myArr = myArr.slice(load * 4, load * 4 + 4);
      setTopMovies([...topMovies, ...myArr]);
    } catch (err) {
      console.log(err);
    }
    load++;
  };

  const onClick = () => {
    getTopMovies();
    setTimeout(() => {
      scrollToBottom();
    }, 50);
  };
  return (
    <>
      <div className='topMovies'>
        <h1 style={{ textAlign: 'center' }}>Top movies</h1>
        <div className='moviesSection'>
          {topMovies.map((movie) => (
            <div className='filmArea'>
              <div className='photoContainter'>
                <img
                  className='cover'
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.overview}</p>
              </div>
              <div className='desc'>
                <h2>{movie.original_title}</h2>
              </div>
            </div>
          ))}
        </div>
        <button onClick={onClick} className='btn btnLight'>
          Load more...
        </button>
      </div>
    </>
  );
};

export default TopMovies;
