//kopia mysectios
import React, { useState, useEffect } from 'react';

import image from '../img/image.svg';
import { connect } from 'react-redux';
import { getCities, getCity } from '../actions/handle';
import {  getTopMovies } from '../api';

const MySection = ({ getCities, getCity, cities, city }) => {
  const [data, setData] = useState('');
  useEffect(() => {
    getCities();
    //eslint-disable-next-line
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    getCity(data);
  };
  return (
    <>
      {cities && (
        <div className='content'>
          <div className='text'>
            <h3>Open API show off</h3>
            <p>
              It’s up to you what you display down there and how you style it.
              Use fetch/axios (preffered) or if you’re already tired of this
              task - get the data from a JSON object. Lazy loading is optional
              but highly appreciated. List of APIs you could use:
              https://github.com/public-apis/public-apis
            </p>
          </div>
          <div className='columns'>
            <div className='column'>
              <div className='api'>
                <div className='img'>
                  <ul>
                    {cities.map((city) => (
                      <li key={city.id}>
                        {city.name}: {Math.round(city.main.temp - 273.15)} ℃
                      </li>
                    ))}
                  </ul>
                </div>
                <h6 onClick={getCities}>
                  Teperature in villages near Wladyslawowo
                </h6>
              </div>
              <div className='api'>
                {/* <img src={image} alt='image' /> */}
                <div className='img'>
                  <div className=''>
                    <form action='' onSubmit={onSubmit}>
                      <input
                        type='text'
                        value={data}
                        placeholder='type there your city'
                        onChange={(e) => setData(e.target.value)}
                      />
                      <input type='submit' value='Check' />
                    </form>
                    <p>City: {city && city.name}</p>
                    <p>
                      Tepmerature: {city && Math.round(city.main.temp - 273.15)}
                      ℃
                    </p>
                  </div>

                  <p>Wind: {city && city.wind.speed} km/h</p>
                </div>
                <h6>Check temperature in Your city</h6>
              </div>
              <div className='api'>
                <img src={image} alt='box' />
                <h6>Use images in place of</h6>
                <p>
                  the placeholders above. Or divs with some data. Whatever you
                  like.{' '}
                </p>
              </div>
              <div className='api'>
                <img src={image} alt='box' />
                <h6 onClick={getTopMovies}>Tutaj klik</h6>
                <p>
                  remember to use external data from an API or a JSON object.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  cities: state.handle.cities.list,
  city: state.handle.city,
});
export default connect(mapStateToProps, { getCities, getCity })(MySection);
