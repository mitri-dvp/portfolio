import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import ModalContext from '../context/ModalContext'
import { useScrollPosition } from '../hooks/useScrollPosition.tsx'

import styles from '../styles/Header.module.css'

export default function Header() {
  const [fixed, setFixed] = useState(false)
  const [openSideNav, setOpenSideNav] = useState(true)

  const router = useRouter()
  const isHome = router.pathname === '/'

  const { open, setOpen } = useContext(ModalContext)

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
  if(!isHome) return (
<>
    <div className={`${styles.main_nav}`}>
      <nav>
      <ul>
        <li>
          <Link href="/">
            <a><p>mitri.dvp</p></a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </li>
      </ul>
      </nav>
    </div>
    
    <div className={styles.mobile_nav}>
      <nav>
      <ul className={styles.primary}>
        <li>
        <Link href="/">
          <a>mitri.dvp</a>
        </Link>
        </li>
        <li>
          <Link href="/">
            <a><button><img src="/svgs/house.svg" alt="mitri-dvp-logo"/></button></a>
          </Link>
        </li>
      </ul>
      </nav>
    </div>
    </>
  )
  
  return (
    <>
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
        <li onClick={() => setOpen(true)}><div>Let's Talk</div></li>
      </ul>
      </nav>
    </div>
    <div className={`${styles.side_nav} ${fixed && styles.side_nav_fixed} ${openSideNav && styles.side_nav_open}`}>
    <nav>
      <ul>
        <button onClick={(e) => setOpenSideNav(!openSideNav)}><img src="/icon.svg" alt="mitri-dvp-logo"/></button>
        <li><a href={"#hero"} onClick={(e) => goToSection(e, '#hero')}>Top</a></li>
        <li><a href={"#projects"} onClick={(e) => goToSection(e, '#projects')}>Projects</a></li>
        <li><a href={"#services"} onClick={(e) => goToSection(e, '#services')}>Services</a></li>
        <li><a href={"#tools"} onClick={(e) => goToSection(e, '#tools')}>Tools</a></li>
        <li><a href={"#games"} onClick={(e) => goToSection(e, '#games')}>Games</a></li>
        {/* <a>Games</a>
        <a>About</a> */}
        <li onClick={() => setOpen(true)}><div>Let's Talk</div></li>
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
          <button onClick={(e) => setOpenSideNav(!openSideNav)}><img src="/svgs/burger-dark.svg" alt="mitri-dvp-logo"/></button>
        </li>
      </ul>
      </nav>
    </div>
    <div className={`${styles.fixed_nav} ${openSideNav ? '' : styles.open}`}>
        <ul>
          <li>
          <button onClick={(e) => setOpenSideNav(!openSideNav)}><img src="/svgs/burger-light.svg" alt="mitri-dvp-logo"/></button>
          </li>
          <li>
            <a  href={"#hero"} 
                onClick={(e) => {
                  goToSection(e, '#hero')
                  setOpenSideNav(true)
                }}
            >Top</a>
          </li>
          <li>
            <a  href={"#projects"}
                onClick={(e) => {
                  goToSection(e, '#projects')
                  setOpenSideNav(true)
                }}
            >Projects</a>
          </li>
          <li>
            <a  href={"#services"}
                onClick={(e) => {
                  goToSection(e, '#services')
                  setOpenSideNav(true)
                }}
            >Services</a>
          </li>
          <li>
            <a  href={"#tools"}
                onClick={(e) => {
                  goToSection(e, '#tools')
                  setOpenSideNav(true)
                }}
            >Tools</a>
          </li>
          <li>
            <a  href={"#games"}
                onClick={(e) => {
                  goToSection(e, '#games')
                  setOpenSideNav(true)
                }}
            >Games</a>
          </li>
          <li onClick={() => setOpen(true)}><div>Let's Talk</div></li>
        </ul>
      </div>
    </>
  )
}
