import styled from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { Box3 } from '../Boxes'
import { Button1 } from '../Buttons'
import { Flex } from '../Containers'
import { H1, H4 } from '../Typography'
import { colors } from '../theme'

const Hero = () => {
    return (
        <WebHero>
            <HeroPhoto />
            <HeroContainer>
                <Box3>
                    <H1 style={{textShadow: '0 5px 20px rgba(0,0,0,1'}} color={colors.white} center uppercase>
                        Your Partner in Video
                    </H1>
                    <Box3 marginTop={20}>
                        <H4 style={{textShadow: '0 5px 20px rgba(0,0,0,1'}} color={colors.white} center>Our focus is video for business</H4>
                    </Box3>
                    <div style={{ marginTop: '4rem'}}>
                        <Flex align={'center'} justify={'center'}>
                            <Button1>Get a Quote</Button1>
                            <Button1>Demo Reel</Button1>
                        </Flex>
                    </div>
                </Box3>
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
`

const HeroPhoto = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(./photos/hero/web-hero.jpg);
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
        filter: brightness(1);
    `}
`

const HeroContainer = styled(Flex)`
    position: relative;
    top: 10rem;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    ${respondTo.xs`
        top: 15rem;
    `}

    ${respondTo.sm`
        top: 18rem;
    `}

    ${respondTo.md`
        top: 25rem;
    `}

    ${respondTo.lg`
        top: 38rem;
    `}
`
