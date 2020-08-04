import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'
import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
import { H3, P2, P4 } from '../Typography'

const Reviews = ({
    reviewsHeading,
    reviewsSubheading,
    reviewsPhoto,
    reviewsQuote1,
    reviewsName1,
    reviewsPosition1,
    reviewsCompany1,
    reviewsQuote2,
    reviewsName2,
    reviewsPosition2,
    reviewsCompany2,
    reviewsQuote3,
    reviewsName3,
    reviewsPosition3,
    reviewsCompany3,
}) => {
    return (
        <ReviewsBackground>
            <Container>
                <Flex align={'center'} justify={'center'} direction={'column'}>
                    <Box3 marginTop={75}>
                        <H3 color={colors.white} uppercase center>
                            {reviewsHeading}
                        </H3>
                    </Box3>
                    <Box3 marginTop={25}>
                        <P2 color={colors.white} uppercase center>
                            {reviewsSubheading}
                        </P2>
                    </Box3>
                    <Box3 marginTop={50} marginBottom={75} style={{width: '100%'}}>
                        <Flex style={{width: '100%'}} align={'center'} justify={'space-around'} respond>
                            <Flex align={'center'} justify={'flex-start'} direction={'column'}>
                                <Flex style={{position: 'relative', height: '31rem'}} align={'center'} justify={'flex-start'} direction={'column'}>
                                    <Box3 marginTop={25}>
                                        <CommentBubble style={{ backgroundImage: `url(${reviewsPhoto})`}} />
                                        <P4 style={{position: 'absolute', top: '2.5rem', left: 0, margin: '4rem'}}>
                                            {reviewsQuote1}
                                        </P4>
                                    </Box3>
                                </Flex>
                                <Flex align={'center'} justify={'flex-start'} direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <P2 style={{fontWeight: 700}} color={colors.yellow} uppercase center>
                                            {reviewsName1}
                                        </P2>
                                    </Box3>
                                    <TinyFont>
                                        {reviewsPosition1}
                                    </TinyFont>
                                    <TinyFont>
                                        {reviewsCompany1}
                                    </TinyFont>
                                </Flex>
                            </Flex>
                            <QuoteContainer2 align={'center'} justify={'flex-start'} direction={'column'}>
                                <Flex style={{position: 'relative', height: '31rem'}} align={'center'} justify={'flex-start'} direction={'column'}>
                                    <CommentBubble large style={{ backgroundImage: `url(${reviewsPhoto})`}} />
                                    <P4 style={{position: 'absolute', top: 0, left: 0, margin: '4rem'}}>
                                        {reviewsQuote2}
                                    </P4>
                                </Flex>
                                <Flex align={'center'} justify={'flex-start'} direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <P2 style={{fontWeight: 700}} color={colors.yellow} uppercase center>
                                            {reviewsName2}
                                        </P2>
                                    </Box3>
                                    <TinyFont>
                                        {reviewsPosition2}
                                    </TinyFont>
                                    <TinyFont>
                                        {reviewsCompany2}
                                    </TinyFont>
                                </Flex>
                            </QuoteContainer2>
                            <QuoteContainer3 align={'center'} justify={'flex-start'} direction={'column'}>
                                <Flex style={{position: 'relative', height: '31rem'}} align={'center'} justify={'flex-start'} direction={'column'}>
                                    <Box3 marginTop={25}>
                                        <CommentBubble style={{ backgroundImage: `url(${reviewsPhoto})`}} />
                                        <P4 style={{position: 'absolute', top: '2.5rem', left: 0, margin: '4rem'}}>
                                            {reviewsQuote3}
                                        </P4>
                                    </Box3>
                                </Flex>
                                <Flex align={'center'} justify={'flex-start'} direction={'column'}>
                                    <Box3 marginBottom={10}>
                                        <P2 style={{fontWeight: 700}} color={colors.yellow} uppercase center>
                                            {reviewsName3}
                                        </P2>
                                    </Box3>
                                    <TinyFont>
                                        {reviewsPosition3}
                                    </TinyFont>
                                    <TinyFont>
                                        {reviewsCompany3}
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
