import React from 'react';
import '../styles/ProjectsSlider.css'

//images
import home from '../images/moch/moch-home.jfif'
import homeOne from '../images/moch/moch-home-1.jfif'
import homeTwo from '../images/moch/moch-home-2.jfif'
import homeThree from '../images/moch/moch-home-3.jfif'
import trending from '../images/moch/moch-trending.jfif'
import search from '../images/moch/moch-search.jfif'
import searchOne from '../images/moch/moch-search-2.jfif'
import detailsMovie from '../images/moch/moch-details-movie.jfif'
import detailsSerie from '../images/moch/moch-details-serie.jfif'
import detailsPerson from '../images/moch/moch-details-person.jfif'

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css";

export function ProjectsSliderMoch() {
  return (
    <div className='ProjectsSlider'>
      <Swiper
        className='ProjectsSlider-container'
        modules={[Pagination]}
        spaceBetween={15}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={home} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={homeOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={homeTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={homeThree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trending} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={search} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={searchOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detailsMovie} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detailsSerie} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detailsPerson} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
