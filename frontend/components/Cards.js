import styled from 'styled-components'
import respondTo from './Breakpoints'
import { colors, shadows } from './theme'

export const Card1 = styled.div`
    background: ${colors.white};
    width: 100%;
    box-shadow: ${shadows.card};
    padding: 4rem;
`