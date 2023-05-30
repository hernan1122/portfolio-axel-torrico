import '../styles/SkillsMyInteresets.css'

//icons
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiNodedotjs } from 'react-icons/si'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 200,
  once: true,
});

export function Skills() {
  return (
    <section className="skills-interesets">
      <h3>Skills</h3>
      <div className="skills-interests-container" data-aos="zoom-in">
        <section className="skills-interests-container-content">
          <div className="html circle">
            <i>
              <AiFillHtml5 />
            </i>
            <h4>HTML 5</h4>
          </div>
          <div className="css circle">
            <i>
              <FaCss3Alt />
            </i>
            <h4>CSS 3</h4>
          </div>
          <div className="git circle">
            <i>
              <BsGithub />
            </i>
            <h4>Git Hub</h4>
          </div>
        </section>
        <section className="skills-interests-container-content">
          <div className="js circle">
            <i>
              <SiJavascript />
            </i>
            <h4>JavaScript</h4>
          </div>
          <div className="react circle">
            <i>
              <FaReact />
            </i>
            <h4>React</h4>
          </div>
          <div className="node circle">
            <i>
              <SiNodedotjs />
            </i>
            <h4>Node</h4>
          </div>
        </section>
      </div>
    </section>
  )
}
