import { useContext, useEffect, useState, useRef } from 'react'
import styles from '../../styles/Projects.module.css'

import WindowContext from '../context/WindowContext'

export default function Projects() {
  const [firstLoad, setFirstLoad] = useState(true)
  const [projects, setProjects] = useState(undefined)
  const projectsRef = useRef()
  const { scrollY } = useContext(WindowContext);

  useEffect(() => {
    if(firstLoad) {
      setProjects([...projectsRef.current.children])
      setFirstLoad(false)
    } else if(projects) {
      projects.forEach(project => {
        if((project.offsetTop + 120) < (scrollY + window.innerHeight))  {
          project.classList.add(styles.show)
        }
      })
    }
  }, [scrollY])
  
  return (
    <section className={styles.section} id='projects'>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Projects</h1>

        <div ref={projectsRef} className={styles.projects_wrapper}>

          <div className={styles.project}>
            <div className={styles.content}>
              <h1>Online Shop</h1>
              <h2>#E-commerce</h2>
              <p>An online store platform. It features a <span>beautiful UI</span> that allows clients, with the help of a <span>Shopping Cart</span>, to select and buy products securely. It also uses a <span>CMS</span> with custom controllers to manage perfectly all purchases and inventory.</p>
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
              <p>A custom <span>CMS</span> solution for my parent's restaurant, with a simple and effective layout, featuring a <span>Lebanese</span> design from <a target="_blank" href="https://www.instagram.com/mitri.gd/">mitri.gd</a>. It allows the admin user to manage <span>Clients</span>, <span>Products</span>, and <span>Orders</span> data.</p>
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
              <p>An online store platform. It features a <span>beautiful UI</span> that allows clients, with the help of a <span>Shopping Cart</span>, to select and buy products securely. It also uses a <span>CMS</span> with custom controllers to manage perfectly all purchases and inventory.</p>
              <ul>
                <li>Electron</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className={styles.thumbnail}>
              <img src="/imgs/online-shop-thumbnail.png" alt="online-shop-project-thumbnail"/>
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.thumbnail}>
              <img src="/imgs/genera-thumbnail.png" alt="genera-project-thumbnail"/>
            </div>
            <div className={styles.content}>
              <h1>Genera</h1>
              <h2>#Landing Page</h2>
              <p>An <span>informative website</span> for Genera, a Colombian company, as part of their marketing strategy. It features a custom and <span>responsive design</span>, <span>dynamic animations</span> to capture client's eyes, and a <span>contact form</span> to submit corporate e-mails.</p>
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
