import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'
import { Box2, Box3 } from '../Boxes'
import { Container } from '../Containers'
import { H2, P2 } from '../Typography'

const Banner = ({
    bannerHeading,
    bannerParagraph,
    bannerPhoto,
}) => {
    return (
        <BannerBackground>
            <Container style={{height: '100%'}}>
                <Fade bottom ssrFadeout>
                    <Box2 paddingTop={100}>
                        <H2 style={{fontWeight: 300}} uppercase color={colors.white}>
                            {bannerHeading}
                        </H2>
                    </Box2>
                </Fade>
                <Fade delay={200} bottom ssrFadeout>
                    <Box3 paddingTop={50} width={600}>
                        <P2 color={colors.white}>
                            {bannerParagraph}
                        </P2>
                    </Box3>
                </Fade>
            </Container>
            <Photo style={{backgroundImage: `url(${bannerPhoto})`}} />
        </BannerBackground>
    )
}

export default Banner

const BannerBackground = styled.div`
    position: relative;
    width: 100%;
    height: 65rem;
    background: linear-gradient(${colors.brown}, #000);

    ${respondTo.md`
        height: 80rem;
    `}

    ${respondTo.lg`
        height: 40rem;
    `}

    ${respondTo.xl`
        height: 50rem;
    `}
`

const Photo = styled.div`
    position: absolute;
    top: 40rem;
    height: 25rem;
    width: 100%;
    background-size: cover;
    background-position: center;

    ${respondTo.md`
        height: 40rem;
    `}

    ${respondTo.lg`
        top: 0;
        right: 0;
        height: 100%;
        width: 60rem;
    `}

    ${respondTo.xl`
        top: 0;
        right: 0;
        height: 100%;
        width: 80rem;
    `}
`
