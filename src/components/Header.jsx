import { Menu } from './Menu'
import headerImage from '../images/fotoperfil.jpg'
import '../styles/Header.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 2500,
  delay: 600,
  once: true,
});

export function Header() {
  return (
    <header id='home' className='header-container'>
      <Menu />
      <section className='header-container-content'>
        <div className='header-container-content-title' data-aos="fade-right">
          <h5>Hi!</h5>
          <h1> I´m Axel Torrico</h1>
          <h5>Frontend Developer</h5>
        </div>
        <figure className='header-container-content-img' data-aos="fade-left">
          <img src={headerImage} alt="" />
        </figure>
      </section>
    </header>
  )
}
