import Hero from './Hero'
import Projects from './Projects'
import Services from './Services'
import Tools from './Tools'
import Games from './Games'
import styles from '../styles/Content.module.css'

export default function Content({start}) {
  return (
    <div className={styles.wrapper}>
      <Hero start={start}/>
      <Projects/>
      <Services/>
      <Tools/>
      <Games/>
    </div>
  )
}
