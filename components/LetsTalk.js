import React, { useState } from 'react'
import styles from '../styles/LetsTalk.module.css'

export default function LetsTalk({ props }) {
  const {showModal, openModal} = props

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault()
    if(loading) return
    if(success) return
    const data = {
      name,
      email,
      message
    }

    setLoading(true)
    const req = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': `application/json`,
      }
    })
    const res = await req.json();
    setLoading(false)

    if(res.status === 200) {
      setSuccess(true);
    }
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

              <div className={`${styles.input_group} ${nameError ? styles.error : ''}`}>
                <input type="text" name='name' id='name' value={name} required
                  onChange={(e) => {setName(e.target.value)}}
                  onBlur={(e) => {name === '' ?  setNameError(true) : setNameError(false)}}
                />
                <label htmlFor='name'>Name:</label>
              </div>

              <div className={`${styles.input_group} ${emailError ? styles.error : ''}`}>
                <input type="email" name='email' id='email' value={email} required
                  onChange={(e) => {setEmail(e.target.value)}}
                  onBlur={(e) => {email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ?  setEmailError(false) : setEmailError(true)}}
                />
                <label htmlFor='email'>E-mail:</label>
              </div>

            </div>

            <div className={`${styles.input_group} ${messageError ? styles.error : ''}`}>
              <textarea name="message" id="message" cols="10" rows="10" value={message} required
                onChange={(e) => {setMessage(e.target.value)}}
                onBlur={(e) => {message === '' ?  setMessageError(true) : setMessageError(false)}}
              ></textarea>
            <label htmlFor='message'>Message:</label>
            </div>

            <button className={success ? styles.success : ''}>
              {success && 'Sent'}
              {loading && '• • •'}
              {!success && !loading && 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
