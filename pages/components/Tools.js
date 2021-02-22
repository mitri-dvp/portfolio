import styles from '../../styles/Tools.module.css'

export default function Tools() {
  return (
    <section className={styles.section} id='tools'>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Tools</h1>
        <p className={styles.sub_title}>These are the Technologies that I've worked or I'm familiar with. They are used to build any sort of project, I choose and select the most appropiate stack!</p>
        {/* 
          Rename to Technologies? Tools?
          Languages?
          o JavaScript
          o HTML
          o CSS
          o SQL
          
          TypeScript
          GraphQL

          DBs
          o MongoDB <- DB
          o PostgreSQL <- DB
          o MariaDB <- DB

          Frameworks
          o Bootstrap <- CSS Framework
          Tailwind <- CSS Framework
          Materialyze <- CSS Framework
          o React <- Front-End Framework
          o Next <- Front-End Framework

          Node <- Programming Language
          Express <- API Framework
          Electron <- Desktop Framework
          
          STACKS
          MERN
          - o Mongo <- DB
          - Express <- API Framework
          - o React <- Front-End Framework
          - o Node <- Programming Language

          JAM
          - o NextJS <- Front-End Framework
          - o Strapi <- API Framework
        */}

        <div className={styles.tools_wrapper}>
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
              <img src="/svgs/tools/unofficial-javascript-logo-2.svg" alt="unofficial-javascript-logo-2"/>
            </div>
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
