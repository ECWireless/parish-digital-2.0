import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'
import { Box3 } from '../Boxes'
import { Card1 } from '../Cards'
import { Container, Flex } from '../Containers'
import { Line } from '../Lines'
import { H3, P4 } from '../Typography'

const Story = ({
    storyHeading1,
    storyParagraph1,
    storyParagraph2,
    storyHeading2,
    storyParagraph3,
    storyParagraph4,
    storyPhoto,
}) => {
    return (
        <Container>
            <Box3 marginTop={50} marginBottom={50}>
                <Fade bottom ssrFadeout>
                    <Card1>
                        <Flex style={{width: '100%'}} align={'center'} justify={'space-around'} respondFlip>
                            <StoryPhoto style={{backgroundImage: `url(${storyPhoto})`}} />
                            <Flex align={'center'} justify={'center'} direction={'column'}>
                                <H3 style={{fontWeight: 700}} center uppercase>
                                    {storyHeading1}
                                </H3>
                                <Fade ssrFadeout>
                                    <Box3 marginTop={25} marginBottom={25}>
                                        <Line height={5} width={100} color={colors.yellow} />
                                    </Box3>
                                </Fade>
                                <Fade delay={400} bottom ssrFadeout>
                                    <P4 center>
                                        {storyParagraph1}
                                    </P4>
                                    <P4 center>
                                        {storyParagraph2}
                                    </P4>
                                </Fade>
                                <Box3 marginTop={50}>
                                    <H3 style={{fontWeight: 700}} center uppercase>
                                        {storyHeading2}
                                    </H3>
                                </Box3>
                                <Fade ssrFadeout>
                                    <Box3 marginTop={25} marginBottom={25}>
                                        <Line height={5} width={100} color={colors.yellow} />
                                    </Box3>
                                </Fade>
                                <Box3 width={500}>
                                    <Fade delay={400} bottom ssrFadeout>
                                        <P4>
                                            {storyParagraph3}
                                        </P4>
                                    </Fade>
                                    <Fade delay={600} bottom ssrFadeout>
                                        <Box3 marginTop={25}>
                                            <P4>
                                                {storyParagraph4}
                                            </P4>
                                        </Box3>
                                    </Fade>
                                </Box3>
                            </Flex>
                        </Flex>
                    </Card1>
                </Fade>
            </Box3>
        </Container>
    )
}

export default Story

const StoryPhoto = styled.div`
    width: 22rem;
    height: 22rem;
    background-size: cover;
    background-position: center;
    margin-top: 5rem;

    ${respondTo.xs`
        width: 30rem;
        height: 30rem;
    `}

    ${respondTo.sm`
        width: 50rem;
        height: 50rem;
    `}

    ${respondTo.md`
        width: 55rem;
        height: 55rem;
    `}

    ${respondTo.lg`
        margin-top: 0;
    `}
`
