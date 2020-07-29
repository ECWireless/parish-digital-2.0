import Head from 'next/head'
import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'
import '../styles.css'

// Components
import NavBar from '../components/Navigation'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
		<Head>
			<title>Parish Digital | Video Production</title>
			<link rel="icon" href="/favicon.ico" />
			<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet" />
		</Head>
		
		<Layout>
			<Component {...pageProps} />
		</Layout>
    </>
  )
}

const Layout = ({ children }) => {
    return(
        <div>
            <NavBar />
            {children}
			<Footer />
        </div>
    )
}
