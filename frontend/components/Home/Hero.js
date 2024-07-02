// import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

import { colors } from '../theme'
import { Box3 } from '../Boxes'
import { Button1 } from '../Buttons'
import { Flex } from '../Containers'
// import { CustomLink } from '../Links'

const Hero = ({
  heroHeading,
  heroSubheading,
  heroSubheading2,
  setModalOpen,
}) => {
  return (
    <WebHero>
      {/* <HeroPhoto style={{ backgroundImage: `url(${heroImage})`}} /> */}
      <HeroVideo autoPlay loop muted playsInline>
        <source src='https://arweave.net/zylbPfX-DIsUH23RiKUpmjIMp3pbUzaWmCLx4NJFo3I' type="video/mp4" />
      </HeroVideo>
      <HeroContainer>
        <TexContainer>
            <H4 style={{ textShadow: '0 3px 6px rgba(0,0,0,1)' }} color={colors.white} center>
              {heroSubheading2}
            </H4>
            <Box3 marginTop={50}>
              <H1 style={{ textShadow: '0 10px 20px rgba(0,0,0,1)' }} color={colors.white} center uppercase>
                {heroHeading}
              </H1>
            </Box3>
          {/* <Fade delay={200} bottom ssrFadeout>
            <Box3 marginTop={50}>
              <H4 style={{ textShadow: '0 5px 20px rgba(0,0,0,1)' }} color={colors.white} center>
                {heroSubheading}
              </H4>
            </Box3>
          </Fade> */}
          <div style={{ marginTop: '4rem'}}>
            <Flex align={'center'} justify={'center'}>
              {/* <CustomLink
                href={heroDemoReelLink}
                target='_blank' rel='noopener noreferrer'
                title='Vimeo Portfolio'
              > */}
                <Button1 onClick={() => setModalOpen(true)}>
                  Demo Reel
                </Button1>
              {/* </CustomLink> */}
            </Flex>
          </div>
        </TexContainer>
      </HeroContainer>
    </WebHero>
  )
}

export default Hero

const WebHero =  styled.div`
    width: 100%;
    height: 45rem;
    position: relative;
    overflow: hidden;

    ${respondTo.xs`
        height: 45rem;
    `}

    ${respondTo.sm`
        height: 560px;
    `}

    ${respondTo.md`
        height: 600px;
    `}

    ${respondTo.lg`
        height: 70rem;
    `}

    ${respondTo.xl`
        height: 90rem;
    `}
`

const HeroVideo = styled.video`
  height: 100%;
  width: auto;
  position: absolute;
  top: 0;
  filter: brightness(.5);

  animation-name: fade;
  animation-duration: 2s;
  animation-iteration-count: 1;

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  ${respondTo.md`
    width: 100%;
    height: auto;
  `}
`

const HeroContainer = styled(Flex)`
  position: relative;
  top: 0;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const TexContainer = styled.div`
  margin-top: 10rem;

  ${respondTo.xs`
    margin-top: 14rem;
  `}

  ${respondTo.sm`
    margin-top: 20rem;
  `}

  ${respondTo.md`
    margin-top: 28rem;
  `}

  ${respondTo.lg`
    margin-top: 34rem;
  `}

  ${respondTo.xl`
    margin-top: 48rem;
  `}
`

// Custom Typography
export const H1 = styled.h4`
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 4px;

    ${respondTo.xs`
        line-height: 40px;
        font-size: 4rem;
    `}

    ${respondTo.sm`
        font-size: 5.5rem;
        line-height: 40px;
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

export const H4 = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 1px;

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
