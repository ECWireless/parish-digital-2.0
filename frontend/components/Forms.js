import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

// Components
import { colors } from './theme'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
`

export const Label = styled.label`
    font-size: 1.6rem;
    line-height: 20px;
    letter-spacing: .5px;

    ${respondTo.sm`
        font-size: 1.8rem;
    `}

    ${respondTo.md`
        font-size: 2rem;
    `}

    ${respondTo.xl`
        font-size: 2.6rem;
        line-height: 30px;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => css`
        color: ${props.color}
    `}
`

export const Input = styled.input`
    height: 5rem;
    border-radius: 5px;
    border: none;
`

export const TextArea = styled.textarea`
    height: 10rem;
    border-radius: 5px;
    border: none;
`
