import React from 'react'
import styles from '../../styles/Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image_wrapper}>
        <img src="/svgs/icon-left.svg" alt=""/>
        <img src="/svgs/icon-right.svg" alt=""/>
      </div>
      <div className={styles.content}>
        <h1>
          Hello. <br/>
          I’m Jorge Mitri. <br/>
          a Web Developer.
        </h1>
        <p>I love building solutions for my clients, <br/> find out how I make things happen.</p>
      </div>
    </div>
  )
}
