import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import axios from 'axios';
let load = 0;
let page = 1;
const TopMovies = () => {
  const scrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

  const [topMovies, setTopMovies] = useState([]);

  const getTopMovies = async () => {
    console.log('hi getTopMovies');
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
      myArr = myArr.slice(load * 4, load * 4 + 4);
      //   console.log(myArr[0].original_title);
      setTopMovies([...topMovies, ...myArr]);
    } catch (err) {
      console.log(err);
    }
    load++;
  };

  //   let movies = ['bolo', 'lolo', 'kolo', 'wolo'];
  const onClick = () => {
    getTopMovies();
    console.log(topMovies);
    setTimeout(() => {
      scrollToBottom();
    }, 50);
  };
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Top movies</h1>
      <div className='topMovies'>
        <>
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
        </>
        <a onClick={onClick} className='btn btnLight'>
          Load more...
        </a>
      </div>
    </>
  );
};

export default TopMovies;
