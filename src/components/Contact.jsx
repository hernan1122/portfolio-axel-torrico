import { SocialMedia } from "./SocialMedia"
import { Form } from "./Form"
import '../styles/Contact.css'

//icons
import { AiFillPhone } from 'react-icons/ai'

export function Contact() {
  return (
    <footer id="contacts" className="footer-container">
      <div className="footer-container-title">
        <h2>
          <AiFillPhone className="contact-icon"/> Contact me
        </h2>
      </div>
      <div className="footer-container-content">
        <p className="footer-container-text">Write your message here or talk to me on my social media.</p>
        <Form />
      </div>
      <SocialMedia />
    </footer>
  )
}
