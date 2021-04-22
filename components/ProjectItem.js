import { useRef } from 'react'

import { useScrollPosition } from '../hooks/useScrollPosition.tsx'

import styles from '../styles/ProjectItem.module.css'


export default function ProjectItem(props) {
  const {title, tag, description, badges, image, demo, mirror} = props

  const projectRef = useRef()

  useScrollPosition(({ currPos }) => {
    const project = projectRef.current;
    if((project.offsetTop + 120) < ((currPos.y*-1) + window.innerHeight))  {
      project.classList.add(styles.show)
    }
  })

  return (
    <div ref={projectRef} className={styles.project}>
      {mirror && (
      <div className={styles.thumbnail}>
        {demo ? 
        (<>
          <a rel="noopener noreferrer" target="_blank" href={demo}>
            <img src={image.src} alt={image.alt}/>
          </a>
          <a rel="noopener noreferrer" target="_blank" href={demo} className={styles.live_demo}>live demo</a>
        </>)
        :
        (<>
          <img src={image.src} alt={image.alt}/>
          <div className={`${styles.live_demo} ${styles.null}`}>live demo</div>
        </>)
        }
      </div>
      )}
      <div className={styles.content}>
        <h1>{title}</h1>
        <h2>{tag}</h2>
        <p dangerouslySetInnerHTML={{__html:description}}></p>
        <ul>
          {badges.map((badge, i) => <li key={i}>{badge}</li>)}
        </ul>
      </div>
      {!mirror && (
      <div className={styles.thumbnail}>
        {demo ? 
        (<>
          <a rel="noopener noreferrer" target="_blank" href={demo}>
            <img src={image.src} alt={image.alt}/>
          </a>
          <a rel="noopener noreferrer" target="_blank" href={demo} className={styles.live_demo}>live demo</a>
        </>)
        :
        (<>
          <img src={image.src} alt={image.alt}/>
          <div className={`${styles.live_demo} ${styles.null}`}>live demo</div>
        </>)
        }
      </div>
      )}
    </div>
  )
}
