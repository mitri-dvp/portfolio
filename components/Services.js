import styles from '../styles/Services.module.css'

export default function Services() {
  return (
    <section className={styles.section} id='services'>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Services</h1>

        <ul className={styles.services_wrapper}>
        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/development.svg" alt="development-icon"/>
          </div>
          <h2>Website Development</h2>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/uiux.svg" alt="uiux-icon"/>
          </div>
          <h2>UI/UX</h2>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/landing.svg" alt="landing-icon"/>
          </div>
          <h2>Landing Pages</h2>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/blog.svg" alt="blog-icon"/>
          </div>
          <h2>Blog</h2>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/ecommerce.svg" alt="ecommerce-icon"/>
          </div>
          <h2>E-commerce</h2>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/cms.svg" alt="cms-icon"/>
          </div>
          <h2>CMS</h2>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/apps.svg" alt="apps-icon"/>
          </div>
          <h2>Web Applications</h2>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/chat.svg" alt="chat-icon"/>
          </div>
          <h2>Chat</h2>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/prototyping.svg" alt="prototyping-icon"/>
          </div>
          <h2>Prototyping</h2>
        </li>

        </ul>
      </div>
    </section>
  )
}
