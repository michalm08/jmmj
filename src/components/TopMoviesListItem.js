import React from 'react';

const TopMoviesListItem = ({ movie }) => {
  return (
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
  );
};

export default TopMoviesListItem;
