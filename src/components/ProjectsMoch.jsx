import React, { useState } from 'react';
import AOS from 'aos';
import { ProjectsSliderMoch } from './ProjectsSliderMoch';
import '../styles/Projects.css'

//images and video
import home from '../images/moch/moch-home.jfif'
import search from '../images/moch/moch-search.jfif'
import videoPoster from '../images/moch/moch-initial.png'
import video from '../video/video-cantera-music.mp4'

export function ProjectsMoch() {
  AOS.init()
  const [seeImagen, setSeeImagen] = useState(false)

  const handleClick = () => {
    setSeeImagen(!seeImagen)
  }

  return (
    <div className='Projects'>
      <div className='Projects-container' data-aos="zoom-in">
        <div className='Projects-content'>
          <div>
            <h3>Moch<span>React - js - css - TMDB API</span></h3>
            <p>
              The essential app for movie buffs and series buffs. Discover trends in movies and shows, get personalized suggestions, explore profiles of popular actors, and read user ratings and reviews. Stay up to date with news and updates from the world of cinema. The ultimate cinematic experience in your hand.
            </p>
            <p>
              I built this app using React and the TMDB API. I used the power of React and the data from TMDB to provide users with a complete platform for real-time entertainment.
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
        <div className='Projects-content-img'>
          <img src={home} alt='' />
          <img src={search} alt='' />
        </div>
        <a
          href= 'https://moch.vercel.app/'
          target= "_blank"
          className='Projects-content-btn-see'
        >
          See App
        </a>
        <button className='Projects-content-btn' onClick={handleClick}>
          {seeImagen ? 'Back' : 'See images'}
        </button>
        {seeImagen &&
          <div className='Projects-content-slider' >
            <ProjectsSliderMoch />
          </div>
        }
      </div>
    </div>
  );
}
