import Link from 'next/link'
import ProjectItem from '../components/ProjectItem'

import styles from '../styles/Projects.module.css'

export default function Projects() {
  return (
    <section className={styles.section} id='projects'>
      <div className={styles.wrapper}>

        <h1 className={styles.title}>Projects</h1>

        <div className={styles.projects_wrapper}>
          <ProjectItem
            title={'E-Shop'}
            tag={'#E-commerce'}
            description={'An online store platform. It features a <strong>Beautiful UI</strong> that allows clients, with the help of a <strong>Shopping Cart</strong>, to select and buy products securely. It also uses a <strong>CMS</strong> with custom controllers to manage perfectly all purchases and inventory.'}
            badges={[
              'Next.js',
              'Strapi',
              'PayPal',
            ]}
            image={{
              src:"/imgs/online-shop-thumbnail.png",
              alt:"online-shop-project-thumbnail"
            }}
            demo={'https://mitri-dvp-ecommerce.vercel.app/'}
          />

          <ProjectItem
            title={'Hasbaya'}
            tag={'#CRUD Application'}
            description={`A custom <strong>CMS</strong> solution for my parent's restaurant, with a simple and effective layout, featuring a <strong>Lebanese</strong> design from <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mitri.gd/">mitri.gd</a>. It allows the admin user to manage <strong>Clients</strong>, <strong>Products</strong>, and <strong>Orders</strong> data.`}
            badges={[
              'Node',
              'Express',
              'JavaScript',
            ]}
            image={{
              src:"/imgs/hasbaya-thumbnail.png",
              alt:"hasbaya-project-thumbnail"
            }}
            demo={'https://mitri-dvp-hasbaya-crud.herokuapp.com/'}
            mirror={true}
          />

          <ProjectItem
            title={'Ecosalud'}
            tag={'#Application'}
            description={`A <strong>Waiting List</strong> application for Ecosalud, a clinic in my city. It allows the secretary to <strong>Manage</strong> incoming <strong>Patients</strong>. It supports a <strong>Second Monitor</strong> to display a <strong>Table</strong> where patients can see more information about their <strong>Inquiry</strong>.`}
            badges={[
              'Electron',
              'Bootstrap',
              'JavaScript',
            ]}
            image={{
              src:"/imgs/ecosalud-thumbnail.png",
              alt:"ecosalud-project-thumbnail"
            }}
            demo={null}
            mirror={false}
          />

          <ProjectItem
            title={'Genera'}
            tag={'#Landing Page'}
            description={`An <strong>Informative Website</strong> for Genera, a Colombian company, as part of their marketing strategy. It features a custom and <strong>Responsive Design</strong>, <strong>Dynamic Animations</strong> to capture client's eyes, and a <strong>Contact Form</strong> to submit corporate e-mails.`}
            badges={[
              'HTML',
              'CSS',
              'JavaScript',
            ]}
            image={{
              src:"/imgs/genera-thumbnail.png",
              alt:"genera-project-thumbnail"
            }}
            demo={'https://mitri-dvp.github.io/genera/'}
            mirror={true}
          />
        </div>
        <Link href={'/projects/'}><a className={styles.more}>See more...</a></Link>
      </div>
    </section>
  )
}
