import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { SwiperSlide, Swiper } from 'swiper/react';

import Button from '../button/Button';

import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './movie-list.scss';


const MovieList = props => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== 'similar') {
        switch(props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, {params});
            break;
          default:
            response = await tmdbApi.getTvList(props.type, {params});
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.results);
    }
    getList();
  }, [])

  return (
    <div className='Movie-list'>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
      >
        {
          items.map((item, i) => (
            <SwiperSlide key={i}>
              <img src={apiConfig.w500Image(item.poster_path)} alt="" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default MovieList
