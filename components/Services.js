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
          <h3>Website Development</h3>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/uiux.svg" alt="uiux-icon"/>
          </div>
          <h3>UI/UX</h3>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/landing.svg" alt="landing-icon"/>
          </div>
          <h3>Landing Pages</h3>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/blog.svg" alt="blog-icon"/>
          </div>
          <h3>Blog</h3>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/ecommerce.svg" alt="ecommerce-icon"/>
          </div>
          <h3>E-commerce</h3>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/cms.svg" alt="cms-icon"/>
          </div>
          <h3>CMS</h3>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/apps.svg" alt="apps-icon"/>
          </div>
          <h3>Web Applications</h3>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/chat.svg" alt="chat-icon"/>
          </div>
          <h3>Chat</h3>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/prototyping.svg" alt="prototyping-icon"/>
          </div>
          <h3>Prototyping</h3>
        </li>

        </ul>
      </div>
    </section>
  )
}
