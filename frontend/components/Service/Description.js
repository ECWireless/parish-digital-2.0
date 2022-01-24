import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import styled from 'styled-components'
import { colors } from '../theme'

import { Box3 } from '../Boxes'
import { Button5 } from '../Buttons'
import { H3, P5 } from '../Typography'

const Description = ({
  // heading,
  // subheading,
  descriptionPhoto,
  descriptionHeading,
  descriptionParagraph1,
  descriptionParagraph2,
}) => {
  return (
    <StyledContainer marginBottom={50}>
      <StyledPhoto style={{ backgroundImage: `url(${descriptionPhoto})`}} />
      <Fade bottom ssrFadeout>
        <StyledTextContainer2>
          <Box3 marginBottom={25}>
            <H3 color={colors.white} center style={{fontWeight: 900}} uppercase>
              {descriptionHeading}
            </H3>
          </Box3>
          <Fade delay={200} bottom ssrFadeout>
            <Box3 width={550} marginBottom={25}>
              <P5 color={colors.white} center>
                {descriptionParagraph1}
              </P5>
            </Box3>
          </Fade>
          <Fade delay={400} bottom ssrFadeout>
            <Box3 width={550}>
              <P5 color={colors.white} center>
                {descriptionParagraph2}
              </P5>
            </Box3>
          </Fade>
          <Box3 marginTop={32}>
            <Link href='/contact'>
              <Button5>
                Ready for a quote!
              </Button5>
            </Link>
          </Box3>
        </StyledTextContainer2>
      </Fade>
    </StyledContainer>
  )
}

export default Description;

const StyledContainer = styled(Box3)`
  height: 600px;
  position: relative;
`;

const StyledTextContainer2 = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: center;
  width: 100%;
`;

const StyledPhoto = styled.div`
  background-position: center;
  background-size: cover;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
