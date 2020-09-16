import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade';
import respondTo from '../Breakpoints'

// Components
import { colors, shadows } from '../theme'
import { Container, Flex } from '../Containers'
import { Box2, Box3 } from '../Boxes'
import { H2, H4, P1, P4 } from '../Typography'

const Details = ({
    detailsMainIcon,
    detailsHeading,
    detailsSubheading,
    detailsCard1Icon,
    detailsCard1Heading,
    detailsCard1Paragraph,
    detailsCard2Icon,
    detailsCard2Heading,
    detailsCard2Paragraph,
    detailsCard3Icon,
    detailsCard3Heading,
    detailsCard3Paragraph,
}) => {
    return (
        <Container>
            <Box2 marginTop={75} marginBottom={75}>
                <Flex direction={'column'} justify={'center'} align={'center'}>
                    <MainImage style={{ backgroundImage: `url(${detailsMainIcon})` }} />
                    <Box2 marginBottom={25} marginTop={50}>
                        <Fade bottom ssrFadeout>
                            <H2 uppercase center>
                                {detailsHeading}
                            </H2>
                        </Fade>
                    </Box2>
                    <Fade delay={200} bottom ssrFadeout>
                        <H4>
                            {detailsSubheading}
                        </H4>
                    </Fade>
                </Flex>
            </Box2>
            <Box2 marginTop={75} marginBottom={50}>
                <Flex respond justify={'space-around'} align={'center'}>
                    <Fade ssrFadeout>
                        <CardComponent
                            image={detailsCard1Icon}
                            heading={detailsCard1Heading}
                            paragraph={detailsCard1Paragraph}
                        />
                    </Fade>
                    <Fade delay={200} ssrFadeout>
                        <CardComponent
                            image={detailsCard2Icon}
                            heading={detailsCard2Heading}
                            paragraph={detailsCard2Paragraph}
                        />
                    </Fade>
                    <Fade delay={400} ssrFadeout>
                        <CardComponent
                            image={detailsCard3Icon}
                            heading={detailsCard3Heading}
                            paragraph={detailsCard3Paragraph}
                        />
                    </Fade>
                </Flex>
            </Box2>
        </Container>
    )
}

export default Details

const CardComponent = ({
    image,
    heading,
    paragraph,
}) => {
    return (
        <Box3 marginBottom={25}>
            <VirtualCard>
                <Flex style={{height: '100%', width: '100%' }} align={'center'} justify={'center'}>
                    <VirtualCardIcon style={{ backgroundImage: `url(${image})`}} />
                    <Box3 marginLeft={10}>
                        <Flex direction={'column'}>
                            <P1 uppercase>
                                {heading}
                            </P1>
                            <CustomBox width={200} marginTop={10}>
                                <P4>
                                    {paragraph}
                                </P4>
                            </CustomBox>
                        </Flex>
                    </Box3>
                </Flex>
            </VirtualCard>
        </Box3>
    )
}

const MainImage = styled.div`
    width: 22rem;
    height: 10rem;
    background-size: cover;
    background-position: center;

    ${respondTo.xs`
        width: 30rem;
        height: 12rem;
    `}

    ${respondTo.sm`
        width: 40rem;
        height: 18rem;
    `}
`

const VirtualCard = styled.div`
    height: 18rem;
    width: 30rem;
    background: ${colors.white};
    box-shadow: ${shadows.card};
    padding: 0 2rem;

    ${respondTo.xs`
        height: 20rem;
        width: 37rem;
    `}

    ${respondTo.xl`
        height: 25rem;
        width: 55rem;
    `}
`

const VirtualCardIcon = styled.div`
    width: 8rem;
    height: 8rem;
    background-size: cover;
    background-position: center;

    ${respondTo.xs`
        width: 14rem;
        height: 8rem;
    `}
`

const CustomBox = styled.div`
    ${props => css`
        width: ${props.width * .8}px;
        margin-top: ${props.marginTop * .7}px;

        ${respondTo.xs`
            width: ${props.width * .8}px;
            margin-top: ${props.marginTop * .8}px;
        `}
        
        ${respondTo.sm`
            width: ${props.width * .8}px;
            margin-top: ${props.marginTop * .9}px;
        `}

        ${respondTo.md`
            width: ${props.width}px;
            margin-top: ${props.marginTop}px;
        `}

        ${respondTo.xl`
            width: ${props.width * 1.5}px;
            margin-top: ${props.marginTop * 1.5}px;
        `}
    `};
`
