import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import styled from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors, shadows } from '../theme'
import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
import { Line } from '../Lines'
import { H3, P1, P3, P4 } from '../Typography'

const Features = ({
    featureHeading,
    featureSubheading,
    featureParagraph,
    featureButton,
    featurePhoto,
}) => {
    return (
        <FeaturesBackground>
            <Container>
                <Box3 paddingTop={75} paddingBottom={75}>
                    <Flex align={'center'} respondFlip>
                        <FeaturePhoto style={{ backgroundImage: `url(${featurePhoto})`}} />
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
                                    <Fade bottom delay={200} ssrFadeout>
                                        <Box3 style={{ margin: '0 atuo' }} width={450} marginTop={15}>
                                            <P4 color={colors.white}>
                                                {featureParagraph}
                                            </P4>
                                        </Box3>
                                    </Fade>
                                    <Fade bottom delay={400} ssrFadeout>
                                        <Box3 marginTop={25} marginBottom={50}>
                                            <P3 color={colors.yellow} uppercase center>
                                                {featureButton}
                                            </P3>
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

const FeaturePhoto = styled.div`
    width: 28rem;
    height: 18rem;
    background-position: center;
    background-size: cover;
    box-shadow: ${shadows.card};

    ${respondTo.xs`
        width: 40rem;
        height: 25rem;
    `}

    ${respondTo.sm`
        width: 65rem;
        height: 40rem;
    `}

    ${respondTo.xl`
        width: 90rem;
        height: 50rem;
    `}
`

const DescriptionBox = styled.div`
    width: 24rem;
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
