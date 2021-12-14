import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

import { colors, shadows } from './theme'
import { Box3 } from './Boxes'
import { Container, Flex } from './Containers'
import { Line } from './Lines'
import { H3, P5 } from './Typography'

const Location = () => {
  return (
    <Container>
      <Box3 marginTop={50} marginBottom={50}>
        <Flex align={'center'} justify={'space-between'} respond style={{ margin: '0 auto', width: '90%' }}>
          <CustomBox3 style={{ margin: '0 auto' }} width={380}>
            <Flex align={'center'} justify={'center'} direction={'column'}>
              <SVG xmlns="http://www.w3.org/2000/svg" width="67" height="106.719" viewBox="0 0 67 106.719">
                <g id="droppin" transform="translate(-79.268)">
                  <path id="Path_6" data-name="Path 6" d="M112.844,0h-.152A33.455,33.455,0,0,0,79.268,33.412c0,12.076,5.5,28.014,16.346,47.371a263.3,263.3,0,0,0,16.278,25.451,1.2,1.2,0,0,0,.964.485h.033a1.2,1.2,0,0,0,.969-.537c.08-.122,8.177-12.348,16.164-27.3C140.8,58.7,146.268,43.4,146.268,33.412A33.456,33.456,0,0,0,112.844,0Zm15.428,34.228a15.5,15.5,0,1,1-15.5-15.5A15.522,15.522,0,0,1,128.272,34.228Z" transform="translate(0)" fill="#aab2bc"/>
                </g>
              </SVG>
              <Box3 marginTop={50}>
                <H3 center uppercase>
                  Located in Pittsburgh, PA
                </H3>
              </Box3>
            </Flex>
            <Fade ssrFadeout>
              <Box3 marginTop={25} marginBottom={25}>
                <Line height={5} width={100} color={colors.yellow} />
              </Box3>
            </Fade>
              <P5 style={{ textAlign: 'left' }} center>
                We&#39;re located at 5819 Penn Ave in East Liberty
              </P5>
            <Fade delay={200} bottom ssrFadeout>
              <Box3 marginTop={25}>
                <P5 style={{ textAlign: 'left' }} center>
                  Pittsburgh may be our hometown, but we travel across the United States and Canada
                </P5>
              </Box3>
            </Fade>
          </CustomBox3>
          <MapContainer>
            <Map
              src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.576299312737!2d-79.92954478459674!3d40.4625138607777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834ed807d90d8ad%3A0xb2dd6a71d36f89c5!2sParish%20Digital%20Video%20Production!5e0!3m2!1sen!2sus!4v1596596108633!5m2!1sen!2sus'}
              frameBorder={0} style={{ border: 0}} aria-hidden={'false'} tabIndex={0}
            />
          </MapContainer>
        </Flex>
      </Box3>
    </Container>
  )
}

export default Location

const SVG = styled.svg`
  width: 6rem;
  height: 6rem;

  ${respondTo.sm`
      width: 8rem;
      height: 8rem;
  `}

  ${respondTo.md`
      width: 10rem;
      height: 10rem;
  `}

  ${respondTo.xl`
      width: 12rem;
      height: 12rem;
  `}
`

const CustomBox3 = styled(Box3)`
  ${props => props.width && css`
    width: ${props.width * .7}px;

    ${respondTo.xs`
        width: ${props.width * 1}px;
    `}
    ${respondTo.sm`
        width: ${props.width * 1.2}px;
    `}
    ${respondTo.lg`
        width: ${props.width * 1}px;
    `}
    ${respondTo.xl`
        width: ${props.width * 1.5}px;
    `}
  `}
`

const MapContainer = styled.div`
    margin-top: 4rem;

    ${respondTo.xs`
        margin-top: 6rem;
    `}

    ${respondTo.md`
        margin-top: 8rem;
    `}

    ${respondTo.lg`
        margin-top: 0;
    `}
`

const Map = styled.iframe`
    width: 30rem;
    height: 30rem;
    box-shadow: ${shadows.card};

    ${respondTo.xs`
        width: 40rem;
        height: 30rem;
    `}

    ${respondTo.sm`
        width: 60rem;
        height: 50rem;
    `}

    ${respondTo.xl`
        width: 80rem;
        height: 60rem;
    `}
`
