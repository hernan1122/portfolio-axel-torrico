import React from 'react';
import '../styles/Preloader.css'

//icons
import { BsFileCodeFill } from 'react-icons/bs'

export function Preloader() {
  return (
    <div className='Preloader'>
      <BsFileCodeFill className='Preloader-icon' />
      <h1 className='Preloader-title'>WELCOME</h1>
    </div>
  );
}
