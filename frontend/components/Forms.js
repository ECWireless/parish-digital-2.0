import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

// Components
import { colors } from './theme'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;

    ${respondTo.sm`
        width: 90%;
    `}

    ${respondTo.md`
        width: 80%;
    `}

    ${respondTo.lg`
        width: 60%;
    `}
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
    padding: 0 1rem;

    font-size: 1.6rem;
    line-height: 20px;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: .5px;
    outline: none;
    border: 1px solid transparent;
    transition: all .3s ease;

    &:hover {
        border: 1px solid ${colors.yellow};
    }

    &:active,
    &:focus {
        border: 1px solid ${colors.yellow};
        border-left: 5px solid ${colors.yellow};
    }

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

export const TextArea = styled.textarea`
    height: 10rem;
    border-radius: 5px;
    padding: 1rem;

    font-size: 1.6rem;
    line-height: 20px;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: .5px;
    outline: none;
    border: 1px solid transparent;
    transition: all .3s ease;

    &:hover {
        border: 1px solid ${colors.yellow};
    }

    &:active,
    &:focus {
        border: 1px solid ${colors.yellow};
        border-left: 5px solid ${colors.yellow};
    }

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
