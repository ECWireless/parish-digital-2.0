import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

import { colors } from '../theme'
import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
import { P2, P5, P6 } from '../Typography'

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
    <Container>
      <ReviewsBackground>
        <Flex align={'center'} justify={'center'} direction={'column'}>
          <Box3 marginTop={75}>
            <P2 color={colors.white} uppercase center weight={900}>
              {reviewsHeading}
            </P2>
          </Box3>
          <Box3 marginTop={25}>
            <P5 color={colors.white} uppercase center>
              {reviewsSubheading}
            </P5>
          </Box3>
          <Box3 marginTop={15} marginBottom={75} style={{width: '100%'}}>
            <Flex style={{width: '100%'}} align={'center'} justify={'space-around'} respond>
              <Fade bottom ssrFadeout>
                <Flex align={'center'} justify={'flex-start'} direction={'column'}>
                  <CustomFlex style={{position: 'relative'}} align={'center'} justify={'flex-start'} direction={'column'}>
                    <Box3 marginTop={25}>
                      <CommentBubble style={{ backgroundImage: `url(${reviewsPhoto})`}} />
                      <P6 style={{position: 'absolute', top: '6.5rem', left: 0, margin: '3rem'}}>
                        {reviewsQuote1}
                      </P6>
                    </Box3>
                  </CustomFlex>
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
                </Fade>
                <Fade delay={200} bottom ssrFadeout>
                  <Flex align={'center'} justify={'flex-start'} direction={'column'}>
                    <CustomFlex style={{position: 'relative'}} align={'center'} justify={'flex-start'} direction={'column'}>
                      <Box3 marginTop={25}>
                        <CommentBubble style={{ backgroundImage: `url(${reviewsPhoto})`}} />
                        <P6 style={{position: 'absolute', top: '6rem', left: 0, margin: '3rem'}}>
                            {reviewsQuote2}
                        </P6>
                      </Box3>
                    </CustomFlex>
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
                  </Flex>
                </Fade>
                <Fade delay={400} bottom ssrFadeout>
                    <Flex align={'center'} justify={'flex-start'} direction={'column'}>
                        <CustomFlex style={{position: 'relative'}} align={'center'} justify={'flex-start'} direction={'column'}>
                            <Box3 marginTop={25}>
                                <CommentBubble style={{ backgroundImage: `url(${reviewsPhoto})`}} />
                                <P6 style={{position: 'absolute', top: '6rem', left: 0, margin: '3rem'}}>
                                    {reviewsQuote3}
                                </P6>
                            </Box3>
                        </CustomFlex>
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
                    </Flex>
                </Fade>
            </Flex>
          </Box3>
        </Flex>
      </ReviewsBackground>
    </Container>
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
        margin-top: .5rem;
    `}

    ${respondTo.xl`
        margin-top: -.8rem;
    `}
`

const QuoteContainer3 = styled(Flex)`
    margin-top: 4rem;

    ${respondTo.lg`
        margin-top: 0;
    `}
`

const CustomFlex = styled(Flex)`
    height: 31rem;

    ${respondTo.xl`
        height: 40rem;
    `}
`

const CommentBubble = styled.div`
    width: 26rem;
    height: 29rem;
    background-size: contain;
    background-position: center;

    ${respondTo.xs`
        width: 27rem;
        height: 29rem;
    `}

    ${respondTo.xl`
        width: 36rem;
        height: 36rem;
    `}

    ${props => props.large && css`
        width: 28rem;
        height: 28rem;

        ${respondTo.xs`
            width: 31rem;
            height: 31rem;
        `}

        ${respondTo.xl`
            width: 40rem;
            height: 44rem;
        `}
    `}
`

const TinyFont = styled.p`
    font-size: 1.4rem;
    text-align: left;
    color: ${colors.white};
    margin-top: .5rem;

    ${respondTo.xl`
        font-size: 1.8rem;
        margin-top: 1rem;
    `}
`
