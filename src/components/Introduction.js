import React from 'react';
import unsplash from '../img/unsplash.png';

const Introduction = () => {
  return (
    <div className='introSection'>
      <img src={unsplash} alt='bg' />
      <div className='box'>
        <h2>Hello fellow developer!</h2>
        <p>
          Do as much as you can in a decent amount of time. Do not push it, 1-4
          hours are totally okay. Just show us your skills.
          Sass/styled-components, BEM and React are preferred. But use anything
          you know, like or want. And most importantly - have fun!
        </p>
        <div className='buttons'>
          <a className='btn btnDark' href='/#'>
            Button with a label
          </a>
          <a className='btn btnLight' href='/#'>
            This button looks empty
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
