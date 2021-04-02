import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/CustomError.module.css'

export default function CustomError() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mitri.dvp | Page Not Found</title>
        <meta name="description" content="Hello, i’m Jorge Mitri, a Full-Stack Developer. I love building solutions for my clients, find out how I make things happen!"/>
        <meta name="viewport" content="width=device-width,minimum-scale=1" /> 
        <link rel="icon" href="icon.svg" />
      </Head>
      <div className={styles.image_container}>
        <Link href="/">
          <a>
            <img className={styles.image} src="/icon.svg" alt="mitri-dvp-icon"/>
          </a>
        </Link> 
        <div className={styles.text}>404 <span>|</span> <span>Page Not Found</span></div>
      </div>
      <div className={styles.back_home}>
        <Link href="/">
          <a>visit homepage</a>
        </Link> 
      </div>
    </div>
  )
}
