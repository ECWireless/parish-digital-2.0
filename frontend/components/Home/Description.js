import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import styled from 'styled-components'
import respondTo from '../Breakpoints'
import { colors } from '../theme'

import { Button3 } from '../Buttons'
import { Box3 } from '../Boxes'
import { Card3 } from '../Cards'
import { Container, Flex } from '../Containers'
import { H4, P5 } from '../Typography'

const Description = ({
  descriptionHeading,
  descriptionPhoto,
  descriptionParagraph1,
  descriptionParagraph2,
  trustedHeading,
  trustedLogo1,
  trustedLogo2,
  trustedLogo3,
  trustedLogo4,
  trustedLogo5,
  trustedLogo6,
}) => {
  return (
    <Container>
      <Box3 marginTop={50} marginBottom={50}>
        <Fade bottom ssrFadeout>
          <Card3>
            <Flex justify={'space-between'} respondFlip>
              <StyledPhoto style={{ backgroundImage: `url(${descriptionPhoto})`}} />
              <Flex align={'center'} justify={'flex-start'} direction={'column'}>
                <StyledTextContainer>
                  <Box3 marginBottom={25}>
                    <Logo />
                  </Box3>
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
                </StyledTextContainer>
              </Flex>
            </Flex>
          </Card3>
        </Fade>
        <TrustedBackground>
          <StyledTrustedHeading center uppercase>
            {trustedHeading}
          </StyledTrustedHeading>
          <Flex respond align={'center'} justify={'space-around'}>
            <TrustedLogo style={{backgroundImage: `url(${trustedLogo1})`}} />
            <TrustedLogo style={{backgroundImage: `url(${trustedLogo2})`}} />
            <TrustedLogo style={{backgroundImage: `url(${trustedLogo3})`}} />
            <TrustedLogo style={{backgroundImage: `url(${trustedLogo4})`}} />
            <TrustedLogo style={{backgroundImage: `url(${trustedLogo5})`}} />
            <TrustedLogo style={{backgroundImage: `url(${trustedLogo6})`}} />
          </Flex>
        </TrustedBackground>
      </Box3>
    </Container>
  )
}

export default Description

const StyledPhoto = styled.div`
  background-position: center;
  background-size: cover;
  height: 320px;
  width: 100%;

  ${respondTo.md`
    height: 420px;
  `}

  ${respondTo.lg`
    height: 600px;
    width: 50%;
  `}
`;

const StyledTextContainer = styled.div`
  box-sizing: border-box;
  padding: 40px 20px;

  ${respondTo.xs`
    padding: 30px;
  `}

  ${respondTo.sm`
    padding: 40px 80px;
  `}
`;

const Logo = styled.div`
  height: 6rem;
  width: 6rem;
  background-image: url(./logos/pd_logo.png);
  background-position: center;
  background-size: cover;
  margin: 0 auto;

  ${respondTo.xs`
    height: 8rem;
    width: 8rem;
  `}

  ${respondTo.xl`
    height: 10rem;
    width: 10rem;
  `}
`
const TrustedBackground = styled.div`
  background: ${colors.brown};
  width: 100%;
  height: 550px;

  ${respondTo.sm`
    height: 680px;
  `}

  ${respondTo.lg`
    height: 200px;
  `}

  ${respondTo.xl`
    height: 200px;
  `}
`

const StyledTrustedHeading = styled.div`
  font-size: 1.2rem;
  color: ${colors.white};
  line-height: 20px;
  letter-spacing: .5px;
  margin: 0 auto;
  padding-top: 20px;
  text-align: center;
`;

const TrustedLogo = styled.div`
  height: 80px;
  width: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${respondTo.sm`
    height: 100px;
  `}

  ${respondTo.lg`
    margin-top: 32px;
    width: 200px;
  `}

  ${respondTo.xl`
    height: 80px;
    width: 240px;
  `}
`
