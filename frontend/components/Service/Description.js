import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import styled from 'styled-components'
import respondTo from '../Breakpoints'
import { colors } from '../theme'

import { Box3 } from '../Boxes'
import { Button3 } from '../Buttons'
import { Card3 } from '../Cards'
import { Flex } from '../Containers'
import { H4, P5 } from '../Typography'

const Description = ({
  // heading,
  // subheading,
  descriptionPhoto,
  descriptionHeading,
  descriptionParagraph1,
  descriptionParagraph2,
}) => {
  return (
      /* <StyledTextContainer1 align={'center'} direction={'column'} justify={'center'}>
        <Box3 marginTop={50} marginBottom={25}>
          <H3 align={'center'} uppercase weight={900}>{heading}</H3>
        </Box3>
        <Box3 marginBottom={25}>
          <P6 style={{ fontStyle: 'italic' }} align={'center'}>{subheading}</P6>
        </Box3>
      </StyledTextContainer1> */
    <div>
      <Fade bottom ssrFadeout>
        <Card3>
          <Flex justify={'space-between'} respondFlip>
            <StyledPhoto style={{ backgroundImage: `url(${descriptionPhoto})`}} />
            <Flex align={'center'} justify={'flex-start'} direction={'column'}>
              <StyledTextContainer2>
                <Box3 marginBottom={25}>
                  <H4 center style={{fontWeight: 900}} uppercase>
                    {descriptionHeading}
                  </H4>
                </Box3>
                <Fade delay={200} bottom ssrFadeout>
                  <Box3 width={500} marginBottom={25}>
                    <P5>
                      {descriptionParagraph1}
                    </P5>
                  </Box3>
                </Fade>
                <Fade delay={400} bottom ssrFadeout>
                  <Box3 width={500}>
                    <P5>
                      {descriptionParagraph2}
                    </P5>
                  </Box3>
                </Fade>
                <Box3 marginTop={32}>
                  <Link href='/contact'>
                    <Button3>
                      Ready for a quote!
                    </Button3>
                  </Link>
                </Box3>
              </StyledTextContainer2>
            </Flex>
          </Flex>
        </Card3>
      </Fade>
      <StyledDivider />
    </div>
  )
}

export default Description;

// const StyledTextContainer1 = styled(Flex)`
//   margin: 0 auto;
//   width: 100%;

//   ${respondTo.xs`
//     width: 400px;
//   `}

//   ${respondTo.sm`
//     width: 600px;
//   `}

//   ${respondTo.md`
//     width: 750px;
//   `}
// `;

const StyledTextContainer2 = styled.div`
  box-sizing: border-box;
  padding: 40px 20px;

  ${respondTo.xs`
    padding: 30px;
  `}

  ${respondTo.sm`
    padding: 40px;
  `}

  ${respondTo.md`
    padding: 100px 40px;
  `}

  ${respondTo.xl`
    padding: 180px 40px;
  `}
`;

const StyledPhoto = styled.div`
  background-position: center;
  background-size: cover;
  height: 400px;
  width: 100%;

  ${respondTo.md`
    height: 500px;
  `}

  ${respondTo.lg`
    width: 60%;
  `}

  ${respondTo.xl`
    height: 600px;
    width: 50%;
  `}
`;

const StyledDivider = styled.div`
  background: ${colors.brown};
  height: 60px;
  width: 100%;

  ${respondTo.sm`
    height: 80px;
  `}

  ${respondTo.xl`
    height: 100px;
  `}
`;
