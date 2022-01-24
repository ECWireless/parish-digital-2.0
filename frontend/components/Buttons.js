import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'
import { colors, shadows } from './theme'

export const Button1 = styled.button`
  width: 13rem;
  height: 4rem;
  border: none;
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

  ${respondTo.xl`
    width: 22rem;
    height: 6rem;
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

    ${props => props.width && css`
        width: ${props.width * .7}px;
    `}

    ${respondTo.xs`
        width: 15rem;
        height: 4.5rem;
        font-size: 1.4rem;
        letter-spacing: 3px;
        margin: 0 auto;

        ${props => props.width && css`
            width: ${props.width * .8}px;
        `}
    `}

    ${respondTo.sm`
        width: 18rem;
        height: 4.5rem;
        font-size: 1.5rem;
        letter-spacing: 4px;

        ${props => props.width && css`
            width: ${props.width * .9}px;
        `}
    `}

    ${respondTo.md`
        width: 20rem;
        height: 5rem;
        font-size: 1.6rem;

        ${props => props.width && css`
            width: ${props.width}px;
        `}
    `}

    ${respondTo.xl`
        width: 22rem;
        height: 6rem;
        font-size: 1.8rem;

        ${props => props.width && css`
            width: ${props.width * 1.2}px;
        `}
    `}

    ${props => props.background && css`
        background: ${props.background};
    `}

    ${props => props.color && css`
        color: ${props.color};
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

export const Button3 = styled.button`
  border: none;
  color: ${colors.white};
  background: rgba(0,0,0,1);
  font-size: 1.2rem;
  letter-spacing: 2px;
  padding: 14px 20px;
  transition: all .3s ease;
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${respondTo.xs`
    font-size: 1.4rem;
  `}

  ${respondTo.sm`
    font-size: 1.5rem;
  `}

  ${respondTo.md`
    font-size: 1.6rem;
  `}

  ${respondTo.xl`
    font-size: 1.6rem;
  `}

  &:hover {
    background: ${colors.white};
    color: ${colors.black};
    cursor: pointer;
  }
`

export const Button4 = styled.button`
  border: none;
  color: ${colors.black};
  background: ${colors.yellow};
  font-size: 1.2rem;
  letter-spacing: 2px;
  padding: 10px 32px;
  transition: all .3s ease;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${respondTo.xs`
    font-size: 1.4rem;
  `}

  ${respondTo.sm`
    font-size: 1.5rem;
  `}

  ${respondTo.md`
    font-size: 1.6rem;
  `}

  &:hover {
    background: ${colors.white};
    color: ${colors.black};
    cursor: pointer;
  }
`

export const Button5 = styled.button`
  border: none;
  color: ${colors.white};
  background: rgba(0,0,0,.5);
  border: '1px solid #707070';
  font-size: 1.2rem;
  letter-spacing: 2px;
  padding: 14px 20px;
  transition: all .3s ease;
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${respondTo.xs`
    font-size: 1.4rem;
  `}

  ${respondTo.sm`
    font-size: 1.5rem;
  `}

  ${respondTo.md`
    font-size: 1.6rem;
  `}

  ${respondTo.xl`
    font-size: 1.6rem;
  `}

  &:hover {
    background: ${colors.white};
    color: ${colors.black};
    cursor: pointer;
  }
`
