import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

export const Line = styled.div`
    ${props => css`
        width: ${props.width * .6}px;
        height: ${props.height * .6}px;
        margin: 0 auto;

        ${respondTo.xs`
            height: ${props.height}px;
            width: ${props.width * .6}px;
        `}
        
        ${respondTo.sm`
            width: ${props.width * .8}px;
        `}

        ${respondTo.md`
            width: ${props.width}px;
        `}

        ${respondTo.lg`
        `}
    `};

    ${props => props.color === 'yellow' && css`
        background: #FAF30E;
    `};

    ${props => props.color === 'blue' && css`
        background: #1062AD;
    `};

    ${props => props.color === 'white' && css`
        background: #FFF;
    `};
`
