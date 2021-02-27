import styles from '../styles/Games.module.css'

export default function Games() {




  return (
    <section className={styles.section} id='games'>
      <div className={styles.wrapper}>

        <h1 className={styles.title}>Games</h1>
        <p className={styles.sub_title}>Want to have fun?</p>

        <div className={`${styles.tools_wrapper}`}>
          <div>
            <a className={styles.game} href='https://mitri-dvp.github.io/JavaScript-Whack-A-Mole/' target='_blank'>
              <img src="/imgs/mole.png" alt="mole"/>
            </a>
            <a className={styles.link} href='https://mitri-dvp.github.io/JavaScript-Whack-A-Mole/' target='_blank'>Whack-A-Mole</a>
          </div>
          <div>
            <a className={styles.game} href='https://mitri-dvp.github.io/JavaScript-Brain-Train/' target='_blank'>
              <img src="/imgs/brain.png" alt="brain"/>
            </a>
            <a className={styles.link} href='https://mitri-dvp.github.io/JavaScript-Brain-Train/' target='_blank'> Brain Train</a>
          </div>
          <div>
            <a className={styles.game} href='https://mitri-dvp.github.io/JavaScript-Snake/' target='_blank'>
              <img src="/imgs/snake.png" alt="snake"/>
            </a>
            <a className={styles.link} href='https://mitri-dvp.github.io/JavaScript-Snake/' target='_blank'>Snake</a>
          </div>
        </div>

      </div>
    </section>
  )
}
