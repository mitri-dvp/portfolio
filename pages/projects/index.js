import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProjectItemSmall from '../../components/ProjectItemSmall'

import Head from 'next/head'

import styles from '../../styles/ProjectsHome.module.css'

export default function index() {
  return (
    <div>
      <Head>
        <title>mitri.dvp | Projects</title>
        <meta name="description" content="A list of all of my live projects that are available to use, check them out! I'm sure one of them will be of your liking."/>
        <meta name="viewport" content="width=device-width,minimum-scale=1" /> 
        <link rel="icon" href="icon.svg" />
      </Head>
      <Header/>

      <div className={styles.wrapper}>
        <h1 className={styles.title}>Projects</h1>

        <div className={styles.projects_wrapper}>
        <ProjectItemSmall
            title={'E-Shop'}
            description={'An online store platform.'}
            image={{
              src:"/imgs/online-shop-thumbnail.png",
              alt:"online-shop-project-thumbnail"
            }}
            demo={'https://mitri-dvp-ecommerce.vercel.app/'}
          />

          <ProjectItemSmall
            title={'Hasbaya'}
            description={`A custom CMS with a simple and effective layout.`}
            image={{
              src:"/imgs/hasbaya-thumbnail.png",
              alt:"hasbaya-project-thumbnail"
            }}
            demo={'https://mitri-dvp-hasbaya-crud.herokuapp.com/'}
          />

          <ProjectItemSmall
            title={'Ecosalud'}
            description={`A Waiting List application.`}
            image={{
              src:"/imgs/ecosalud-thumbnail.png",
              alt:"ecosalud-project-thumbnail"
            }}
            demo={null}
          />

          <ProjectItemSmall
            title={'Genera'}
            description={`An Informative Website.`}
            image={{
              src:"/imgs/genera-thumbnail.png",
              alt:"genera-project-thumbnail"
            }}
            demo={'https://mitri-dvp.github.io/genera/'}
          />

          <ProjectItemSmall
            title={'Calendar'}
            description={`A Calendar where you can mark event dates.`}
            image={{
              src:"/imgs/calendar-thumbnail.png",
              alt:"calendar-project-thumbnail"
            }}
            demo={'https://mitri-dvp.github.io/JavaScript-Event-Calendar/'}
          />

          <ProjectItemSmall
            title={'Calculator'}
            description={`An online Calculator application.`}
            image={{
              src:"/imgs/calculator-thumbnail.png",
              alt:"calculator-project-thumbnail"
            }}
            demo={'https://mitri-dvp.github.io/JavaScript-Calculator/'}
          />

          <ProjectItemSmall
            title={'Whack-A-Mole'}
            description={`A Whack-A-Mole game, whack as many as you can!`}
            image={{
              src:"/imgs/whack-a-mole-thumbnail.png",
              alt:"whack-a-mole-project-thumbnail"
            }}
            demo={'https://mitri-dvp.github.io/JavaScript-Whack-A-Mole/'}
          />

          <ProjectItemSmall
            title={'Brain Train'}
            description={`A Math Question game, answer as many as you can!`}
            image={{
              src:"/imgs/brain-train-thumbnail.png",
              alt:"brain-train-project-thumbnail"
            }}
            demo={'https://mitri-dvp.github.io/JavaScript-Brain-Train/'}
          />

          <ProjectItemSmall
            title={'Snake Game'}
            description={`A Snake game, can you eat every apple?`}
            image={{
              src:"/imgs/snake-game-thumbnail.png",
              alt:"snake-game-project-thumbnail"
            }}
            demo={'https://mitri-dvp.github.io/JavaScript-Snake/'}
          />

          <ProjectItemSmall
            title={'Rock Paper Scissors'}
            description={`A Rock Paper Scissors game, is it luck or skill?`}
            image={{
              src:"/imgs/rock-paper-scissors-thumbnail.png",
              alt:"rock-paper-scissors-project-thumbnail"
            }}
            demo={'https://mitri-dvp.github.io/JavaScript-Rock-Paper-Scissors/'}
          />

        </div>
      </div>
      
      <Footer/>
    </div>
  )
}
