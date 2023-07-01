/* import React, { useState } from 'react';
import AOS from 'aos';
import project from '../json/projects'
import { ProjectsSliderCantera } from './ProjectsSliderCantera';
import { ProjectsSliderMoch } from './ProjectsSliderMoch';
import '../styles/Projects.css'

export function Projects() {
  AOS.init()
  const [seeImagen, setSeeImagen] = useState(false)
  const [selectedSlider, setSelectedSlider] = useState(null);

  const handleClick = () => {
    setSeeImagen(!seeImagen)
    setSelectedSlider(slider)
  }

  return (
    <div className='Projects'>
      {
        project.map((project) => {
          return (
            <div className='Projects-container' data-aos="zoom-in">
              <div key={project.title} className='Projects-content'>
                <div>
                  <h3>{project.title} <span>{project.skills}</span></h3>
                  <p>{project.description_one}</p>
                  <p>{project.description_two}</p>
                </div>
                <video
                  className='Projects-video'
                  poster={project.videoPoster}
                  controls
                >
                  <source src={project.video} type="video/mp4" />
                  Tu navegador no admite el elemento de video.
                </video>
              </div>
              <div className='Projects-content-img'>
                <img src={project.imageOne} alt={project.title} />
                <img src={project.imageTwo} alt={project.title} />
              </div>
              <a
                href={project.urlApp}
                target="_blank"
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
          )
        })
      }
    </div>
  );
}
 */





/* import React, { useState } from 'react';
import AOS from 'aos';
import project from '../json/projects'
import { ProjectsSliderCantera } from './ProjectsSliderCantera';
import { ProjectsSliderMoch } from './ProjectsSliderMoch';
import '../styles/Projects.css';

export function Projects() {
  AOS.init();
  const [seeImagen, setSeeImagen] = useState(false);
  const [selectedSlider, setSelectedSlider] = useState('Cantera');

  const handleClick = () => {
    setSeeImagen(!seeImagen);
    setSelectedSlider('Moch');
  }

  return (
    <div className='Projects'>
      {project.map((project) => {
        return (
          <div className='Projects-container' data-aos="zoom-in" key={project.title}>
            <div className='Projects-content'>
              <div>
                <h3>
                  {project.title} <span>{project.skills}</span>
                </h3>
                <p>{project.description_one}</p>
                <p>{project.description_two}</p>
              </div>
              <video className='Projects-video' poster={project.videoPoster} controls>
                <source src={project.video} type="video/mp4" />
                Tu navegador no admite el elemento de video.
              </video>
            </div>
            <div className='Projects-content-img'>
              <img src={project.imageOne} alt={project.title} />
              <img src={project.imageTwo} alt={project.title} />
            </div>
            <a href={project.urlApp} target="_blank" className='Projects-content-btn-see'>
              See App
            </a>
            <button className='Projects-content-btn' onClick={() => handleClick(project.slider)}>
              {seeImagen ? 'Back' : 'See images'}
            </button>
            {seeImagen && selectedSlider === 'Cantera' && (
              <div className='Projects-content-slider'>
                <ProjectsSliderCantera />
              </div>
            )}
            {seeImagen && selectedSlider === 'Moch' && (
              <div className='Projects-content-slider'>
                <ProjectsSliderMoch />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
 */