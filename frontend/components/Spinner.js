import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

// Components
import { colors } from './theme'

export default function Spinner(props) {
    return (
        <LDSRing color={props.color}><div></div><div></div><div></div><div></div></LDSRing>
    )
}

const LDSRing = styled.div`
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;

    ${respondTo.xs`
        width: 50px;
        height: 50px;
    `}

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 28px;
        height: 28px;
        margin: 8px;
        border: 3px solid ${colors.blue};
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${colors.blue} transparent transparent transparent;

        ${props => props.color && css`
            border: 3px solid ${props.color};
            border-color: ${props.color} transparent transparent transparent;
        `}

        ${respondTo.xs`
            width: 35px;
            height: 35px;
        `}
    }

    div:nth-child(1) {
        animation-delay: -0.45s;
    }

    div:nth-child(2) {
        animation-delay: -0.3s;
    }

    div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    }
`
  