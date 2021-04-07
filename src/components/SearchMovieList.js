import React from 'react';
import SearchMovieListItem from './SearchMovieListItem';

const SearchMovieList = ({ movies, onClick }) => {
  return (
    <div className='itemList'>
      <ul>
        {movies.map((movie) => (
          <SearchMovieListItem movie={movie} onClick={onClick} />
        ))}
      </ul>
    </div>
  );
};

export default SearchMovieList;
