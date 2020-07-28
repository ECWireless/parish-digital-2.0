import Head from 'next/head'
import styled from 'styled-components'
import '../styles.css'

// Components
import { Box1 } from '../components/Boxes'
import { Flex } from '../components/Containers'


export default function App({ Component, pageProps }) {
  return (
    <>
		<Head>
			<title>Parish Digital | Video Production</title>
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
            <NavBar>
				<Flex style={{ height: '100%', width: '100%' }} align={'center'} justify={'center'}>
					<div style={{color: '#fff', position: 'absolute', left: '2rem'}}>Menu</div>
					<Flex align={'center'} justify={'space-around'} direction={'column'}>
						<PDLogo style={{ backgroundImage: 'url(./logos/pd_logo.png)'}} />
						<Box1 marginTop={5}>
							<LogoCaption>Parish Digital</LogoCaption>
						</Box1>
					</Flex>
					<NavMenu>
						<ul>
							<li>About</li>
							<li>Contact</li>
						</ul>
					</NavMenu>
				</Flex>
            </NavBar>
            {children}
        </div>
    )
}

const NavBar = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	height: 8rem;
	background: #000;
`

const PDLogo = styled.div`
	height: 4rem;
	width: 4rem;
	background-position: center;
	background-size: cover;
`

const LogoCaption = styled.p`
	color: #fff;
	font-size: 1.2rem;
`

const NavMenu = styled.nav`
	position: absolute;
	right: 2rem;
	height: 100%;
	width: 20rem;
	background: blue;
`
