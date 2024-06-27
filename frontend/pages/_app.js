import { useState, useEffect } from 'react'
import Router from 'next/router';
import Head from 'next/head'
import { Source_Sans_3 } from 'next/font/google'
import styled, { css } from 'styled-components'
import { GTMPageView } from '../utils/gtm';
import '../styles.css'

const sourceSans = Source_Sans_3({
	subsets: ['latin'],
	style: 'normal',
});

// Components
// import Navigation from '../components/Navigation'
// import Sidebar from '../components/Sidebar'
// import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
	const [sidebar, setSidebar] = useState(false)

	// Initiate GTM
    useEffect(() => {
        const handleRouteChange = (url) => GTMPageView(url);
        Router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/favicon.ico" />

				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="We're a Pittsburgh video production company that provides video and creative services for small businesses, large corporations, and advertising agencies."
				/>
				<meta property="og:title" content="PD Video | Pittsburgh Video Production Company" />
				<meta property="og:description" content="Pittsburgh video production company with a focus on video for business. Our team is experienced in producing successful video projects for companies." />
				<meta property="og:image" content="https://parishdigital.com/pd.jpg" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Parish Digital" />
				<meta property="og:url" content="https://parishdigital.com/" />

				<meta name="twitter:title" content="PD Video | Pittsburgh Video Production Company" />
				<meta name="twitter:description" content="Pittsburgh video production company with a focus on video for business. Our team is experienced in producing successful video projects for companies." />
				<meta name="twitter:card" content="https://parishdigital.com/pd.jpg" />
				<meta name="twitter:image" content="https://parishdigital.com/pd.jpg" />
				
				<meta name="keywords" content="video, productions, pittsburgh, parish, digital, pd, studio, company" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
				<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
				<link rel="canonical" href="https://parishdigital.com/"></link>
			</Head>
			
			<Layout setSidebar={setSidebar} sidebar={sidebar} className={sourceSans.className}>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

const Layout = ({ children, setSidebar, sidebar }) => {
	return(
		<div>
			{/* <Navigation setSidebar={setSidebar} />
			<Backdrop onClick={() => setSidebar(false)} open={sidebar} />
			<Sidebar sidebar={sidebar} setSidebar={setSidebar} /> */}
				{children}
			{/* <Footer /> */}
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
