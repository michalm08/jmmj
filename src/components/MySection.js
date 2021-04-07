import React from 'react';
import SeachMovie from './SeachMovie';
import TopMovies from './TopMovies';
const MySection = () => {
  let apiKey = process.env.REACT_APP_KEY || 'c518001f713c0c7f139c3a44b0cba9a0';
  return (
    <>
      <SeachMovie apiKey={apiKey} />
      <TopMovies apiKey={apiKey} />
    </>
  );
};

export default MySection;
