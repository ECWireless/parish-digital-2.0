import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

// Components
import { colors } from '../theme'
import { Container, Flex, Col2, Col2Left, Col2Right } from '../Containers'
import { Box3 } from '../Boxes'
import { P1 } from '../Typography'

const Banner = ({
    bannerListItem1,
    bannerListItem2,
    bannerListItem3,
    bannerListItem4,
    bannerListItem5,
    bannerListItem6,
    bannerListItem7,
    bannerListItem8,
    bannerListItem9,
    bannerListItem10,
    bannerListItem11,
    bannerListItem12,
}) => {
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
                                            <P1 bold color={colors.white}>
                                                {bannerListItem1}
                                            </P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>
                                                {bannerListItem2}
                                            </P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>
                                                {bannerListItem3}
                                            </P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>
                                                {bannerListItem4}
                                            </P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>
                                                {bannerListItem5}
                                            </P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>
                                                {bannerListItem6}
                                            </P1>
                                        </Box3>
                                    </Flex>
                                </Fade>
                            </Col2Left>
                            <Col2Right>
                                <Fade delay={200} bottom ssrFadeout>
                                    <Flex direction={'column'} justify={'center'} align={'center'}>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>
                                                {bannerListItem7}
                                            </P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>
                                                {bannerListItem8}
                                            </P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>
                                                {bannerListItem9}
                                            </P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>
                                                {bannerListItem10}
                                            </P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>
                                                {bannerListItem11}
                                            </P1>
                                        </Box3>
                                        <Box3 marginBottom={25}>
                                            <P1 bold color={colors.white}>
                                                {bannerListItem12}
                                            </P1>
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
