import styles from '../../styles/Services.module.css'

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
          <p>Website Development</p>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/uiux.svg" alt="uiux-icon"/>
          </div>
          <p>UI/UX</p>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/landing.svg" alt="landing-icon"/>
          </div>
          <p>Landing Pages</p>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/blog.svg" alt="blog-icon"/>
          </div>
          <p>Blog</p>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/ecommerce.svg" alt="ecommerce-icon"/>
          </div>
          <p>E-commerce</p>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/cms.svg" alt="cms-icon"/>
          </div>
          <p>CMS</p>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/apps.svg" alt="apps-icon"/>
          </div>
          <p>Web Applications</p>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/chat.svg" alt="chat-icon"/>
          </div>
          <p>Chat</p>
        </li>

        <li>
          <div className={styles.icon}>
            <img src="/svgs/services/prototyping.svg" alt="prototyping-icon"/>
          </div>
          <p>Prototyping</p>
        </li>

        </ul>
      </div>
    </section>
  )
}
