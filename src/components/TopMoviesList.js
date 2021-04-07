import React from 'react';
import TopMoviesListItem from './TopMoviesListItem';

const TopMoviesList = ({ topMovies }) => {
  return (
    <div className='moviesSection'>
      {topMovies.map((movie) => (
        <TopMoviesListItem movie={movie} />
      ))}
    </div>
  );
};

export default TopMoviesList;
