import React, { useContext } from 'react'
import styles from '../styles/LetsTalk.module.css'

import ModalContext from '../context/ModalContext'

export default function LetsTalk() {
  const { open, setOpen } = useContext(ModalContext)

  return (
    <section className={styles.wrapper}>
        <h1 className={styles.title}>Interested?</h1>
        <div className={styles.button} onClick={() => setOpen(true)}>Let's Talk</div>
    </section>
  )
}
