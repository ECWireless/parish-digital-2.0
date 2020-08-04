import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'

export const H1 = styled.h1`
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 20px;

    ${respondTo.xs`
        font-size: 4rem;
    `}

    ${respondTo.sm`
        font-size: 5.5rem;
    `}

    ${respondTo.md`
        font-size: 6.5rem;
    `}

    ${respondTo.lg`
        font-size: 7.5rem;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}


    ${props => css`
        color: ${props.color}
    `}
`

export const H2 = styled.h2`
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 20px;

    ${respondTo.xs`
        font-size: 3.5rem;
    `}

    ${respondTo.sm`
        font-size: 4rem;
    `}

    ${respondTo.md`
        font-size: 4.5rem;
    `}

    ${respondTo.lg`
        font-size: 5rem;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}


    ${props => css`
        color: ${props.color}
    `}
`

export const H3 = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    line-height: 25px;

    ${respondTo.xs`
        font-size: 2.2rem;
    `}

    ${respondTo.sm`
        font-size: 2.6rem;
    `}

    ${respondTo.md`
        font-size: 3rem;
    `}

    ${respondTo.lg`
        font-size: 3.5rem;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => css`
        color: ${props.color}
    `}
`

export const H4 = styled.h4`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 20px;

    ${respondTo.xs`
        font-size: 1.8rem;
    `}

    ${respondTo.sm`
        font-size: 2rem;
    `}

    ${respondTo.md`
        font-size: 2.2rem;
    `}

    ${respondTo.lg`
        font-size: 2.5rem;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}


    ${props => css`
        color: ${props.color}
    `}
`

export const P1 = styled.p`
    font-size: 1.4rem;
    line-height: 20px;

    ${respondTo.xs`
        font-size: 1.6rem;
    `}

    ${respondTo.sm`
        font-size: 1.8rem;
    `}

    ${respondTo.md`
        font-size: 2rem;
    `}

    ${respondTo.lg`
        font-size: 2.2rem;
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

export const P2 = styled.p`
    font-size: 1.6rem;
    line-height: 20px;

    ${respondTo.sm`
        font-size: 1.8rem;
    `}

    ${respondTo.md`
        font-size: 2rem;
    `}

    ${respondTo.lg`
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

export const P3 = styled.p`
    font-size: 1.8rem;
    line-height: 20px;

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

export const P4 = styled.p`
    font-size: 1.4rem;
    line-height: 20px;

    ${respondTo.xs`
    `}

    ${respondTo.sm`
        font-size: 1.5rem;
    `}

    ${respondTo.md`
        font-size: 1.6rem;
    `}

    ${respondTo.lg`
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => css`
        color: ${props.color}
    `}
`
