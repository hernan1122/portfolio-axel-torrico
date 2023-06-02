import React from 'react';
import '../styles/UpButton.css'

//icon
import { IoIosArrowUp } from 'react-icons/io'

export function UpButton() {
  return (
    <button className='UpButton'>
      <IoIosArrowUp className='UpButton-icon' />
    </button>
  );
}
