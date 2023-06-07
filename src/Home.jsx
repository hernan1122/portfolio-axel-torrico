import { useState } from 'react'
import AOS from 'aos';
import { Header } from "./components/Header"
import { About } from "./components/About"
import { MyProjects } from './components/MyProjects'
import { Contact } from "./components/Contact"
import { UpButton } from "./components/UpButton"
import './styles/App.css'

//icons
import { MdOutlineWbSunny } from 'react-icons/md'
import { BiMoon } from 'react-icons/bi'

export function Home() {
  AOS.init()
  const [theme, setTheme] = useState('theme' ? 'dark' : 'light')
  const [iconTheme, setIconTheme] = useState(true)

  const changeIconTheme = () => {
    setIconTheme(!iconTheme)
  }

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    changeIconTheme()
  }

  return (
    <div data-theme={theme}>
      <div
        id='theme'
        className='theme-toggle'
        onClick={switchTheme}
      >
        {iconTheme ? <BiMoon className='icon-theme' /> : <MdOutlineWbSunny className='icon-theme' />}
      </div>
      <Header />
      <About />
      <MyProjects />
      <Contact />
      <UpButton />
    </div>
  )
}
