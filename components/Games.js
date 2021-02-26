import styles from '../styles/Games.module.css'

export default function Games() {




  return (
    <section className={styles.section} id='games'>
      <div className={styles.wrapper}>

        <h1 className={styles.title}>Games</h1>
        <p className={styles.sub_title}>Want to have fun?</p>

        <div className={`${styles.tools_wrapper}`}>
          <div>
            <a href='https://mitri-dvp.github.io/JavaScript-Whack-A-Mole/' target='_blank'>
              <img src="/imgs/mole.png" alt="mole"/>
            </a>
            <h3>Whack-A-Mole</h3>
          </div>
          <div>
            <a href='https://mitri-dvp.github.io/JavaScript-Brain-Train/' target='_blank'>
              <img src="/imgs/brain.png" alt="brain"/>
            </a>
            <h3>Brain Train</h3>
          </div>
          <div>
            <a href='https://mitri-dvp.github.io/JavaScript-Snake/' target='_blank'>
              <img src="/imgs/snake.png" alt="snake"/>
            </a>
            <h3>Snake</h3>
          </div>
        </div>

      </div>
    </section>
  )
}
