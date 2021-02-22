import { useContext, useEffect, useState } from 'react'
import styles from '../../styles/Header.module.css'

import WindowContext from '../context/WindowContext'

export default function Header() {
  const [fixed, setFixed] = useState(false)
  const [open, setOpen] = useState(true)
  const { scrollY } = useContext(WindowContext);

  const goToSection = (e, section) => {
    e.preventDefault()
    if(!document.querySelector(section)) return
    scrollTo(0, document.querySelector(section).offsetTop - 16*0)
  }

  useEffect(() => {
    if(scrollY > window.innerHeight - 16*6) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }, [scrollY])
  
  return (
    <>
    <div className={`${styles.wrapper}`}>
      <nav>
      <ul>
        <li>
          <a href={"#hero"} onClick={(e) => goToSection(e, '#hero')}>
            {/* <img src="/svgs/logo.svg" alt="mitri-dvp-logo"/> */}
            <p>mitri.dvp</p>
          </a>
        </li>
        <li><a href={"#projects"} onClick={(e) => goToSection(e, '#projects')}>Projects</a></li>
        <li><a href={"#services"} onClick={(e) => goToSection(e, '#services')}>Services</a></li>
        <li><a href={"#tools"} onClick={(e) => goToSection(e, '#tools')}>tools</a></li>
        {/* <a>Games</a> */}
        {/* <a>About</a> */}
        <li><a>Let's Talk</a></li>
      </ul>
      </nav>
    </div>
    <div className={`${styles.side_nav} ${fixed && styles.side_nav_fixed} ${open && styles.side_nav_open}`}>
    <nav>
      <ul>
        <button onClick={(e) => setOpen(!open)}><img src="/icon.svg" alt="mitri-dvp-logo"/></button>
        <li><a href={"#hero"} onClick={(e) => goToSection(e, '#hero')}>Home</a></li>
        <li><a href={"#projects"} onClick={(e) => goToSection(e, '#projects')}>Projects</a></li>
        <li><a href={"#services"} onClick={(e) => goToSection(e, '#services')}>Services</a></li>
        <li><a href={"#tools"} onClick={(e) => goToSection(e, '#tools')}>Tools</a></li>
        {/* <a>Games</a>
        <a>About</a> */}
        <li><a>Let's Talk</a></li>
      </ul>
      </nav>
    </div>
    </>

  )
}
