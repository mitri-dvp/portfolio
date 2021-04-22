import styles from '../styles/ProjectItemSmall.module.css'


export default function ProjectItem(props) {
  const {title, description, image, demo} = props

  return (
    <div className={styles.project}>
      {demo ? 
        <a target="_blank" href={demo} className={styles.thumbnail}>
          <img src={image.src} alt={image.alt}/>
        </a>
        :
        <div className={styles.thumbnail}>
          <img src={image.src} alt={image.alt}/>
        </div>
      }

      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
        {demo ? 
          <a href={demo} target="_blank" className={styles.live_demo}>live demo</a>
          :
          <div className={`${styles.live_demo} ${styles.null}`}>live demo</div>
        }
      </div>
    </div>
  )
}
