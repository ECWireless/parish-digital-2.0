import Head from 'next/head'
import styled, { css } from 'styled-components'
import '../styles.css'

const Layout = ({ children }) => {
    return(
        <div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            {children}
        </div>
    )
}

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Parish Digital | Video Production</title>
    </Head>
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}