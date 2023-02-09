import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import styled from 'styled-components'
import respondTo from '../Breakpoints'

import { Button3 } from '../Buttons'
import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
import { H4, P5 } from '../Typography'

const Description = ({
  descriptionHeading,
  descriptionParagraph1,
  descriptionParagraph2,
}) => {
  return (
    <Box3 marginBottom={50}>
      <Container>
        <Box3 marginBottom={25} marginTop={32}>
          <Logo />
        </Box3>
        <Box3 marginBottom={25}>
          <H4 center style={{fontWeight: 700}}>
            {descriptionHeading}
          </H4>
        </Box3>
        <Fade delay={200} bottom ssrFadeout>
          <Box3 marginBottom={25}>
            <P5 center>
              {descriptionParagraph1}
            </P5>
          </Box3>
        </Fade>
        <Fade delay={400} bottom ssrFadeout>
          <Box3>
            <P5 center>
              {descriptionParagraph2}
            </P5>
          </Box3>
        </Fade>
        <Box3 marginBottom={60} marginTop={32}>
          <Flex justify='center'>
            <Link href='/contact'>
              <Button3>
                REQUEST A QUOTE
              </Button3>
            </Link>
          </Flex>
        </Box3>
      </Container>
    </Box3>
  )
}

export default Description

const Logo = styled.div`
  height: 6rem;
  width: 6rem;
  background-image: url(/logos/pd_logo.png);
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
