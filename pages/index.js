import { useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'


export default function Home() {
  useEffect(() => {
    window.scrollTo(0, window.scrollY + 2)
    window.scrollTo(0, window.scrollY - 2)
  }, [])

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>mitri.dvp | Full-Stack Developer</title>
        <meta property="og:title" content="mitri.dvp" />
        <meta name="google-site-verification" content="gPQZKSnJWApmajiOJUPLAXEwH8fLcntHdP8_kRENIpA" />
        <meta name="description" content="Hello, i’m Jorge Mitri, a Full-Stack Developer. I love building solutions for my clients, find out how I make things happen!"/>
        <meta property="og:description" content="Hello, i’m Jorge Mitri, a Full-Stack Developer. I love building solutions for my clients, find out how I make things happen!"/>
        <link rel="icon" href="icon.svg" />
      </Head>
      
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}
