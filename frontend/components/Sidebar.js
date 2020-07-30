import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'

// Components
import { Flex } from './Containers'
import { P2 } from './Typography'
import { colors, shadows } from './theme'

const Sidebar = ({ sidebar, setSidebar }) => {
    return (
        <SidebarContainer open={sidebar}>
            <SidebarTop>
                <Flex style={{height: '100%'}} align={'center'} justify={'space-around'}>
                    <P2>Parish Digital</P2>
                    <CloseContainer onClick={() => setSidebar(false)}>
                        <p>&times;</p>
                    </CloseContainer>
                </Flex>
            </SidebarTop>
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
	transform: translateX(-25rem);
	transition: all .5s ease;

	${props => props.open && css`
		transform: translateX(0);
	`}
`

const SidebarTop = styled.div`
	height: 8rem;
	width: 100%;
	border-bottom: solid 1px rgba(117, 117, 117, .2);
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
	
	p {
		color: #000;
		font-size: 7rem;
		margin: 0 auto 3px;
		font-weight: 100;
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
