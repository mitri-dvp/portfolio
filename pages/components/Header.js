import React from 'react'
import styles from '../../styles/Header.module.css'

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <nav>
        <p><a href="#">mitri.dvp</a></p>
        <p><a href="#">Projects</a></p>
        <p><a href="#">What I Do</a></p>
        {/* <p><a href="#">Games</a></p> */}
        {/* <p><a href="#">About</a></p> */}
        <p><a href="#">Contact</a></p>
      </nav>
    </div>
  )
}
