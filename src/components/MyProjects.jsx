import React from 'react';
import { Projects } from './Projects';
import '../styles/MyProjects.css'

//icons
import { AiOutlineGithub } from 'react-icons/ai'
import { GoTools } from 'react-icons/go'

export function MyProjects() {
  return (
    <div className='MyProjects'>
      <h2 className="MyProjects-title">
        <GoTools className='MyProjects-icon'/> My Jobs
      </h2>
      <div className='MyProjects-container-btn'>
        <a
          className='MyProjects-portfolio-repository'
          href='https://github.com/hernan1122/portfolio-axel-torrico'
          target="_blank"
          data-aos="zoom-in"
        >
          <i><AiOutlineGithub /></i> Portfolio repository
        </a>
      </div>
      <Projects />
    </div>
  );
}
