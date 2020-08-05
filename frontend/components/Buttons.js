import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'
import { colors, shadows } from './theme'

export const Button1 = styled.button`
    width: 13rem;
    height: 4rem;
    border: 2px solid ${colors.white};
    color: ${colors.white};
    background: rgba(0,0,0,.5);
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 2px;
    transition: all .3s ease;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${respondTo.xs`
        width: 15rem;
        height: 4.5rem;
        font-size: 1.4rem;
        letter-spacing: 3px;
    `}

    ${respondTo.sm`
        width: 18rem;
        height: 4.5rem;
        font-size: 1.5rem;
        letter-spacing: 4px;
    `}

    ${respondTo.md`
        width: 20rem;
        height: 5rem;
        font-size: 1.6rem;
    `}

    &:hover {
        background: ${colors.white};
        color: ${colors.black};
        cursor: pointer;
    }
`

export const Button2 = styled.button`
    width: 13rem;
    height: 4rem;
    letter-spacing: 2px;
    transition: all .3s ease;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${colors.white};
    background: ${colors.lightBlue};
    border: none;
    box-shadow: ${shadows.button};
    outline: none;

    ${respondTo.xs`
        width: 15rem;
        height: 4.5rem;
        font-size: 1.4rem;
        letter-spacing: 3px;
        margin: 0 auto;
    `}

    ${respondTo.sm`
        width: 18rem;
        height: 4.5rem;
        font-size: 1.5rem;
        letter-spacing: 4px;
    `}

    ${respondTo.md`
        width: 20rem;
        height: 5rem;
        font-size: 1.6rem;
    `}

    &:hover,
    &:focus {
        cursor: pointer;
        box-shadow: ${shadows.card};
    }

    &:active {
        box-shadow: ${shadows.button};
    }
`