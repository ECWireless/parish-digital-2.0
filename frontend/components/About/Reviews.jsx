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
    <ReviewsBackground>
      <Container>
        <Flex style={{width: '100%'}} align={'center'} justify={'space-between'} respond>
          <div>
            <P2 color={colors.white} uppercase weight={900}>
              {reviewsHeading}
            </P2>
            <Box3 marginTop={10}>
              <P5 color={colors.white} uppercase>
                {reviewsSubheading}
              </P5>
            </Box3>
          </div>
          <Fade bottom ssrFadeout>
            <Flex align={'center'} justify={'flex-start'} direction={'column'}>
              <CustomFlex style={{position: 'relative'}} align={'center'} justify={'flex-start'} direction={'column'}>
                <Box3 marginTop={25}>
                  <CommentBubble style={{ backgroundImage: `url(${reviewsPhoto})`}} />
                  <P6 style={{position: 'absolute', top: '4rem', left: 0, margin: '3rem'}}>
                    {reviewsQuote1}
                  </P6>
                </Box3>
              </CustomFlex>
              <Flex align={'flex-start'} justify={'flex-start'} direction={'column'}>
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
                  <P6 style={{position: 'absolute', top: '4rem', left: 0, margin: '3rem'}}>
                      {reviewsQuote2}
                  </P6>
                </Box3>
              </CustomFlex>
              <Flex align={'flex-start'} justify={'flex-start'} direction={'column'}>
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
                  <P6 style={{position: 'absolute', top: '4rem', left: 0, margin: '3rem'}}>
                    {reviewsQuote3}
                  </P6>
                </Box3>
              </CustomFlex>
              <Flex align={'flex-start'} justify={'flex-start'} direction={'column'}>
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
      </Container>
    </ReviewsBackground>
  )
}

export default Reviews

const ReviewsBackground = styled.div`
  width: 100%;
  background: ${colors.brown};
  padding: 50px 12px;

  ${respondTo.xs`
    padding: 50px 30px;
  `}

  ${respondTo.xl`
    padding: 50px;
  `}
`

const CustomFlex = styled(Flex)`
  height: 31rem;

  ${respondTo.xl`
    height: 320px;
  `}
`

const CommentBubble = styled.div`
  width: 250px;
  height: 250px;
  background-size: contain;
  background-position: center;

  ${respondTo.xs`
    width: 250px;
    height: 250px;
  `}

  ${respondTo.lg`
    width: 250px;
    height: 250px;
  `}

  ${respondTo.xl`
    width: 280px;
    height: 280px;
  `}
`

const TinyFont = styled.p`
  font-size: 1.4rem;
  text-align: left;
  color: ${colors.white};
  margin: 4px 0;

  ${respondTo.xl`
    font-size: 1.8rem;
  `}
`
