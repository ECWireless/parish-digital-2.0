import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import respondTo from '../Breakpoints'

import { colors, shadows } from '../theme'
import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
// import { H3, P6 } from '../Typography'

const Examples = ({
  // heading,
  // subheading,
  example1Link,
  example2Link,
  example3Link,
  example4Link,
  example5Link,
  example6Link,
  example7Link,
  example8Link,
  example9Link,
  example10Link,
  example11Link,
  example12Link,
}) => {
  return (
    <ExamplesBackground>
      <Container>
        {/* <StyledTextContainer align={'center'} direction={'column'} justify={'center'}>
          <Box3 marginTop={50} marginBottom={25}>
            <H3 align={'center'} uppercase weight={900}>{heading}</H3>
          </Box3>
          <Box3 marginBottom={25}>
            <P6 style={{ fontStyle: 'italic' }} align={'center'}>{subheading}</P6>
          </Box3>
        </StyledTextContainer> */}
        <Flex align={'center'} justify={'space-between'} respond>
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
          <Fade delay={200} ssrFadeout>
            <Box3 marginTop={50} marginBottom={25}>
              <CardContainer>
                <ExampleVideo
                  src={example2Link}
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
                  src={example3Link}
                  frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                />
              </CardContainer>
            </Box3>
          </Fade>
          <Fade delay={200} ssrFadeout>
            <Box3 marginBottom={25}>
              <CardContainer>
                <ExampleVideo
                  src={example4Link}
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
                  src={example5Link}
                  frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                />
              </CardContainer>
            </Box3>
          </Fade>
          <Fade delay={200} ssrFadeout>
            <Box3 marginBottom={25}>
              <CardContainer>
                <ExampleVideo
                  src={example6Link}
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
                  src={example7Link}
                  frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                />
              </CardContainer>
            </Box3>
          </Fade>
          <Fade delay={200} ssrFadeout>
            <Box3 marginBottom={50}>
              <CardContainer>
                <ExampleVideo
                  src={example8Link}
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
                  src={example9Link}
                  frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                />
              </CardContainer>
            </Box3>
          </Fade>
          <Fade delay={200} ssrFadeout>
            <Box3 marginBottom={50}>
              <CardContainer>
                <ExampleVideo
                  src={example10Link}
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
                  src={example11Link}
                  frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                />
              </CardContainer>
            </Box3>
          </Fade>
          <Fade delay={200} ssrFadeout>
            <Box3 marginBottom={50}>
              <CardContainer>
                <ExampleVideo
                  src={example12Link}
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
  background: ${colors.white};
`;

// const StyledTextContainer = styled(Flex)`
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
  box-shadow: ${shadows.card};
`
