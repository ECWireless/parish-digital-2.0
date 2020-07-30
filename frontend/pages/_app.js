import { useState } from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import '../styles.css'

// Components
import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
	const [sidebar, setSidebar] = useState(true)
	return (
		<>
			<Head>
				<title>Parish Digital | Video Production</title>
				<link rel="icon" href="/favicon.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet" />
			</Head>
			
			<Layout setSidebar={setSidebar} sidebar={sidebar}>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

const Layout = ({ children, setSidebar, sidebar }) => {
    return(
        <div>
            <Navigation setSidebar={setSidebar} />
			<Backdrop onClick={() => setSidebar(false)} open={sidebar} />
			<Sidebar sidebar={sidebar} setSidebar={setSidebar} />
            {children}
			<Footer />
        </div>
    )
}

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	height: 100vh;
	width: 100%;
	background: #000;
	z-index: -5;
	opacity: 0;
	transition: all .5s ease;

	${props => props.open && css`
		z-index: 999;
		opacity: .8;
	`}
`
