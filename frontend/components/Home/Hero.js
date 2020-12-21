import Link from 'next/link'
import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'
import { Box3 } from '../Boxes'
import { Button1 } from '../Buttons'
import { Flex } from '../Containers'
import { CustomLink } from '../Links'

const Hero = ({
    heroImage,
    heroDemoReelLink,
    heroHeading,
    heroSubheading,
    heroSubheading2,
}) => {
    return (
        <WebHero>
            {/* <HeroPhoto style={{ backgroundImage: `url(${heroImage})`}} /> */}
            <HeroVideo autoPlay loop muted playsInline>
                <source src='/PD_Hero_Video.mp4' type="video/mp4" />
            </HeroVideo>
            <HeroContainer>
                <TexContainer>
                    <Fade bottom ssrFadeout>
                        <H4 style={{textShadow: '0 5px 20px rgba(0,0,0,1'}} color={colors.white} center uppercase>
                            {heroSubheading2}
                        </H4>
                    </Fade>
                    <Fade bottom ssrFadeout>
                        <Box3 marginTop={30}>
                            <H1 style={{textShadow: '0 5px 20px rgba(0,0,0,1'}} color={colors.white} center uppercase>
                                {heroHeading}
                            </H1>
                        </Box3>
                    </Fade>
                    <Fade delay={200} bottom ssrFadeout>
                        <Box3 marginTop={30}>
                            <H4 style={{textShadow: '0 5px 20px rgba(0,0,0,1'}} color={colors.white} center>
                                {heroSubheading}
                            </H4>
                        </Box3>
                    </Fade>
                    <div style={{ marginTop: '4rem'}}>
                        <Flex align={'center'} justify={'center'}>
                            <Link href='/contact'>
                                <Button1>
                                    Get a Quote
                                </Button1>
                            </Link>
                            <CustomLink
                                href={heroDemoReelLink}
                                target='_blank' rel='noopener noreferrer'
                                title='Vimeo Portfolio'
                            >
                                <Button1>
                                    Demo Reel
                                </Button1>
                            </CustomLink>
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
        height: 50rem;
    `}

    ${respondTo.md`
        height: 60rem;
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

// const HeroPhoto = styled.div`
//     width: 100%;
//     height: 100%;
//     background-size: cover;
//     background-position: center;
//     position: absolute;
//     filter: brightness(.6);

//     ${respondTo.xs`
//         filter: brightness(.8);
//     `}

//     ${respondTo.sm`
//         filter: brightness(.9);
//     `}

//     ${respondTo.md`
//         filter: brightness(.9);
//     `}
// `

const HeroContainer = styled(Flex)`
    position: relative;
    top: 0;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const TexContainer = styled.div`
    margin-top: 8rem;

    ${respondTo.xs`
        margin-top: 8rem;
    `}

    ${respondTo.sm`
        margin-top: 12rem;
    `}

    ${respondTo.md`
        margin-top: 15rem;
    `}

    ${respondTo.lg`
        margin-top: 20rem;
    `}

    ${respondTo.xl`
        margin-top: 32rem;
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

    ${respondTo.xl`
        font-size: 8.5rem;
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
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 1px;

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

    ${respondTo.xl`
        font-size: 3.2rem;
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
