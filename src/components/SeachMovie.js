import React, { useState } from 'react';
import axios from 'axios';

const SeachMovie = ({ apiKey }) => {
  const [data, setData] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState({
    title: '',
    imgSource: '',
    date: '',
    vote: '',
  });
  const searchMovie = async (data) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&sort_by=popularity&query=${data}&language=en-US`
      );

      const myArr = res.data.results.slice(0, 5);
      setMovies(myArr);
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setData(e.target.value);
    if (e.target.value !== '') {
      searchMovie(e.target.value);
    } else {
      setMovies([]);
    }
  };
  const onClick = (movie) => {
    setSelectMovie({
      title: movie.original_title,
      imgSource: movie.poster_path,
      date: movie.release_date,
      vote: movie.vote_average,
    });
    setMovies([]);
    setData('');
  };
  return (
    <div className='searchMovie'>
      <input
        type='text'
        value={data}
        placeholder='Search movie'
        onChange={onChange}
      />
      <div className='itemList'>
        <ul>
          {movies.map((movie) => (
            <div key={movie.id} className='clickElem'>
              <li onClick={() => onClick(movie)}>{movie.original_title}</li>
            </div>
          ))}
        </ul>
      </div>

      <div className='filmArea'>
        {selectMovie.imgSource && (
          <>
            <div className='photoContainter'>
              <img
                className='cover'
                src={`https://image.tmdb.org/t/p/w500${selectMovie.imgSource}`}
                alt={selectMovie.title}
              />
            </div>
            <div className='desc'>
              <h2>{selectMovie.title}</h2>
              <p>{`release: ${selectMovie.date}`}</p>
              <p>{`rate: ${selectMovie.vote}`}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SeachMovie;
