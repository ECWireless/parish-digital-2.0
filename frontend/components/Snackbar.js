import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'
import Fade from 'react-reveal/Fade'

// Components
import { colors, shadows } from './theme'
import { P3 } from './Typography'

export default function Snackbar(props) {
    return (
        <SnackbarPosition>
            <Fade bottom ssrFadeout>
                <SnackbarContainer success={props.success}>
                    <P3 color={colors.white}>{props.success ? 'Message sent!' : 'Message failed to send.'}</P3>
                    <SnackbarCloseContainer onClick={props.onCloseSnackbar}>
                        <CloseIcon>&#10005;</CloseIcon>
                    </SnackbarCloseContainer>
                </SnackbarContainer>
            </Fade>
        </SnackbarPosition>
    )
}

const SnackbarPosition = styled.div`
    position: fixed;
    bottom: 10px;
    left: 20px;
    height: 60px;
    width: 200px;
    z-index: 1001;

    ${respondTo.sm`
        bottom: 20px;
        height: 70px;
        width: 250px;
    `}

    ${respondTo.md`
        bottom: 30px;
        left: 30px;
    `}
`

const SnackbarContainer = styled.div`
    height: 60px;
    width: 200px;
    border-radius: 10px;
    box-shadow: ${shadows.sidebar};
    padding: 0 10px 0 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${respondTo.sm`
        height: 70px;
        width: 280px;
    `}

    ${props => props.success && css`
        background: #03d303;
    `}

    ${props => !props.success && css`
        background: #e90505;
    `}
`

const SnackbarCloseContainer = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-left: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;

    &:hover,
    &:focus,
    &:active {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.2);
    }
`

const CloseIcon = styled.p`
    color: #fff;
    font-weight: bold;
    font-size: 20px;

    ${respondTo.sm`
        font-size: 24px;
    `}
`
