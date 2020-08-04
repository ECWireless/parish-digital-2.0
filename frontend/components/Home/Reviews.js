import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'
import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
import { H3, P2, P4 } from '../Typography'

const Reviews = () => {
    return (
        <ReviewsBackground>
            <Container>
                <Flex align={'center'} justify={'center'} direction={'column'}>
                    <Box3 marginTop={75}>
                        <H3 color={colors.white} uppercase center>
                            What People Say
                        </H3>
                    </Box3>
                    <Box3 marginTop={25}>
                        <P2 color={colors.white} uppercase center>
                            Exceeding Expectations is Our Standard
                        </P2>
                    </Box3>
                    <Box3 marginTop={50} marginBottom={75} style={{width: '100%'}}>
                        <Flex style={{width: '100%'}} align={'center'} justify={'space-around'} respond>
                            <Flex align={'center'} justify={'flex-start'} direction={'column'}>
                                <Flex style={{position: 'relative', height: '31rem'}} align={'center'} justify={'flex-start'} direction={'column'}>
                                    <Box3 marginTop={25}>
                                        <CommentBubble />
                                        <P4 style={{position: 'absolute', top: '2.5rem', left: 0, margin: '4rem'}}>
                                            Whether onsite filming, or in-studio creative editing, Parish Digital continually exceeds our expectations for top-notch videos.
                                        </P4>
                                    </Box3>
                                </Flex>
                                <Flex align={'center'} justify={'flex-start'} direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <P2 style={{fontWeight: 700}} color={colors.yellow} uppercase center>
                                            Eric Dzuba
                                        </P2>
                                    </Box3>
                                    <TinyFont>
                                        Director, Marketing & Innovation
                                    </TinyFont>
                                    <TinyFont>
                                        Carmeuse Lime & Stone
                                    </TinyFont>
                                </Flex>
                            </Flex>
                            <QuoteContainer2 align={'center'} justify={'flex-start'} direction={'column'}>
                                <Flex style={{position: 'relative', height: '31rem'}} align={'center'} justify={'flex-start'} direction={'column'}>
                                    <CommentBubble large />
                                    <P4 style={{position: 'absolute', top: 0, left: 0, margin: '4rem'}}>
                                        [Parish Digital] always delivers quality work, even when an unexpected project comes up. We appreciate how are easy they are to work with, and that they are flexible to our needs. They have my full recommendation.
                                    </P4>
                                </Flex>
                                <Flex align={'center'} justify={'flex-start'} direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <P2 style={{fontWeight: 700}} color={colors.yellow} uppercase center>
                                            Lindsay Ackman
                                        </P2>
                                    </Box3>
                                    <TinyFont>
                                        Project Manager
                                    </TinyFont>
                                    <TinyFont>
                                        LivaNova
                                    </TinyFont>
                                </Flex>
                            </QuoteContainer2>
                            <QuoteContainer3 align={'center'} justify={'flex-start'} direction={'column'}>
                                <Flex style={{position: 'relative', height: '31rem'}} align={'center'} justify={'flex-start'} direction={'column'}>
                                    <Box3 marginTop={25}>
                                        <CommentBubble />
                                        <P4 style={{position: 'absolute', top: '2.5rem', left: 0, margin: '4rem'}}>
                                            Our videos are now bringing in millions of views. I would highly recommend Parish Digital to anyone looking to take their video portfolio to the next level.
                                        </P4>
                                    </Box3>
                                </Flex>
                                <Flex align={'center'} justify={'flex-start'} direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <P2 style={{fontWeight: 700}} color={colors.yellow} uppercase center>
                                            Brandon Fandel
                                        </P2>
                                    </Box3>
                                    <TinyFont>
                                        Digital Marketing Analyst
                                    </TinyFont>
                                    <TinyFont>
                                        Kennemetal, Inc.
                                    </TinyFont>
                                </Flex>
                            </QuoteContainer3>
                        </Flex>
                    </Box3>
                </Flex>
            </Container>
        </ReviewsBackground>
    )
}

export default Reviews

const ReviewsBackground = styled.div`
    width: 100%;
    background: ${colors.brown};
`

const QuoteContainer2 = styled(Flex)`
    margin-top: 6rem;

    ${respondTo.lg`
        margin-top: 0;
    `}
`

const QuoteContainer3 = styled(Flex)`
    margin-top: 4rem;

    ${respondTo.lg`
        margin-top: 0;
    `}
`

const CommentBubble = styled.div`
    width: 28rem;
    height: 24rem;
    background-image: url('./photos/comment-bubble.png');
    background-size: contain;
    background-position: center;

    ${respondTo.xs`
        width: 30rem;
        height: 26rem;
    `}

    ${props => props.large && css`
        width: 32rem;
        height: 28rem;

        ${respondTo.xs`
            width: 35rem;
            height: 30rem;
    `}
    `}
`

const TinyFont = styled.p`
    font-size: 1.4rem;
    text-align: left;
    color: ${colors.white};
    margin-top: .5rem;
`
