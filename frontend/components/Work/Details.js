import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors, shadows } from '../theme'
import { Box3 } from '../Boxes'
import { Card1 } from '../Cards'
import { Container, Flex } from '../Containers'
import { Line } from '../Lines'
import { H3, P4 } from '../Typography'

const Details = ({
    detail1Heading,
    detail1Paragraph,
    detail1Link,
    detail2Heading,
    detail2Paragraph,
    detail2Link,
    detail3Heading,
    detail3Paragraph,
    detail3Link,
}) => {
    return (
        <Container>
            <DetailCard
                detailHeading={detail1Heading}
                detailParagraph={detail1Paragraph}
                detailLink={detail1Link}
            />
            <DetailCard
                detailHeading={detail2Heading}
                detailParagraph={detail2Paragraph}
                detailLink={detail2Link}
            />
            <DetailCard
                detailHeading={detail3Heading}
                detailParagraph={detail3Paragraph}
                detailLink={detail3Link}
            />
        </Container>
    )
}

export default Details

const DetailCard = (props) => {
    return (
        <Box3 marginTop={50} marginBottom={50}>
            <Fade bottom ssrFadeout>
                <Card1 style={{position: 'relative'}}>
                    <Flex align={'center'} justify={'space-between'} respond>
                        <Flex align={'center'} justify={'center'} direction={'column'}>
                            <H3 uppercase>
                                {props.detailHeading}
                            </H3>
                            <Fade ssrFadeout>
                                <Box3 marginTop={25} marginBottom={25}>
                                    <Line height={5} width={100} color={colors.yellow} />
                                </Box3>
                            </Fade>
                            <Fade delay={200} bottom ssrFadeout>
                                <Box3 width={525} marginTop={25} marginBottom={25}>
                                    <P4>
                                        {props.detailParagraph}
                                    </P4>
                                </Box3>
                            </Fade>
                        </Flex>
                        {/* <DetailVideo
                            src={props.detailLink}
                            frameborder={0} allow={'autoplay; fullscreen'} allowfullscreen
                        /> */}
                    </Flex>
                </Card1>
            </Fade>
        </Box3>
    )
}


const DetailVideo = styled.iframe`
    height: 14rem;
    width: 24rem;
    margin-top: 2rem;
    box-shadow: ${shadows.card};

    ${respondTo.xs`
        height: 20rem;
        width: 35rem;
        margin-top: 2rem;
    `}

    ${respondTo.sm`
        height: 28rem;
        width: 50rem;
        margin-top: 3rem;
    `}

    ${respondTo.md`
        height: 34rem;
        width: 60rem;
        margin-top: 4rem;
    `}

    ${respondTo.lg`
        width: 55rem;
        height: 31rem;
        margin-top: 0;
    `}

    ${respondTo.xl`
        width: 80rem;
        height: 45rem;
    `}
`
