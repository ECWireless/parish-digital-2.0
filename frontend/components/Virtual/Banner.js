import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

// Components
import { colors } from '../theme'
import { Container, Flex, Col2, Col2Left, Col2Right } from '../Containers'
import { Box3 } from '../Boxes'
import { P1 } from '../Typography'

const Banner = () => {
    return (
        <BannerBackground>
            <Container style={{height: '100%'}}>
                <Flex style={{height: '100%', width: '100%'}} align={'center'} justify={'center'}>
                    <Box3 style={{ margin: '0 auto', height: '100%'}} width={500}>
                        <Col2 style={{height: '100%', alignItems: 'center'}}>
                            <Col2Left>
                                <Fade bottom ssrFadeout>
                                    <Flex direction={'column'} justify={'center'} align={'center'}>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>Facebook Live</P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>YouTube Live</P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>Vimeo Livestream</P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>Skype</P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>Zoom</P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>Gotomeeting</P1>
                                        </Box3>
                                    </Flex>
                                </Fade>
                            </Col2Left>
                            <Col2Right>
                                <Fade delay={200} bottom ssrFadeout>
                                    <Flex direction={'column'} justify={'center'} align={'center'}>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>Google Hangouts</P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>Microsoft Teams</P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>Panopto</P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>Restream.io</P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>Webex</P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>Slido</P1>
                                        </Box3>
                                    </Flex>
                                </Fade>
                            </Col2Right>
                        </Col2>
                    </Box3>
                </Flex>
            </Container>
        </BannerBackground>
    )
}

export default Banner

const BannerBackground = styled.div`
    width: 100%;
    background: ${colors.greyBlue};
    padding: 5rem 0 2.5rem;
`
