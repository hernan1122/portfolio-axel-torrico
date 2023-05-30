import { PersonalInformation } from "./PersonalInformation"
import { Skills } from "./Skills"
import { MyInteresets } from "./MyInteresets"
import '../styles/About.css'

//icons
import { BsFillPersonFill } from 'react-icons/bs'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 400,
});

export function About() {
  return (
    <div id="about" className="about-container" >
      <div className="about-container-title">
        <h2>
          <BsFillPersonFill className="about-icon"/> About me
        </h2>
      </div>
      <div data-aos="fade-up">
        <p className="about-container-text">
          Hi, I'm Axel, a passionate Frontend Developer with experience in creating attractive and functional web experiences. My focus is on building intuitive and user-friendly interfaces using technologies such as HTML, CSS, JavaScript, and React.js.
        </p>
        <br />
        <p className="about-container-text">
          I am an efficient and flexible collaborator, capable of adapting to changes and working in a team. My goal is to develop high-quality digital solutions that combine an excellent user interface with optimal performance.
        </p>
        <br />
        <p className="about-container-text">
          I am excited to tackle new challenges and exciting projects that allow me to continue growing professionally.
        </p>
      </div>
      <section className="about-container-content">
        <PersonalInformation />
        <Skills />
        <MyInteresets />
      </section>
    </div>
  )
}
