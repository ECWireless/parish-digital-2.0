import Head from 'next/head'
import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'
import '../styles.css'

// Components
import NavBar from '../components/Navigation'
import { Box1, Box3 } from '../components/Boxes'
import { Container, Flex } from '../components/Containers'
import { Link } from '../components/Links'
import { P2 } from '../components/Typography'
import { colors } from '../components/Theme'

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
			<FooterContainer>
				<Container>
					<Flex align={'center'} justify={'center'} respond>
						<LogoContainer align={'center'} justify={'space-around'} direction={'column'}>
							<PDLogo style={{ backgroundImage: 'url(./logos/pd_logo.png)'}} />
							<Box1 marginTop={15}>
								<LogoCaption>Parish Digital</LogoCaption>
							</Box1>
						</LogoContainer>
						<Flex direction={'column'}>
							<Link  href="mailto: hello@parishdigital.com" color={colors.white} hover={colors.yellow}>
								<P2 center>hello@parishdigital.com</P2>
							</Link>
							<Box3 marginTop={10}>
								<Link  href="tel: 4129513331" color={colors.white} hover={colors.yellow}>
									<P2 center>(412) 951-3331</P2>
								</Link>
							</Box3>
							<Box3 marginTop={30}>
								<P2 color={colors.white} center>5819 Penn Ave</P2>
							</Box3>
							<Box3 marginTop={10}>
								<P2 color={colors.white} center>Pittsburgh, PA 15206</P2>
							</Box3>
						</Flex>
						<SocialContainer>
							<Box3 marginRight={10}>
								<SocialLogo style={{ backgroundImage: 'url(./logos/vimeo-icon.png)'}} />
							</Box3>
							<Box3>
								<SocialLogo style={{ backgroundImage: 'url(./logos/linkedin.png)'}} />
							</Box3>
							<Box3 marginRight={10} marginTop={10}>
								<SocialLogo style={{ backgroundImage: 'url(./logos/facebook.png)'}} />
							</Box3>
							<Box3 marginTop={10}>
							<SocialLogo style={{ backgroundImage: 'url(./logos/youtube.png)'}} />
							</Box3>
						</SocialContainer>
					</Flex>
				</Container>
			</FooterContainer>
        </div>
    )
}

const FooterContainer = styled.div`
	width: 100%;
	height: 60rem;
	background: linear-gradient(#585858, #393939);
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	flex-direction: column;
    z-index: 0;

	${respondTo.md`
		height: 25rem;
	`}
`

const LogoContainer = styled.div`
	position: static;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 6rem;

	${respondTo.md`
		margin-bottom: 0;
		position: absolute;
		top: 0;
		left: 5rem;
	`}
`

const PDLogo = styled.div`
	height: 8rem;
	width: 8rem;
	background-position: center;
	background-size: cover;

	&:hover {
		cursor: pointer;
		color: ${colors.yellow};
		transition: all .3s ease;
	}
`

const LogoCaption = styled.p`
	color: #fff;
	font-size: 1.6rem;

	${respondTo.xs`
		font-size: 1.8rem;
    `}

	&:hover {
		cursor: pointer;
		color: ${colors.yellow};
		transition: all .3s ease;
	}
`

const SocialContainer = styled.div`
	position: static;
	width: 15rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-top: 6rem;

	${respondTo.md`
		margin-top: 0;
		position: absolute;
		top: 0;
		right: 0;
	`}
`

const SocialLogo = styled.div`
	height: 5rem;
	width: 5rem;
	background-position: center;
	background-size: cover;

	&:hover {
		cursor: pointer;
		color: ${colors.yellow};
		transition: all .3s ease;
	}

	${respondTo.xs`
		height: 5rem;
		width: 5rem;
    `}
	
`
