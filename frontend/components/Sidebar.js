import { useRouter } from 'next/router'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'

// Components
import { Flex } from './Containers'
import { P2 } from './Typography'
import { colors, shadows } from './theme'

const Sidebar = ({ sidebar, setSidebar }) => {
    const router = useRouter()
    
    return (
        <SidebarContainer open={sidebar}>
            <SidebarTop>
                <Flex style={{height: '100%'}} align={'center'} justify={'space-around'}>
                    <P2 style={{letterSpacing: '1px'}} uppercase color={colors.blue}>Parish Digital</P2>
                    <CloseContainer onClick={() => setSidebar(false)}>
                        <p>&times;</p>
                    </CloseContainer>
                </Flex>
            </SidebarTop>
            <Link href="/">
                <SidebarOption onClick={() => setSidebar(false)} active={router.pathname === '/' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <svg style={{marginLeft: '3rem', marginRight: '4rem'}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                            <title>Home</title>
                            <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
                        </svg>

                        <P2>Home</P2>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="/about">
                <SidebarOption onClick={() => setSidebar(false)} active={router.pathname === '/about' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <svg style={{marginLeft: '3rem', marginRight: '4rem'}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 36 32">
                            <title>About</title>
                            <path d="M24 24.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
                            <path d="M10.225 24.854c1.728-1.13 3.877-1.989 6.243-2.513-0.47-0.556-0.897-1.176-1.265-1.844-0.95-1.726-1.453-3.627-1.453-5.497 0-2.689 0-5.228 0.956-7.305 0.928-2.016 2.598-3.265 4.976-3.734-0.529-2.39-1.936-3.961-5.682-3.961-6 0-6 4.029-6 9 0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h8.719c0.454-0.403 0.956-0.787 1.506-1.146z"></path>
                        </svg>
                        <P2>About</P2>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="/service">
                <SidebarOption onClick={() => setSidebar(false)} active={router.pathname === '/service' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <svg style={{marginLeft: '3rem', marginRight: '4rem'}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                            <title>Services</title>
                            <path d="M30 8h-8v-2c0-1.1-0.9-2-2-2h-8c-1.1 0-2 0.9-2 2v2h-8c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM12 6.004c0.001-0.001 0.002-0.003 0.004-0.004h7.993c0.001 0.001 0.003 0.002 0.004 0.004v1.996h-8v-1.996zM30 16h-4v3c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-3h-12v3c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-3h-4v-2h28v2z"></path>
                        </svg>
                        <P2>Service</P2>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="/virtual">
                <SidebarOption onClick={() => setSidebar(false)} active={router.pathname === '/virtual' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <svg style={{marginLeft: '3rem', marginRight: '4rem'}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                            <title>Virtual</title>
                            <path d="M32 16c0-8.837-7.163-16-16-16s-16 7.163-16 16c0 6.877 4.339 12.739 10.428 15.002l-0.428 0.998h12l-0.428-0.998c6.089-2.263 10.428-8.125 10.428-15.002zM15.212 19.838c-0.713-0.306-1.212-1.014-1.212-1.838 0-1.105 0.895-2 2-2s2 0.895 2 2c0 0.825-0.499 1.533-1.212 1.839l-0.788-1.839-0.788 1.838zM16.821 19.915c1.815-0.379 3.179-1.988 3.179-3.915 0-2.209-1.791-4-4-4s-4 1.791-4 4c0 1.928 1.364 3.535 3.18 3.913l-2.332 5.441c-2.851-1.223-4.848-4.056-4.848-7.355 0-4.418 3.582-8.375 8-8.375s8 3.957 8 8.375c0 3.299-1.997 6.131-4.848 7.355l-2.331-5.439zM21.514 30.866l-2.31-5.39c3.951-1.336 6.796-5.073 6.796-9.476 0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.402 2.845 8.14 6.796 9.476l-2.31 5.39c-4.987-2.14-8.481-7.095-8.481-12.866 0-7.729 6.266-14.37 13.995-14.37s13.995 6.641 13.995 14.37c0 5.771-3.494 10.726-8.481 12.866z"></path>
                        </svg>
                        <P2>Virtual</P2>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="/work">
                <SidebarOption onClick={() => setSidebar(false)} active={router.pathname === '/work' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <svg style={{marginLeft: '3rem', marginRight: '4rem'}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                            <title>Work</title>
                            <path d="M0 4v24h32v-24h-32zM6 26h-4v-4h4v4zM6 18h-4v-4h4v4zM6 10h-4v-4h4v4zM24 26h-16v-20h16v20zM30 26h-4v-4h4v4zM30 18h-4v-4h4v4zM30 10h-4v-4h4v4zM12 10v12l8-6z"></path>
                        </svg>
                        <P2>Work</P2>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="/gear">
                <SidebarOption onClick={() => setSidebar(false)} active={router.pathname === '/gear' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <svg style={{marginLeft: '3rem', marginRight: '4rem'}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                            <title>Gear</title>
                            <path d="M12 9c0-2.761 2.239-5 5-5s5 2.239 5 5c0 2.761-2.239 5-5 5s-5-2.239-5-5zM0 9c0-2.761 2.239-5 5-5s5 2.239 5 5c0 2.761-2.239 5-5 5s-5-2.239-5-5zM24 19v-3c0-1.1-0.9-2-2-2h-20c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2v-3l8 5v-14l-8 5zM20 24h-16v-6h16v6z"></path>
                        </svg>
                        <P2>Gear</P2>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="/contact">
                <SidebarOption onClick={() => setSidebar(false)} active={router.pathname === '/contact' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <svg style={{marginLeft: '3rem', marginRight: '4rem'}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                            <title>Contact</title>
                            <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
                        </svg>
                        <P2>Contact</P2>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="/login">
                <SidebarOption onClick={() => setSidebar(false)} active={router.pathname === '/login' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                    <svg style={{marginLeft: '3rem', marginRight: '4rem'}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                        <title>enter</title>
                        <path d="M12 16h-10v-4h10v-4l6 6-6 6zM32 0v26l-12 6v-6h-12v-8h2v6h10v-18l8-4h-18v8h-2v-10z"></path>
                    </svg>
                        <P2>Login</P2>
                    </Flex>
                </SidebarOption>
            </Link>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 25rem;
	height: 100vh;
	background: ${colors.grey};
	z-index: 1000;
	box-shadow: ${shadows.sidebar};
	transform: translateX(-30rem);
    transition: all .5s ease;

    ${respondTo.xl`
        width: 35rem;
        transform: translateX(-40rem);

        ${props => props.open && css`
            transform: translateX(0rem);
            box-shadow: none;
        `}
    `}

	${props => props.open && css`
		transform: translateX(0rem);
        box-shadow: none;
    `}
`

const SidebarTop = styled.div`
	height: 8rem;
	width: 100%;
    border-bottom: solid 1px rgba(117, 117, 117, .2);
    
    ${respondTo.xl`
	    height: 10rem;
    `}
`

const CloseContainer = styled.div`
    width: 50px;
    height: 50px;
    background: #FFF;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
	justify-content: center;
	transition: all .5s ease;
    position: relative;
	
	p {
        position: absolute;
		color: #000;
		font-size: 7rem;
        font-weight: 100;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -51%);
        padding: 0;
        margin: 0;
	}

	&:hover {
		p {
            color: #FFF;
		}
	}

    ${respondTo.xs`
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
		background: #000;
        cursor: pointer;
    }

    &:focus {
		background: #000;
        cursor: pointer;
    }

    &:active {
		background: #000;
        cursor: pointer;
    }
`

const SidebarOption = styled.div`
    height: 6rem;
    border-bottom: solid 1px rgba(117, 117, 117, .2);
    border-right: 5px solid transparent;
    transition: all .3s ease;

    ${respondTo.xl`
	    height: 7.5rem;
    `}
    
    &:hover {
        cursor: pointer;
        background: #EFEFEF;
    }

    ${props => props.active && css`
        border-right: 5px solid ${colors.blue};
        background: #EFEFEF;
    `}
`
