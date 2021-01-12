import Head from 'next/head'
import styles from '../styles/Home.module.css'

const App = ({data}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PWA Meetup #7</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>
        I'm working on the {data.branch}-branch.
      </h2>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

  // This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${process.env.API_PATH}/api/branch`);
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default App;