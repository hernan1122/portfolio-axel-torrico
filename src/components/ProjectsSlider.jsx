import React from 'react';
import '../styles/ProjectsSlider.css'

//images
import home from '../images/cantera-music-home.jpg'
import search from '../images/cantera-music-search.png'
import song from '../images/cantera-music-song.png'
import podcast from '../images/cantera-music-podcast.png'
import audiobooks from '../images/cantera-music-audiobooks.png'
import add from '../images/cantera-music-add.png'
import player from '../images/cantera-music-player.png'

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css";

export function ProjectsSlider() {
  return (
    <div className='ProjectsSlider'>
      <Swiper
        className='ProjectsSlider-container'
        modules={[Pagination]}
        spaceBetween={15}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {/* <SwiperSlide>
          <img src={home} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={search} alt="" />
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
          <img src={player} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
