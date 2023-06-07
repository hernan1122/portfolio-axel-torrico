import React from 'react';
import AOS from 'aos';
import '../styles/JobCard.css'

//icons
import { AiOutlineGithub } from 'react-icons/ai'
import { RiEyeLine } from 'react-icons/ri'

export function JobCard({ image, title, info, description, urlGit, urlApp }) {
  AOS.init()

  return (
    <div className='JobCard' data-aos="zoom-in">
      <article id="jobs" className="JobCard-container">
        <img className="JobCard-image" src={image} alt={image} />
        <div className="JobCard-description">
          <div className="JobCard-description-content">
            <div className="JobCard-description-title">
              <h3>{title}</h3>
              <p>{info}</p>
            </div>
            <div className="JobCard-content-icon">
              <a 
              className="JobCard-icon" 
              href={urlGit} target="_blank"
              >
                <i>
                  <AiOutlineGithub />
                </i>
              </a>
              <a 
              className="JobCard-icon" 
              href={urlApp} target="_blank"
              >
                <i>
                  <RiEyeLine />
                </i>
              </a>
            </div>
          </div>
          <p className="JobCard-description-content-text">{description}</p>
        </div>
      </article>
    </div>
  );
}
