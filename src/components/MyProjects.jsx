import React, { useState } from 'react';
import AOS from 'aos';
import { Projects } from './Projects';
import { MyJobs } from './MyJobs';
import '../styles/MyProjects.css'

//icons
import { AiOutlineGithub } from 'react-icons/ai'
import { BsFileCodeFill } from 'react-icons/bs'
import { GoTools } from 'react-icons/go'

export function MyProjects() {
  AOS.init()
  const [seeJobs, setSeeJobs] = useState(false)

  const handleClick = () => {
    setSeeJobs(!seeJobs)
  }

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
            className='MyProjects-repository-jobs'
            href='https://github.com/hernan1122/portfolio-axel-torrico'
            target="_blank"
            data-aos="zoom-in"
          >
            <i><AiOutlineGithub /></i> Portfolio repository
          </a>
        </div>
        <div className='MyProjects-container-btn'>
          <button
            className='MyProjects-repository-jobs'
            onClick={handleClick}
            data-aos="zoom-in"
          >
            <i><GoTools /></i>
            {seeJobs ? 'See less' : 'See more'}
          </button>
        </div>
      </div>
      {seeJobs ? <MyJobs /> : null}
    </div>
  );
}
