import { useState } from 'react'
import styles from '../styles/Header.module.css'

import { useScrollPosition } from '../hooks/useScrollPosition.tsx'
import LetsTalk from './LetsTalk';

export default function Header() {
  const [fixed, setFixed] = useState(false)
  const [open, setOpen] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const openModal = async (open) => {
    if(open) {
      document.body.classList.add('modal-open')
      setShowModal(true)
    } else {
      document.body.classList.remove('modal-open')
      setShowModal(false)
    }
  }

  useScrollPosition(({ currPos }) => {
    if((currPos.y*-1) > window.innerHeight - 16*6) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  })

  const goToSection = (e, section) => {
    e.preventDefault()
    if(!document.querySelector(section)) return
    scrollTo(0, document.querySelector(section).offsetTop - 16*0)
  }
  
  return (
    <>
    <LetsTalk props={{showModal, openModal}}/>
    <div className={`${styles.main_nav}`}>
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
        <li><a href={"#tools"} onClick={(e) => goToSection(e, '#tools')}>Tools</a></li>
        <li><a href={"#games"} onClick={(e) => goToSection(e, '#games')}>Games</a></li>
        {/* <a>Games</a> */}
        {/* <a>About</a> */}
        <li><a onClick={() => openModal(true)}>Let's Talk</a></li>
      </ul>
      </nav>
    </div>
    <div className={`${styles.side_nav} ${fixed && styles.side_nav_fixed} ${open && styles.side_nav_open}`}>
    <nav>
      <ul>
        <button onClick={(e) => setOpen(!open)}><img src="/icon.svg" alt="mitri-dvp-logo"/></button>
        <li><a href={"#hero"} onClick={(e) => goToSection(e, '#hero')}>Top</a></li>
        <li><a href={"#projects"} onClick={(e) => goToSection(e, '#projects')}>Projects</a></li>
        <li><a href={"#services"} onClick={(e) => goToSection(e, '#services')}>Services</a></li>
        <li><a href={"#tools"} onClick={(e) => goToSection(e, '#tools')}>Tools</a></li>
        <li><a href={"#games"} onClick={(e) => goToSection(e, '#games')}>Games</a></li>
        {/* <a>Games</a>
        <a>About</a> */}
        <li><a onClick={() => openModal(true)}>Let's Talk</a></li>
      </ul>
      </nav>
    </div>
    <div className={styles.mobile_nav}>
      <nav>
      <ul className={styles.primary}>
        <li>
          <a href={"#hero"} onClick={(e) => goToSection(e, '#hero')}>
            <p>mitri.dvp</p>
          </a>
        </li>
        <li>
          <button onClick={(e) => setOpen(!open)}><img src="/svgs/burger-dark.svg" alt="mitri-dvp-logo"/></button>
        </li>
      </ul>
      </nav>
    </div>
    <div className={`${styles.fixed_nav} ${open ? '' : styles.open}`}>
        <ul>
          <li>
          <button onClick={(e) => setOpen(!open)}><img src="/svgs/burger-light.svg" alt="mitri-dvp-logo"/></button>
          </li>
          <li>
            <a  href={"#hero"} 
                onClick={(e) => {
                  goToSection(e, '#hero')
                  setOpen(true)
                }}
            >Top</a>
          </li>
          <li>
            <a  href={"#projects"}
                onClick={(e) => {
                  goToSection(e, '#projects')
                  setOpen(true)
                }}
            >Projects</a>
          </li>
          <li>
            <a  href={"#services"}
                onClick={(e) => {
                  goToSection(e, '#services')
                  setOpen(true)
                }}
            >Services</a>
          </li>
          <li>
            <a  href={"#tools"}
                onClick={(e) => {
                  goToSection(e, '#tools')
                  setOpen(true)
                }}
            >Tools</a>
          </li>
          <li>
            <a  href={"#games"}
                onClick={(e) => {
                  goToSection(e, '#games')
                  setOpen(true)
                }}
            >Games</a>
          </li>
          <li><a onClick={() => openModal(true)}>Let's Talk</a></li>
        </ul>
      </div>
    </>

  )
}
