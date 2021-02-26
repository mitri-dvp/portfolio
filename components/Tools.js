import { useRef } from 'react'
import styles from '../styles/Tools.module.css'

import { useScrollPosition } from '../hooks/useScrollPosition.tsx'

export default function Tools() {
  const toolsRef = useRef()

  useScrollPosition(({ currPos }) => {
    if(currPos.y - window.innerHeight + 240 < 0) {
      toolsRef.current.classList.add(styles.active)
    }
  }, [], toolsRef)


  return (
    <section className={styles.section} id='tools'>
      <div className={styles.wrapper}>

        <h1 className={styles.title}>Tools</h1>
        <p className={styles.sub_title}>These are the Technologies that I've worked or I'm familiar with. They are used to build any sort of project, I choose and select the most appropiate stack!</p>

        <div ref={toolsRef} className={`${styles.tools_wrapper}`}>
          <div className={styles.circle}></div>
          <div className={styles.row}>
            <div>
              <img src="/svgs/tools/strapi-logo.svg" alt="strapi-logo"/>
            </div>
            <div>
              <img src="/svgs/tools/node-logo.svg" alt="node-logo"/>
            </div>
            <div>
              <img src="/svgs/tools/nextjs-logo.svg" alt="nextjs-logo"/>
            </div>
          </div>
          <div className={styles.row}>
          <div>
              <img src="/svgs/tools/bootstrap-logo.svg" alt="bootstrap-logo"/>
            </div>
            <div>
              <img src="/svgs/tools/typescript-logo.svg" alt="typescript-logo"/>
            </div>
            {/* <div>
              <img src="/svgs/tools/unofficial-javascript-logo-2.svg" alt="unofficial-javascript-logo-2"/>
            </div> */}
            <div>
              <img src="/svgs/tools/react-logo.svg" alt="react-logo"/>
            </div>
            <div>
              <img src="/svgs/tools/electron-logo.svg" alt="electron-logo"/>
            </div>
          </div>
          <div className={styles.row}>
            <div>
              <img src="/svgs/tools/mongodb-logo.svg" alt="mongodb-logo"/>
            </div>
            <div>
              <img src="/svgs/tools/mysql-logo.svg" alt="mysql-logo"/>
            </div>
            <div>
              <img src="/svgs/tools/postgresql-logo.png" alt="postgresql-logo"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
