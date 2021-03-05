import styled, { css } from 'styled-components';
import respondTo from './Breakpoints';

const Spacer = styled.div`
    min-height: 100px;
    box-sizing: border-box;

    ${props => props.size === 'xs' && css`
        min-height: 10px;

        ${respondTo.xs`
            min-height: 15px;
        `}
    `}

    ${props => props.size === 'sm' && css`
        min-height: 20px;

        ${respondTo.xs`
            min-height: 25px;
        `}
    `}

    ${props => props.size === 'md' && css`
        min-height: 25px;

        ${respondTo.xs`
            min-height: 50px;
        `}
    `}

    ${props => props.size === 'lg' && css`
        min-height: 75px;

        ${respondTo.xs`
            min-height: 100px;
        `}
    `}
`;

export default Spacer;
