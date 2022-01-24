import styled from 'styled-components'
import respondTo from '../Breakpoints'

import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
import { H3, P6 } from '../Typography'

const Banner = ({
    bannerHeading,
    bannerParagraph,
}) => {
  return (
    <Container>
      <StyledTextContainer1 align={'center'} direction={'column'} justify={'center'}>
        <Box3 marginTop={50} marginBottom={25}>
          <H3 align={'center'} uppercase weight={900}>{bannerHeading}</H3>
        </Box3>
        <Box3 marginBottom={25}>
          <P6 style={{ fontStyle: 'italic' }} align={'center'}>{bannerParagraph}</P6>
        </Box3>
      </StyledTextContainer1>
    </Container>
  )
}

export default Banner

const StyledTextContainer1 = styled(Flex)`
  margin: 0 auto;
  width: 100%;

  ${respondTo.xs`
    width: 400px;
  `}

  ${respondTo.sm`
    width: 600px;
  `}

  ${respondTo.md`
    width: 750px;
  `}
`;
