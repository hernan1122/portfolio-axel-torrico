import '../styles/SkillsMyInteresets.css'

//icons
import { MdDirectionsBike } from 'react-icons/md'
import { FaPlane } from 'react-icons/fa'
import { MdLibraryMusic } from 'react-icons/md'
import { FaDog } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import { MdPhotoCamera } from 'react-icons/md'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 200,
  once: true,
});

export function MyInteresets() {
  return (
    <section className="skills-interesets">
      <h3>My Interesets</h3>
      <div className="skills-interests-container" data-aos="zoom-in">
        <section className="skills-interests-container-content">
          <div className="interests circle">
            <i>
              <MdDirectionsBike />
            </i>
            <h4>Bike</h4>
          </div>
          <div className="interests circle"> 
            <i>
              <MdLibraryMusic />
            </i>
            <h4>Music</h4>
          </div>
          <div className="interests circle">
            <i>
              <FaPlane />
            </i>
            <h4>Travel</h4>
          </div>
        </section>
        <section className="skills-interests-container-content">
          <div className="interests circle">
            <i>
              <FaDog />
            </i>
            <h4>Animals</h4>
          </div>
          <div className="interests circle">
            <i>
              <FaBook />
            </i>
            <h4>Books</h4>
          </div>
          <div className="interests circle">
            <i>
              <MdPhotoCamera />
            </i>
            <h4>Photos</h4>
          </div>
        </section>
      </div>
    </section>
  )
}
