import { useRef } from 'react'
import styles from '../styles/Projects.module.css'

import { useScrollPosition } from '../hooks/useScrollPosition.tsx'

export default function Projects() {
  const projectsRef = useRef()

  useScrollPosition(({ currPos }) => {
      [...projectsRef.current.children].forEach(project => {
        if((project.offsetTop + 120) < ((currPos.y*-1) + window.innerHeight))  {
          project.classList.add(styles.show)
        }
      })
  })

  return (
    <section className={styles.section} id='projects'>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Projects</h1>

        <div ref={projectsRef} className={styles.projects_wrapper}>
          <div className={styles.project}>
            <div className={styles.content}>
              <h1>Online Shop</h1>
              <h2>#E-commerce</h2>
              <p>An online store platform. It features a <strong>Beautiful UI</strong> that allows clients, with the help of a <strong>Shopping Cart</strong>, to select and buy products securely. It also uses a <strong>CMS</strong> with custom controllers to manage perfectly all purchases and inventory.</p>
              <ul>
                <li>Next.js</li>
                <li>Strapi</li>
                <li>PayPal</li>
              </ul>
            </div>
            <div className={styles.thumbnail}>
              <img src="/imgs/online-shop-thumbnail.png" alt="online-shop-project-thumbnail"/>
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.thumbnail}>
              <img src="/imgs/hasbaya-thumbnail.png" alt="hasbaya-project-thumbnail"/>
            </div>
            <div className={styles.content}>
              <h1>Hasbaya</h1>
              <h2>#CRUD Application</h2>            
              <p>A custom <strong>CMS</strong> solution for my parent's restaurant, with a simple and effective layout, featuring a <strong>Lebanese</strong> design from <a target="_blank" href="https://www.instagram.com/mitri.gd/">mitri.gd</a>. It allows the admin user to manage <strong>Clients</strong>, <strong>Products</strong>, and <strong>Orders</strong> data.</p>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.project}>
            <div className={styles.content}>
              <h1>Ecosalud</h1>
              <h2>#Application</h2>
              <p>A <strong>Waiting List</strong> application for Ecosalud, a clinic in my city. It allows the secretary to <strong>Manage</strong> incoming <strong>Patients</strong>. It supports a <strong>Second Monitor</strong> to display a <strong>Table</strong> where patients can see more information about their <strong>Inquiry</strong>.</p>
              <ul>
                <li>Electron</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className={styles.thumbnail}>
              <img src="/imgs/ecosalud-thumbnail.png" alt="ecosalud-project-thumbnail"/>
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.thumbnail}>
              <img src="/imgs/genera-thumbnail.png" alt="genera-project-thumbnail"/>
            </div>
            <div className={styles.content}>
              <h1>Genera</h1>
              <h2>#Landing Page</h2>
              <p>An <strong>Informative Website</strong> for Genera, a Colombian company, as part of their marketing strategy. It features a custom and <strong>Responsive Design</strong>, <strong>Dynamic Animations</strong> to capture client's eyes, and a <strong>Contact Form</strong> to submit corporate e-mails.</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
