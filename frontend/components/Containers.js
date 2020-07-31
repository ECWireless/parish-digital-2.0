import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

export const Container = styled.div`
    position: relative;
    width: 280px;
    margin: auto;

    ${respondTo.xs`
        width: 400px;
    `}
    
    ${respondTo.sm`
        width: 600px;
    `}

    ${respondTo.md`
        width: 800px;
    `}

    ${respondTo.lg`
        width: 1200px;
    `}
`

export const Col2 = styled.div`
    ${props => css`
        display: flex;
        flex-direction: column;

        ${respondTo.xs`
        `}
        
        ${respondTo.sm`
        `}

        ${respondTo.md`
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        `}

        ${respondTo.lg`
        `}
    `}
`

export const Col2Left = styled.div`
    ${props => css`
        display: flex;
        flex-direction: column;
        align-items: ${props.align};
        justify-content: ${props.justify};

        ${respondTo.xs`
        `}
        
        ${respondTo.sm`
        `}

        ${respondTo.md`
            grid-column: 1 / 2;
        `}

        ${respondTo.lg`
        `}
    `}
`

export const Col2Right = styled.div`
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;

    ${props => css`
        align-items: ${props.align};
        justify-content: ${props.justify};
    `}
`

export const Flex = styled.div`
    display: flex;

    ${props => css`
        justify-content: ${props.justify};
        align-items: ${props.align};
        flex-wrap: ${props.wrap};
        flex-direction: ${props.direction};
        height: ${props.height};
    `}

    ${props => props.respond && css`
        flex-direction: column;

        ${respondTo.lg`
            flex-direction: row;
        `}
    `}

    ${props => props.respondFlip && css`
        flex-direction: column-reverse;

        ${respondTo.lg`
            flex-direction: row;
        `}
    `}
`
