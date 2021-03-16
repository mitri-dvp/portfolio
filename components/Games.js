import styles from '../styles/Games.module.css'

export default function Games() {




  return (
    <section className={styles.section} id='games'>
      <div className={styles.wrapper}>

        <h1 className={styles.title}>Games</h1>
        <p className={styles.sub_title}>Want to have fun?</p>

        <div className={`${styles.games_wrapper}`}>
          <div className={styles.game}>
            <a rel="noopener noreferrer" href='https://mitri-dvp.github.io/JavaScript-Whack-A-Mole/' target='_blank'><img src="/imgs/mole.png" alt="mole"/></a>
            <a className={styles.link} rel="noopener noreferrer" href='https://mitri-dvp.github.io/JavaScript-Whack-A-Mole/' target='_blank'><h3>Whack-A-Mole</h3></a>
          </div>
          <div className={styles.game}>
            <a rel="noopener noreferrer" href='https://mitri-dvp.github.io/JavaScript-Brain-Train/' target='_blank'><img className={styles.img_fix} src="/imgs/brain.png" alt="brain"/></a>
            <a className={styles.link} rel="noopener noreferrer" href='https://mitri-dvp.github.io/JavaScript-Brain-Train/' target='_blank'><h3>Brain Train</h3></a>
          </div>
          <div className={styles.game}>
            <a rel="noopener noreferrer" href='https://mitri-dvp.github.io/JavaScript-Snake/' target='_blank'><img src="/imgs/snake.png" alt="snake"/></a>
            <a className={styles.link} rel="noopener noreferrer" href='https://mitri-dvp.github.io/JavaScript-Snake/' target='_blank'><h3>Snake</h3></a>
          </div>
        </div>

      </div>
    </section>
  )
}
