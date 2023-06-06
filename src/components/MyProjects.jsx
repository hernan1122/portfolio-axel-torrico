import React from 'react';
import { Link } from 'react-router-dom';
import { Projects } from './Projects';
import '../styles/MyProjects.css'

//icons
import { AiOutlineGithub } from 'react-icons/ai'
import { BsFileCodeFill } from 'react-icons/bs'
import { GoTools } from 'react-icons/go'

export function MyProjects() {
  return (
    <div id="myprojects" className='MyProjects'>
      <h2 className="MyProjects-title">
        <BsFileCodeFill className='MyProjects-icon'/> My Projects
      </h2>
      <div className='MyProjects-container-projects'>
        <Projects />
      </div>
      <div className='MyProjects-container-button'>
        <div className='MyProjects-container-btn'>
          <a
            className='MyProjects-portfolio-repository'
            href='https://github.com/hernan1122/portfolio-axel-torrico'
            target="_blank"
            data-aos="zoom-in"
          >
            <i><AiOutlineGithub /></i> Portfolio Repository
          </a>
        </div>
        <div className='MyProjects-container-btn'>
          <Link
            to={'/jobs'}
            className='MyProjects-portfolio-repository'
            data-aos="zoom-in"
          >
            <i><GoTools /></i> More Jobs
          </Link>
        </div>
      </div>
    </div>
  );
}
