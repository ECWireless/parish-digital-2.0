import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import respondTo from '../Breakpoints'

import { Box3 } from '../Boxes'
import { Card3 } from '../Cards'
import { Container, Flex } from '../Containers'
import { H4, P5 } from '../Typography'

const Story = ({
  storyHeading,
  storyParagraph1,
  storyParagraph2,
  storyPhoto,
}) => {
  return (
    <Container>
      <Box3 marginTop={50}>
        <Fade bottom ssrFadeout>
          <Card3>
            <Flex justify={'space-between'} respondFlip>
              <StyledPhoto style={{ backgroundImage: `url(${storyPhoto})`}} />
              <Flex align={'center'} justify={'flex-start'} direction={'column'}>
                <StyledTextContainer>
                  <Box3 marginBottom={25}>
                    <H4 style={{fontWeight: 900}} uppercase>
                      {storyHeading}
                    </H4>
                  </Box3>
                  <Fade delay={200} bottom ssrFadeout>
                    <Box3 width={450} marginBottom={25}>
                      <P5>
                        {storyParagraph1}
                      </P5>
                    </Box3>
                  </Fade>
                  <Fade delay={400} bottom ssrFadeout>
                    <Box3 width={450}>
                      <P5>
                        {storyParagraph2}
                      </P5>
                    </Box3>
                  </Fade>
                </StyledTextContainer>
              </Flex>
            </Flex>
          </Card3>
        </Fade>
      </Box3>
    </Container>
  )
}

export default Story

const StyledPhoto = styled.div`
  background-position: center;
  background-size: cover;
  height: 320px;
  width: 100%;

  ${respondTo.md`
    height: 420px;
  `}

  ${respondTo.lg`
    height: 500px;
    width: 60%;
  `}
`;

const StyledTextContainer = styled.div`
  box-sizing: border-box;
  padding: 40px 20px;

  ${respondTo.xs`
    padding: 30px;
  `}

  ${respondTo.sm`
    padding: 60px;
  `}

  ${respondTo.lg`
    padding: 40px 60px;
  `}

  ${respondTo.xl`
    padding: 80px;
  `}
`;

