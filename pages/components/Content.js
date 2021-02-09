import React from 'react'
import Hero from './Hero'
import Projects from './Projects'
import styles from '../../styles/Content.module.css'

export default function Content() {
  return (
    <div className={styles.wrapper}>
      <Hero/>
      <Projects/>
    </div>
  )
}
