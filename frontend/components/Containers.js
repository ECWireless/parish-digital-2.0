import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

export const Container = styled.div`
    position: relative;
    width: 300px;
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

    ${respondTo.xl`
        width: 1800px;
    `}
`

export const Col2 = styled.div`
    ${props => css`
        display: flex;
        flex-direction: ${props.respondDirection ? props.respondDirection : 'column'};
        justify-content: center;

        ${respondTo.xs`
        `}
        
        ${respondTo.sm`
        `}

        ${respondTo.md`
        `}

        ${respondTo.lg`
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
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

export const Col3 = styled.div`
    ${props => css`
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 1fr 1fr 1fr;

        ${respondTo.xs`
        `}
        
        ${respondTo.sm`
        `}

        ${respondTo.md`
        `}

        ${respondTo.lg`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
        `}
    `}
`

export const Col3Left = styled.div`
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

export const Col3Middle = styled.div`
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;

    ${props => css`
        align-items: ${props.align};
        justify-content: ${props.justify};
    `}
`

export const Col3Right = styled.div`
    grid-column: 3 / 4;
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
        gap: ${props.gap ? props.gap : '0'};
        align-items: ${props.align};
        flex-wrap: ${props.wrap};
        flex-direction: ${props.direction};
        height: ${props.height};

        margin-bottom: ${props.mb ? props.mb : '0'};
        margin-top: ${props.mt ? props.mt : '0'};
        padding-bottom: ${props.pb ? props.pb : '0'};
        padding-left: ${props.pl ? props.pl : '0'};
        padding-top: ${props.pt ? props.pt : '0'};
        padding-right: ${props.pr ? props.pr : '0'};
        padding: ${props.p ? props.p : '0'};

        width: ${props.width ? props.width : 'auto'};
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
