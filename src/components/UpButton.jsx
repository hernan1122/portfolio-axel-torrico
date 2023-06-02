import React, { useState } from 'react';
import '../styles/UpButton.css'

//icon
import { IoIosArrowUp } from 'react-icons/io'

export function UpButton() {
  const [show, setShow] = useState(false)

  const appearButton = () => {
    window.scrollY >= 500 ? setShow(true) : setShow(false)
  }

  window.addEventListener('scroll', appearButton)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <button className={show ? 'UpButton' : 'UpButton-inactive'} onClick={scrollToTop}>
      <IoIosArrowUp className='UpButton-icon' />
    </button>
  );
}
