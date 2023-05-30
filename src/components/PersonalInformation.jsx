import '../styles/PersonalInformation.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 200,
  once: true,
});

export function PersonalInformation() {
  return (
    <section className="personal-container">
      <h3>Personal Information</h3>
      <ul data-aos="zoom-in">
        <li>
          <h4>Birthday</h4>
          <p>December 7th</p> 
        </li>
        <li>
          <h4>Phone Number</h4>
          <p>261 340-0738</p>
        </li>
        <li>
          <h4>E-Mail</h4>
          <p>torricohernan2@gmail.com</p>
        </li>
        <li>
          <h4>Address</h4>
          <p>Mendoza, Argentina</p>
        </li>
      </ul>
    </section>
  )
}
