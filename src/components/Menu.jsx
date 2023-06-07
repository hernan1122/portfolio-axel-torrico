import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import cv from '../downloads/cv_axel_torrico.pdf'
import '../styles/Menu.css'

//icons
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { GoTools } from 'react-icons/go'
import { BsFileCodeFill } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { BsFilePersonFill } from 'react-icons/bs'

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  /* let menuRef = useRef()

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)
  }, []) */

  return (
    <nav className='menu-container'>
      <a className='menu-title' href='#home'>Portfolio | <span>Axel Torrico</span></a>
      <div className='menu-links' /* ref={menuRef} */>
        <ul className={`ul ${isOpen ? 'open' : ''}`}>
          <li>
            <a id='aboutMe' href="#about" onClick={handleClick}>
              <BsFillPersonFill className='menu-icon'/> About me
            </a>
          </li>
          <li>
            <a id='myProjects' href="#myprojects" onClick={handleClick}>
              <BsFileCodeFill className='menu-icon' /> My Projects
            </a>
          </li>
          <li>
            <a id='contactMe' href="#contacts" onClick={handleClick}>
              <AiFillPhone className='menu-icon' /> Contact me
            </a>
          </li>
          <li>
            <a id='cv' className="cv" download='CV Axel Torrico' href={cv} onClick={handleClick}>
              <BsFilePersonFill className='menu-icon' /> C. Vitae
            </a>
          </li>
        </ul>
      </div>
      <div
        onClick={handleClick}
        className={`icon nav-icon-5 ${isOpen && 'open'}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}


// return (
//     <nav className='menu-container'>
//       <a className='menu-title' href='#home'>Portfolio | <span>Axel Torrico</span></a>
//       <div className='menu-links' ref={menuRef}>
//         <ul className={`ul ${isOpen ? 'open' : ''}`}>
//           <li>
//             <Link to={'/'} onClick={handleClick}>
//               <AiFillHome className='menu-icon'/> Home
//             </Link>
//           </li>
//           <li>
//             <a id='aboutMe' href="#about" onClick={handleClick}>
//               <BsFillPersonFill className='menu-icon'/> About me
//             </a>
//           </li>
//           <li>
//             <Link to={'/jobs'} onClick={handleClick}>
//               <GoTools className='menu-icon' /> My Jobs
//             </Link>
//           </li>
//           <li>
//             <a id='myProjects' href="#myprojects" onClick={handleClick}>
//               <BsFileCodeFill className='menu-icon' /> My Projects
//             </a>
//           </li>
//           <li>
//             <a id='contactMe' href="#contacts" onClick={handleClick}>
//               <AiFillPhone className='menu-icon' /> Contact me
//             </a>
//           </li>
//           <li>
//             <a id='cv' className="cv" download='CV Axel Torrico' href={cv} onClick={handleClick}>
//               <BsFilePersonFill className='menu-icon' /> C. Vitae
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div
//         onClick={handleClick}
//         className={`icon nav-icon-5 ${isOpen && 'open'}`}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   )