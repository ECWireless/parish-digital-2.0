import Link from 'next/link'
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'
import { Box3 } from '../Boxes'
import { Button1 } from '../Buttons'
import { Flex } from '../Containers'
import { CustomLink } from '../Links'
import { H1, H4 } from '../Typography'

const Hero = ({
    heroImage,
    heroHeading,
    heroSubheading,
    heroSubheading2,
}) => {
    return (
        <WebHero>
            <HeroPhoto style={{ backgroundImage: `url(${heroImage})`}} />
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
                                href='https://vimeo.com/392027059'
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

const HeroPhoto = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: absolute;
    filter: brightness(.6);

    ${respondTo.xs`
        filter: brightness(.8);
    `}

    ${respondTo.sm`
        filter: brightness(.9);
    `}

    ${respondTo.md`
        filter: brightness(.9);
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
        margin-top: 11rem;
    `}

    ${respondTo.sm`
        margin-top: 18rem;
    `}

    ${respondTo.md`
        margin-top: 28rem;
    `}

    ${respondTo.lg`
        margin-top: 32rem;
    `}

    ${respondTo.xl`
        margin-top: 43rem;
    `}
`
