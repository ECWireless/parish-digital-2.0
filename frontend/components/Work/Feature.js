import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import styled from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors, shadows } from '../theme'
import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
import { Line } from '../Lines'
import { H3, P1, P4 } from '../Typography'
import { LazyIframe } from '../LazyIframe';

const Features = ({
    featureHeading,
    featureSubheading,
    featureParagraph1,
    featureParagraph2,
    featureLink,
}) => {
    return (
        <FeaturesBackground>
            <Container>
                <Box3 paddingTop={75} paddingBottom={75}>
                    <Flex align={'center'} respondFlip>
                        <LazyIframe>
                            <FeatureVideo
                                src={featureLink}
                                frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                            />
                        </LazyIframe>
                        <Link href='/service'>
                            <DescriptionBox>
                                <Flex direction={'column'} align={'center'} justify={'center'}>
                                    <Box3 marginTop={50}>
                                        <P1 style={{letterSpacing: '5px'}} color={colors.white} uppercase center>
                                            {featureHeading}
                                        </P1>
                                    </Box3>
                                    <Box3 marginTop={25}>
                                        <H3 style={{ fontWeight: 700 }} color={colors.white} uppercase center>
                                            {featureSubheading}
                                        </H3>
                                    </Box3>
                                    <Fade ssrFadeout>
                                        <Box3 marginTop={15}>
                                            <Line height={5} width={100} color={colors.yellow} />
                                        </Box3>
                                    </Fade>
                                    <Fade bottom ssrFadeout>
                                        <Box3 style={{ margin: '0 atuo' }} width={450} marginTop={15}>
                                            <P4 color={colors.white}>
                                                {featureParagraph1}
                                            </P4>
                                        </Box3>
                                    </Fade>
                                    <Fade bottom delay={200} ssrFadeout>
                                        <Box3 style={{ margin: '0 atuo' }} width={450} marginTop={15} marginBottom={50}>
                                            <P4 color={colors.white}>
                                                {featureParagraph2}
                                            </P4>
                                        </Box3>
                                    </Fade>
                                </Flex>
                            </DescriptionBox>
                        </Link>
                    </Flex>
                </Box3>
            </Container>
        </FeaturesBackground>
    )
}

export default Features

const FeaturesBackground = styled.div`
    width: 100%;
    background: ${colors.blue};
`

const FeatureVideo = styled.iframe`
    width: 28rem;
    height: 16rem;
    box-shadow: ${shadows.card};

    ${respondTo.xs`
        width: 40rem;
        height: 23rem;
    `}

    ${respondTo.sm`
        width: 65rem;
        height: 37rem;
    `}

    ${respondTo.xl`
        width: 90rem;
        height: 51rem;
    `}
`

const DescriptionBox = styled.div`
    width: 26rem;
    background: rgba(0,0,0,.5);

    &:hover {
        cursor: pointer;
    }

    ${respondTo.xs`
        width: 35rem;
    `}

    ${respondTo.sm`
        width: 55rem;
    `}

    ${respondTo.xl`
        width: 90rem;
    `}
`
