import React, { useState } from 'react';
import AOS from 'aos';
import { ProjectsSliderCantera } from './ProjectsSliderCantera';
import '../styles/Projects.css'

//images and video
import home from '../images/cantera/cantera-home.jpg'
import search from '../images/cantera/cantera-search-results.jpg'
import videoPoster from '../images/cantera/cantera-initial-desktop.png'
import video from '../video/video-cantera-music.mp4'

export function ProjectsCantera() {
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
            <h3>Cantera Music <span>React - js - css - Node - aws</span></h3>
            <p>
              A music application that offers users a comprehensive and personalized audio experience. With its ability to play music, podcasts, and audiobooks, as well as add custom audio files, the app becomes a versatile platform to meet users listening needs.
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
        <div className='Projects-content-img'>
          <img src={home} alt='' />
          <img src={search} alt='' />
        </div>
        <a
          href= 'https://cantera-music.vercel.app/'
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
            <ProjectsSliderCantera />
          </div>
        }
      </div>
    </div>
  );
}
