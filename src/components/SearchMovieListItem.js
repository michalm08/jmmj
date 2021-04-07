import React from 'react';

const SearchMovieListItem = ({ movie, onClick }) => {
  return (
    <div key={movie.id} className='clickElem'>
      <li onClick={() => onClick(movie)}>{movie.original_title}</li>
    </div>
  );
};

export default SearchMovieListItem;
