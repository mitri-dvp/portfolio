import {useEffect, useState} from 'react'
import styles from '../styles/Hero.module.css'

export default function Hero() {

  const [start, setStart] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setStart(false)
    }, 0);
  }, [])

  return (
    <div className={styles.wrapper} id={'hero'}>
      <div className={styles.image_wrapper}>
        <img className={start ? styles.a_left : ''} src="/svgs/icon-left.svg" alt=""/>
        <img className={start ? styles.a_right : ''} src="/svgs/icon-right.svg" alt=""/>
      </div>
      <div className={styles.content}>
        <h1>
          Hello. <br/>
          I’m Jorge Mitri. <br/>
          a Full-Stack Developer.
        </h1>
        <p>I love building solutions for my clients, <br/> find out how I make things happen.</p>
      </div>
    </div>
  )
}
