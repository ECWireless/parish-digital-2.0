import Head from 'next/head'
import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'
import '../styles.css'

// Components
import { colors } from '../components/theme'
import { Box1, Box3 } from '../components/Boxes'
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
					<SandWhichContainer>
						<Flex direction={'column'} justify={'space-between'}>
							<Box3>
								<SandwhichLine width={35} height={4} color={'white'} />
							</Box3>
							<Box3 marginTop={8}>
								<SandwhichLine width={35} height={4} color={'white'} />
							</Box3>
							<Box3 marginTop={8}>
								<SandwhichLine width={35} height={4} color={'white'} />
							</Box3>
						</Flex>
					</SandWhichContainer>
					<Flex align={'center'} justify={'space-around'} direction={'column'}>
						<PDLogo style={{ backgroundImage: 'url(./logos/pd_logo.png)'}} />
						<Box1 marginTop={5}>
							<LogoCaption>Parish Digital</LogoCaption>
						</Box1>
					</Flex>
					<NavMenu>
						<ul>
							<li>About</li>
							<li>Service</li>
							<li>Work</li>
							<li>Gear</li>
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
	height: 3rem;
	width: 3rem;
	background-position: center;
	background-size: cover;

	&:hover {
		cursor: pointer;
		color: ${colors.yellow};
		transition: all .3s ease;
	}

	${respondTo.xs`
		height: 4rem;
		width: 4rem;
    `}
	
`

const LogoCaption = styled.p`
	color: #fff;
	font-size: 1rem;

	${respondTo.xs`
		font-size: 1.2rem;
    `}

	&:hover {
		cursor: pointer;
		color: ${colors.yellow};
		transition: all .3s ease;
	}
`

const NavMenu = styled.nav`
	content: none;
	display: none;

	${respondTo.lg`
		display: inline-block;
		position: absolute;
		right: 4rem;
		height: 100%;
		width: 40rem;

		ul {
			display: flex;
			height: 100%;
			align-items: center;
			justify-content: space-around;
			color: #fff;
			text-transform: uppercase;
	
			li:hover {
				cursor: pointer;
				color: ${colors.yellow};
				transition: all .3s ease;
			}
		}
	`}
`

// MENU

const SandWhichContainer = styled.div`
	position: absolute;
	top: 1.5rem;
	left: 2rem;
    width: 50px;
    height: 50px;
    background: #000;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
	justify-content: center;
    transition: all .5s ease;

    ${respondTo.xs`
		top: 1rem;
		left: 2rem;
        width: 50px;
        height: 50px;
    `}

    ${respondTo.sm`
        width: 60px;
        height: 60px;
    `}

    ${respondTo.md`
    `}

    &:hover {
		background: #fff;
        cursor: pointer;
    }

    &:focus {
		background: #fff;
        cursor: pointer;
    }

    &:active {
		background: #fff;
        cursor: pointer;
    }
`

const SandwhichLine = styled.div`
	background: ${colors.blue};

    ${props => css`
        width: ${props.width * .9}px;
        height: ${props.height * .9}px;
        margin: 0 auto;

        ${respondTo.xs`
            width: ${props.width}px;
            height: ${props.height}px;
            margin: 0 auto;
        `}
	`};
`
