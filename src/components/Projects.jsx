import React, { useState } from 'react';
import AOS from 'aos';
import { ProjectsSlider } from './ProjectsSlider';
import '../styles/Projects.css'

//images and video
import home from '../images/cantera-music-home.jpg'
import search from '../images/cantera-music-search.png'
import videoPoster from '../images/cantera-music-initial.png'
import video from '../video/video-cantera-music.mp4'


export function Projects() {
  AOS.init()
  const [seeImagen, setSeeImagen] = useState(false)

  const handleClick = () => {
    setSeeImagen(!seeImagen)
  }

  return (
    <div className='Projects' data-aos="zoom-in">
      <div className='Projects-container'>
        <div>
          <h3>Cantera Music <span>Explore, enjoy and share</span></h3>
          <p>
            A music application that offers users a comprehensive and personalized audio experience. With its ability to play music, podcasts, and audiobooks, as well as add custom audio files, the app becomes a versatile platform to meet users' listening needs.
          </p>
          <p>
            As a member of the frontend team, I was responsible for UI implementation using React, API integration, component styling, and interaction logic implementation.
          </p>
        </div>
        <video
          className='Projects-video'
          poster={videoPoster}
          controls
        >
          <source src={video} type="video/mp4" />
          Tu navegador no admite el elemento de video.
        </video>
      </div>
      <div className='Projects-container-img'>
        <img src={home} alt={home} />
        <img src={search} alt={search} />
      </div>
      <button className='Projects-container-btn' onClick={handleClick}>
        {seeImagen ? 'Back' : 'See images'}
      </button>
      {seeImagen &&
        <div className='Projects-container-slider' >
          <ProjectsSlider />
        </div>
      }
    </div>
  );
}
