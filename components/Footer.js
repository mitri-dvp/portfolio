import React from 'react'
import styles from '../styles/Footer.module.css'
// import { LinkedInSVG } from '../utils/svgs'

export default function Footer() {

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logo_wrapper}>
          <img src="/icon.svg" alt=""/>
          <p>mitri.dvp</p>
        </div>
        <div className={styles.bars}>
          <div>
            <p>Find Me On</p>
            <div className={styles.lists}>
              <ul>
                <li>
                  <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mitri.dvp@gmail.com" href="mailto:mitri.dvp@gmail.com?subject=&body=Hi, ">
                    <img src="/svgs/gmail.svg" alt="gmail.svg"/>
                    <p>Gmail</p>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/mitri-dvp">
                    <img src="/svgs/github.svg" alt="github.svg"/>
                    <p>GitHub</p>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/mitri-dvp/">
                    <img src="/svgs/linkedin.svg" alt="linkedin.svg"/>
                    <p>LinkedIn</p>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a target="_blank" href="https://www.youtube.com/channel/UC6FWDx-GCHqlOD4uQ1UDeBw">
                    <img src="/svgs/youtube.svg" alt="youtube.svg"/>
                    <p>YouTube</p>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/mitri.dvp/">
                    <img src="/svgs/instagram.svg" alt="instagram.svg"/>
                    <p>Instagram</p>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://t.me/mitri_dvp">
                    <img src="/svgs/telegram.svg" alt="telegram.svg"/>
                    <p>Telegram</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        {new Date().getFullYear()} © mitri.dvp. All rights reserved.
      </div>
    </div>
  )
}
