import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors, shadows } from '../theme'
import { Box3 } from '../Boxes'
import { Card2 } from '../Cards'
import { Container, Flex } from '../Containers'
import { Line } from '../Lines'
import { H3, P2 } from '../Typography'

const Examples = ({
    exampleHeading,
    exampleParagraph,
    example1Link,
    example2Link,
    example3Link,
    example4Link,
    example5Link,
    example6Link,
    example7Link,
}) => {
    return (
        <ExamplesBackground>
            <Container>
                <Flex align={'center'} justify={'space-between'} respond>
                    <Box3 marginTop={50} marginBottom={25}>
                        <CardContainer>
                            <Card2 style={{height: '100%'}}>
                                <Flex style={{height: '100%'}} direction={'column'} align={'center'} justify={'center'}>
                                    <H3 center color={colors.white}>
                                        {exampleHeading}
                                    </H3>
                                    <Fade ssrFadeout>
                                        <Box3 marginTop={25} marginBottom={25}>
                                            <Line height={5} width={100} color={colors.yellow} />
                                        </Box3>
                                    </Fade>
                                    <Fade bottom ssrFadeout>
                                        <P2 center color={colors.white}>
                                            {exampleParagraph}
                                        </P2>
                                    </Fade>
                                </Flex>
                            </Card2>
                        </CardContainer>
                    </Box3>
                    <Fade ssrFadeout>
                        <Box3 marginTop={50} marginBottom={25}>
                            <CardContainer>
                                <ExampleVideo
                                    src={example1Link}
                                    frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                                />
                            </CardContainer>
                    </Box3>
                    </Fade>
                </Flex>
                <Flex align={'center'} justify={'space-between'} respond>
                    <Fade ssrFadeout>
                        <Box3 marginBottom={25}>
                            <CardContainer>
                                <ExampleVideo
                                    src={example2Link}
                                    frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                                />
                            </CardContainer>
                        </Box3>
                    </Fade>
                    <Fade delay={200} ssrFadeout>
                        <Box3 marginBottom={25}>
                            <CardContainer>
                                <ExampleVideo
                                    src={example3Link}
                                    frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                                />
                            </CardContainer>
                        </Box3>
                    </Fade>
                </Flex>
                <Flex align={'center'} justify={'space-between'} respond>
                    <Fade ssrFadeout>
                        <Box3 marginBottom={25}>
                            <CardContainer>
                                <ExampleVideo
                                    src={example4Link}
                                    frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                                />
                            </CardContainer>
                        </Box3>
                    </Fade>
                    <Fade delay={200} ssrFadeout>
                        <Box3 marginBottom={25}>
                            <CardContainer>
                                <ExampleVideo
                                    src={example5Link}
                                    frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                                />
                            </CardContainer>
                        </Box3>
                    </Fade>
                </Flex>
                <Flex align={'center'} justify={'space-between'} respond>
                    <Fade ssrFadeout>
                        <Box3 marginBottom={50}>
                            <CardContainer>
                                <ExampleVideo
                                    src={example6Link}
                                    frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                                />
                            </CardContainer>
                        </Box3>
                    </Fade>
                    <Fade delay={200} ssrFadeout>
                        <Box3 marginBottom={50}>
                            <CardContainer>
                                <ExampleVideo
                                    src={example7Link}
                                    frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                                />
                            </CardContainer>
                        </Box3>
                    </Fade>
                </Flex>
            </Container>
        </ExamplesBackground>
    )
}

export default Examples

const ExamplesBackground = styled.div`
    width: 100%;
    background: ${colors.blue};
`

const CardContainer = styled.div`
    width: 30rem;
    height: 17rem;

    ${respondTo.xs`
        width: 40rem;
        height: 23rem;
    `}

    ${respondTo.sm`
        width: 59rem;
        height: 34rem;
    `}

    ${respondTo.xl`
        width: 88rem;
        height: 50rem;
    `}
`

const ExampleVideo = styled.iframe`
    height: 100%;
    width: 100%;
`
