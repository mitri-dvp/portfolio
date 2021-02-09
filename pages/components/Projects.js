import React from 'react'
import styles from '../../styles/Projects.module.css'

export default function Projects() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Projects</h1>

        <div className={styles.projects_wrapper}>

          <div className={styles.project}>
            <div className={styles.content}>
              <h1>Hasbaya</h1>
              <h2>#CRUD Application</h2>
              <p>A Restaurant CRUD Application developed for my parets. It allows the user manage Clients, Products and Orders data. It is a complete custom solution with a simple and effective design with a powerful relation between.</p>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>JavaScript</li>
              </ul>
            </div>

            <div className={styles.thumbnail}>
              <img src="/imgs/hasbaya-thumbnail.png" alt="hasbaya-project-thumbnail"/>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.thumbnail}>
              <img src="/imgs/genera-thumbnail.png" alt="genera-project-thumbnail"/>
            </div>
            <div className={styles.content}>
              <h1>Genera</h1>
              <h2>#Landing Page</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus commodi minus maxime.</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.content}>
              <h1>Online Shop</h1>
              <h2>#E-commerce</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus commodi minus maxime.</p>
              <ul>
                <li>Next</li>
                <li>Strapi</li>
                <li>CMS</li>
                <li>PayPal</li>
                <li>Stripe</li>
                <li>OAuth2</li>
              </ul>
            </div>

            <div className={styles.thumbnail}>
              <img src="/imgs/online-shop-thumbnail.png" alt="online-shop-project-thumbnail"/>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
