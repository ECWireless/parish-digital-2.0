import { useRouter } from 'next/router'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

// Components
import { Box1, Box3 } from './Boxes'
import { Flex } from './Containers'
import { colors } from './theme'

const Navigation = ({ setSidebar }) => {
	const router = useRouter()
    
	return (
		<NavBar>
			<Flex style={{ height: '100%', width: '100%' }} align={'center'} justify={'center'}>
					<SandWhichContainer onClick={() => setSidebar(true)}>
						<Flex direction={'column'} justify={'space-between'}>
							<Box3>
								<SandwhichLine width={40} height={3} color={'white'} />
							</Box3>
							<Box3 marginTop={12}>
								<SandwhichLine width={40} height={3} color={'white'} />
							</Box3>
							<Box3 marginTop={12}>
								<SandwhichLine width={40} height={3} color={'white'} />
							</Box3>
						</Flex>
					</SandWhichContainer>
					<Link href="/" style={{ textDecoration: 'none'}}>
						<Flex align={'center'} justify={'space-around'} direction={'column'}>
							<PDLogo style={{ backgroundImage: 'url(/logos/pd_logo.png)'}} />
							<Box1 marginTop={5}>
								<LogoCaption>Parish Digital</LogoCaption>
							</Box1>
						</Flex>
					</Link>
					<NavMenu>
						<ul>
							<Link href="/work" style={{ textDecoration: 'none'}}>
								<NavItem active={router.pathname === '/work' ? true : false}>Work</NavItem>
							</Link>
							<Link href="/services" style={{ textDecoration: 'none'}}>
								<NavItem active={router.pathname === '/services' ? true : false}>Services</NavItem>
							</Link>
							<Link href="/gear" style={{ textDecoration: 'none'}}>
								<NavItem active={router.pathname === '/gear' ? true : false}>Gear</NavItem>
							</Link>
							<Link href="/about" style={{ textDecoration: 'none'}}>
								<NavItem active={router.pathname === '/about' ? true : false}>About</NavItem>
							</Link>
							<Link href="/blog" style={{ textDecoration: 'none'}}>
								<NavItem active={router.pathname === '/blog' ? true : false}>Blog</NavItem>
							</Link>
							<Link href="/contact" style={{ textDecoration: 'none'}}>
								<NavItem active={router.pathname === '/contact' ? true : false}>Contact</NavItem>
							</Link>
						</ul>
				</NavMenu>
			</Flex>
		</NavBar>
	)
}

export default Navigation

const NavBar = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	height: 8rem;
    background: #000;
    z-index: 100;

    ${respondTo.xs`
        height: 10rem;
    `}
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
		height: 5rem;
		width: 5rem;
    `}
`

const LogoCaption = styled.p`
	color: #fff;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0;
    margin: 0;

	${respondTo.xs`
		font-size: 1.3rem;
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
		width: 50rem;

		ul {
			display: flex;
			height: 100%;
			align-items: center;
			justify-content: space-around;
			color: #fff;
            text-transform: uppercase;
		}
	`}
`

const NavItem = styled.li`
		color: #fff;
    font-size: 1.5rem;
    letter-spacing: 1px;

    ${props => props.active && css`
        color: ${colors.yellow};
    `}

    &:hover {
        cursor: pointer;
        color: ${colors.yellow};
        transition: all .3s ease;
    }
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
		top: 1.5rem;
		left: 2rem;
        width: 50px;
        height: 50px;
    `}

    ${respondTo.sm`
        top: 2rem;
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
