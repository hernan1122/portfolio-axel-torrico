import '../styles/SocialMedia.css'

//icons
import { BsGithub } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

export function SocialMedia() {
  return (
    <section className="socialMedia-container">
      <a
      className="linkedin"
        href="https://www.linkedin.com/in/axel-hern%C3%A1n-torrico-98310a252/"
        target="blank"
      >
        <i>
          <BsLinkedin />
        </i>
      </a>
      <a
      className="whatsapp"
        href="https://api.whatsapp.com/send?phone=+5492613400738&text=Hi Axel, I come from your portfolio"
        target="blank"
      >
        <i>
          <BsWhatsapp />
        </i>
      </a>
      <a
      className="github"
        href="https://github.com/hernan1122"
        target="blank"
      >
        <i>
          <BsGithub />
        </i>
      </a>
    </section>
  )
}
