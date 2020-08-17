import { useState } from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import '../styles.css'

// Components
import Navigation from '../components/Navigation'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
	const [sidebar, setSidebar] = useState(false)

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
    			<link rel="apple-touch-icon" href="/favicon.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet" />

				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
				name="description"
				content="Our focus is video for business. We’re a small video production team, but we’ve produced thousands of successful video projects for Pittsburgh-based, national, and international clients."
				/>
				<meta name="keywords" content="video, productions, pittsburgh, parish, digital, studio" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
				<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
				<link rel="canonical" href="https://parishdigital.com/"></link>
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
	z-index: -1;
	opacity: 0;
	transition: all .5s ease;

	${props => props.open && css`
		z-index: 999;
		opacity: .8;
	`}
`
