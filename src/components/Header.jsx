import { Menu } from './Menu'
import AOS from 'aos';
import headerImage from '../images/fotoperfil.jpg'
import ScrollDown from './ScrollDown';
import '../styles/Header.css'



export function Header() {
  AOS.init()

  return (
    <header id='home' className='header-container'>
      <Menu />
      <section className='header-container-content'>
        <div className='header-container-content-title' data-aos="zoom-in" /* data-aos="fade-right" */>
          <h5>Hi!</h5>
          <h1> I´m Axel Torrico</h1>
          <h5>Frontend Developer</h5>
        </div>
        <figure className='header-container-content-img' data-aos="zoom-in" /* data-aos="fade-left" */>
          <img src={headerImage} alt="" />
        </figure>
      </section>
      <div className="header-button-scroll">
        <ScrollDown />
      </div>
    </header>
  )
}
