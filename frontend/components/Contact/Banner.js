import styled from 'styled-components'
import respondTo from '../Breakpoints'

import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
import { H3, H4, P6 } from '../Typography'

const Banner = ({
    bannerHeading,
    bannerParagraph,
    ownerNumber,
    ownerEmail,
}) => {
  return (
    <Container>
      <StyledTextContainer align={'center'} direction={'column'} justify={'center'}>
        <Box3 marginTop={50} marginBottom={25}>
          <H3 align={'center'} uppercase weight={900}>{bannerHeading}</H3>
        </Box3>
        <Box3 marginBottom={50}>
          <P6 style={{ fontStyle: 'italic' }} align={'center'}>{bannerParagraph}</P6>
        </Box3>
        <StyledContactContainer marginBottom={50}>
          <Flex align={'center'} justify={'space-between'} respond>
            <H4 weight={700}>{ownerNumber}</H4>
            <H4 weight={700}>{ownerEmail}</H4>
          </Flex>
        </StyledContactContainer>
      </StyledTextContainer>
    </Container>
  )
}

export default Banner

const StyledTextContainer = styled(Flex)`
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

const StyledContactContainer = styled(Box3)`
  width: 100%;

  ${respondTo.xs`
    width: 400px;
  `}

  ${respondTo.sm`
    width: 70%;
  `}

  ${respondTo.xl`
    width: 90%;
  `}
`;
