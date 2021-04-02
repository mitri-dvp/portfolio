import { useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

import { URL_ORIGIN } from '../utils/links'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, window.scrollY + 2)
    window.scrollTo(0, window.scrollY - 2)
  }, [])

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>mitri.dvp | Full-Stack Developer</title>
        <meta name="description" content="Hello, i’m Jorge Mitri, a Full-Stack Developer. I love building solutions for my clients, find out how I make things happen!"/>
        <meta name="image" content={`${URL_ORIGIN}/imgs/thumbnail.png`} />
        <meta name="viewport" content="width=device-width,minimum-scale=1" /> 
        <link rel="icon" href="icon.svg" />

        <link rel="canonical" href={`${URL_ORIGIN}/`}/> 

        <meta property="og:title" content="mitri.dvp" />
        <meta property="og:description" content="Hello, i’m Jorge Mitri, a Full-Stack Developer. I love building solutions for my clients, find out how I make things happen!"/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${URL_ORIGIN}`}/> 
        <meta property="og:image" content={`${URL_ORIGIN}/imgs/thumbnail.png`} /> 
        <meta property="og:image:alt" content="mitri-dvp-thumbnail" /> 
        <meta property="og:title" content="mitri.dvp" /> 

        <meta name="twitter:card" content="summary" /> 
        <meta name="twitter:site" content="@mitri_dvp" />
        <meta property="twitter:title" content="mitri.dvp | Full-Stack Developer" /> 
        <meta name="twitter:description" content="Hello, i’m Jorge Mitri, a Full-Stack Developer. I love building solutions for my clients, find out how I make things happen!" />
        <meta name="twitter:image" content={`${URL_ORIGIN}/imgs/thumbnail.png`} />

        <meta name="google-site-verification" content="gPQZKSnJWApmajiOJUPLAXEwH8fLcntHdP8_kRENIpA" />
      </Head>
      
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}
