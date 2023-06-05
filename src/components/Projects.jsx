import React from 'react';
import '../styles/Projects.css'

//images and video
import home from '../images/cantera-music-home.jpg'
import search from '../images/cantera-music-search.png'
import video from '../video/video-cantera-music.mp4'

export function Projects() {
  return (
    <div className='Projects'>
      <div className='Projects-container'>
        <h3>Cantera Music <span>Explora, disfruta y comparte</span></h3>
        <p>
          Una aplicación de música que ofrece a los usuarios una experiencia de audio integral y personalizada. Con su capacidad para reproducir música, podcasts y audiolibros, así como para agregar archivos de audio personalizados, la aplicación se convierte en una plataforma versátil para satisfacer las necesidades de escucha de los usuarios.
        </p>
        <p>
          Como miembro del equipo de frontend, fui responsable de la implementación de la interfaz de usuario utilizando React, la integración con API, la estilización de los componentes y la implementación de la lógica de interacción.
        </p>
        <video className='Projects-video' src={video} controls />
      </div>
      <div className='Projects-container-img'>
        <img src={home} alt={home} />
        <img src={search} alt={search} />
      </div>
    </div>
  );
}
