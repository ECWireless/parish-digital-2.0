import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors, shadows } from '../theme'
import { Container } from '../Containers'

const Modal = ({
    open
}) => {
    return (
        <ModalBackground open={open}>
            Modal
        </ModalBackground>
    )
}

export default Modal

const ModalBackground = styled(Container)`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;
    opacity: 1;
    height: 90%;
    width: 100%;
    transform: translate(-50%, -50%) scale(1);
    background: #fff;
    box-shadow: ${shadows.sidebar};
    transition: all .3s ease;

    ${props => !props.open && css`
		z-index: -1;
		opacity: 0;
        transform: translate(-50%, -50%) scale(.8);
	`}
`
