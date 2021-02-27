import React from 'react'
import styles from '../styles/LetsTalk.module.css'

export default function LetsTalk({ props }) {
  const {showModal, openModal} = props

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div
      className={`${styles.wrapper} ${showModal && styles.active}`}
      onMouseDown={(e) => {
        if(e.target.className.includes(styles.wrapper)) {
          if(e.button === 0) {
            openModal(false)
          }
        }
      }}
    >
      <div className={styles.body_wrapper}>
        <div className={styles.body}>
        <button className={styles.exit} onClick={() => openModal(false)}>
          <img src="/svgs/x.svg" alt="x-button"/>
        </button>
        <h1 className={styles.title}>Let's Talk!</h1>
        <p className={styles.sub_title}>
          Feel free to send me a message! I answer any request in a timely manner.  If you want to contact me faster, please send me a <a target="_blank" href="https://t.me/mitri_dvp"  rel="noopener noreferrer">Telegram</a>.
        </p>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.head}>
            <div>
              <label htmlFor='name'>Name:</label>
              <input type="text" name='name' id='name'/>
            </div>
            <div>
              <label htmlFor='email'>Email:</label>
              <input type="text" name='email' id='email'/>
            </div>
          </div>
          <div>
           <label htmlFor='message'>Message:</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
          </div>
          <button>Send</button>
        </form>
        </div>
      </div>
    </div>
  )
}
