import Head from 'next/head'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home | Mitri.dvp</title>
        <link rel="icon" href="icon.svg" />
        <link
            rel="preload"
            href="/fonts/Nexa-Bold.otf"
            as="font"
            crossOrigin=""
          />
      </Head>
      
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}
