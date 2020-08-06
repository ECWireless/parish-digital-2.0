import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors, shadows } from '../theme'
import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
import { Line } from '../Lines'
import { H3, P4 } from '../Typography'

const Location = ({
    locationHeading,
    locationParagraph1,
    locationParagraph2,
}) => {
    return (
        <Container>
            <Box3 marginTop={50} marginBottom={50}>
                <Flex align={'center'} justify={'space-between'} respond>
                    <CustomBox3 width={500}>
                        <Flex align={'center'} justify={'center'} direction={'column'}>
                            <SVG version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <title>location</title>
                                <path fill="#AAB2BC" d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"></path>
                            </SVG>
                            <Box3 marginTop={50}>
                                <H3 center uppercase>
                                    {locationHeading}
                                </H3>
                            </Box3>
                            <Fade ssrFadeout>
                                <Box3 marginTop={25} marginBottom={25}>
                                    <Line height={5} width={100} color={colors.yellow} />
                                </Box3>
                            </Fade>
                            <Fade bottom ssrFadeout>
                                <P4 center>
                                    {locationParagraph1}
                                </P4>
                            </Fade>
                            <Fade delay={200} bottom ssrFadeout>
                                <Box3 marginTop={25}>
                                    <P4 center>
                                        {locationParagraph2}
                                    </P4>
                                </Box3>
                            </Fade>
                        </Flex>
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
        width: 14rem;
        height: 14rem;
    `}
`

const CustomBox3 = styled(Box3)`
    ${props => props.width && css`
        ${respondTo.xl`
            width: ${props.width * 2}px;
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

    ${respondTo.sm`
        width: 80rem;
        height: 60rem;
    `}
`
