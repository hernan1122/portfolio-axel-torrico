import '../styles/MyJobs.css'

//icons
import { AiOutlineGithub } from 'react-icons/ai'
import { RiEyeLine } from 'react-icons/ri'

/* import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 100,
  once: true,
}); */

export function MyJobs({ image, title, info, description, urlGit, urlApp }) {
  return (
    <div /* data-aos="zoom-in" */>
      <article id="jobs" className="jb-container">
        <img className="jb-container-image" src={image} alt={image} />
        <div className="jb-container-description">
          <div className="jb-container-description-content">
            <div className="jb-container-description-content-title">
              <h3>{title}</h3>
              <p>{info}</p>
            </div>
            <div className="jb-container-description-content-icon">
              <a 
              className="jb-container-description-icon" 
              href={urlGit} target="_blank"
              >
                <i>
                  <AiOutlineGithub />
                </i>
              </a>
              <a 
              className="jb-container-description-icon" 
              href={urlApp} target="_blank"
              >
                <i>
                  <RiEyeLine />
                </i>
              </a>
            </div>
          </div>
          <p className="jb-container-description-content-text">{description}</p>
        </div>
      </article>
    </div>
  )
}



/* export function MyJobs({ image, title, info, urlGit, urlApp, seeMore }) {
  return (
    <div data-aos="zoom-in">
      <article id="jobs" className="jb-container">
        <img className="jb-container-image" src={image} alt={image} />
        <div className="jb-container-link">
          <div className="jb-container-link-content">
            <div className="jb-container-link-content-title">
              <h3>{ title }</h3>
              <p>{ info }</p>
            </div>
          </div>
          <div className="jb-container-link-content-icon">
              <a 
              className="jb-container-icon" 
              href={urlGit} target="_blank"
              >
                <i>
                  <AiOutlineGithub />
                </i>
              </a>
              <a 
              className="jb-container-icon" 
              href={urlApp} target="_blank"
              >
                <i>
                  <RiEyeLine />
                </i>
              </a>
            <button
              className='bnt-see-more'
              onClick={seeMore}
            >
                See more
              </button>
            </div>
        </div>
      </article>
    </div>
  )
} */