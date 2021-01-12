import Head from 'next/head'
import styles from '../styles/Home.module.css'

const App = ({data}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PWA Meetup #7</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 style={{textAlign: 'center'}}>
        Welcome to the {data.meetup} meetup <br />
        <small>{data.date}</small>.
      </h2>

        <p style={{maxWidth: 860}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
        </p>

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
    const res = await fetch(`${process.env.API_PATH}/api/meetup`);
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default App;