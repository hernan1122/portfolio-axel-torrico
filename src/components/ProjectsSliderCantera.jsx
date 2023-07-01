import React from 'react';
import '../styles/ProjectsSlider.css'

//images
import home from '../images/cantera/cantera-home.jpg'
import homeLoading from '../images/cantera/cantera-home-loading.jpg'
import search from '../images/cantera/cantera-search-results.jpg'
import searchLoading from '../images/cantera/cantera-search-loading.jpg'
import categories from '../images/cantera/cantera-categories.jpg'
import song from '../images/cantera/cantera-music.jpg'
import podcast from '../images/cantera/cantera-podcast.jpg'
import audiobooks from '../images/cantera/cantera-audiobooks.jpg'
import add from '../images/cantera/cantera-form.jpg'
import addLoading from '../images/cantera/cantera-form-loading.jpg'
import addAlert from '../images/cantera/cantera-form-alert.jpg'
import player from '../images/cantera/cantera-player.jpg'

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css";

export function ProjectsSliderCantera() {
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
          <img src={homeLoading} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={search} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={searchLoading} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={categories} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={song} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={podcast} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={audiobooks} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={add} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={addLoading} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={addAlert} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={player} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
