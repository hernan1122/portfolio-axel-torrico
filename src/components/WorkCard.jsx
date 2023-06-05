import React from 'react';
import '../styles/WorkCard.css'

//icons
import { AiOutlineGithub } from 'react-icons/ai'
import { RiEyeLine } from 'react-icons/ri'

export function WorkCard({ image, title, info, description, urlGit, urlApp }) {
  return (
    <div className='WorkCard'>
      <article id="jobs" className="WorkCard-container">
        <img className="WorkCard-image" src={image} alt={image} />
        <div className="WorkCard-description">
          <div className="WorkCard-description-content">
            <div className="WorkCard-description-title">
              <h3>{title}</h3>
              <p>{info}</p>
            </div>
            <div className="WorkCard-content-icon">
              <a 
              className="WorkCard-icon" 
              href={urlGit} target="_blank"
              >
                <i>
                  <AiOutlineGithub />
                </i>
              </a>
              <a 
              className="WorkCard-icon" 
              href={urlApp} target="_blank"
              >
                <i>
                  <RiEyeLine />
                </i>
              </a>
            </div>
          </div>
          <p className="WorkCard-description-content-text">{description}</p>
        </div>
      </article>
    </div>
  );
}
