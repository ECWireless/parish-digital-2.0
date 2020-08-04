import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'
import { Box1, Box3 } from '../Boxes'
import { Card1 } from '../Cards'
import { Container, Flex } from '../Containers'
import { Line } from '../Lines'
import { H2, H4, P1, P4 } from '../Typography'

const Description = ({
    descriptionHeading,
    descriptionParagraph1,
    descriptionParagraph2,
    descriptionVideoType1,
    descriptionVideoType1Details,
    descriptionVideoType1Photo,
    descriptionVideoType2,
    descriptionVideoType2Details,
    descriptionVideoType2Photo,
    descriptionVideoType3,
    descriptionVideoType3Details,
    descriptionVideoType3Photo,
}) => {
    return (
        <Container>
            <Box3 marginTop={50} marginBottom={50}>
                <Fade bottom ssrFadeout>
                    <Card1>
                        <Flex justify={'space-between'} respondFlip>
                            <Flex direction={'column'} align={'center'}>
                                <FirstVideoType>
                                    <TypePhoto style={{ backgroundImage: `url(${descriptionVideoType1Photo})`}} />
                                    <H4 id="hero-description-card" style={{fontWeight: '700'}} color={colors.white} uppercase center>
                                        {descriptionVideoType1}
                                    </H4>
                                    <P1 id="hero-description-card-hover" color={colors.white}>
                                        {descriptionVideoType1Details}
                                    </P1>
                                </FirstVideoType>
                                <Box1 marginTop={20}>
                                    <VideoTypes>
                                    <TypePhoto style={{ backgroundImage: `url(${descriptionVideoType2Photo})`}} />
                                        <H4 id="hero-description-card" style={{fontWeight: '700'}} color={colors.white} uppercase center>
                                            {descriptionVideoType2}
                                        </H4>
                                        <P1 id="hero-description-card-hover" color={colors.white}>
                                            {descriptionVideoType2Details}
                                        </P1>
                                    </VideoTypes>
                                </Box1>
                                <Box1 marginTop={20}>
                                    <VideoTypes>
                                    <TypePhoto style={{ backgroundImage: `url(${descriptionVideoType3Photo})`}} />
                                        <H4 id="hero-description-card" style={{fontWeight: '700'}} color={colors.white} uppercase center>
                                            {descriptionVideoType3}
                                        </H4>
                                        <P1 id="hero-description-card-hover" color={colors.white}>
                                            {descriptionVideoType3Details}
                                        </P1>
                                    </VideoTypes>
                                </Box1>
                            </Flex>
                            <Flex align={'center'} justify={'flex-start'} direction={'column'}>
                                <Box3 marginBottom={25}>
                                    <Logo />
                                </Box3>
                                <Box3 marginBottom={25}>
                                    <H2 center style={{fontWeight: 400}} uppercase>{descriptionHeading}</H2>
                                </Box3>
                                <Fade ssrFadeout>
                                    <Box3 marginBottom={25}>
                                        <Line height={5} width={100} color={colors.yellow} />
                                    </Box3>
                                </Fade>
                                <Fade delay={200} bottom ssrFadeout>
                                    <Box3 width={550} marginBottom={25}>
                                        <P4>
                                            {descriptionParagraph1}
                                        </P4>
                                    </Box3>
                                </Fade>
                                <Fade delay={400} bottom ssrFadeout>
                                    <Box3 width={550}>
                                        <P4>
                                            {descriptionParagraph2}
                                        </P4>
                                    </Box3>
                                </Fade>
                            </Flex>
                        </Flex>
                    </Card1>
                </Fade>
            </Box3>
        </Container>
    )
}

export default Description

const VideoTypes = styled.div`
    width: 25rem;
    height: 10rem;
    background: ${colors.blue};
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all .3s ease;
    position: relative;

    ${respondTo.xs`
        width: 35rem;
        height: 12rem;
    `}

    ${respondTo.sm`
        width: 50rem;
        height: 15rem;
    `}

    #hero-description-card {
        transition: all .5s ease;
        z-index: 1;
    }

    #hero-description-card-hover {
        position: absolute;
        padding: 0 1.5rem;
        opacity: 0;
        transition: all .5s ease;
        z-index: 1;
        line-height: 20px;

        ${respondTo.xs`
            line-height: 22px;
            padding: 0 2rem;
        `}

        ${respondTo.sm`
            line-height: 30px;
            padding: 0 4rem;
        `}
    }

    &:hover,
    &active,
    &focus {
        background: #000;
        cursor: pointer;
        opacity: .9;

        #hero-description-card {
            opacity: 0;
        }

        #hero-description-card-hover {
            opacity: 1;
            color: ${colors.yellow};
        }
    }
`

const FirstVideoType = styled(VideoTypes)`
    margin-top: 3rem;

    ${respondTo.xs`
        margin-top: 5rem;
    `}

    ${respondTo.lg`
        margin-top: 0;
    `}
`

const TypePhoto = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    opacity: .5;
`

const Logo = styled.div`
    height: 6rem;
    width: 6rem;
    background-image: url(./logos/pd_logo.png);
    background-position: center;
    background-size: cover;

    ${respondTo.xs`
        height: 10rem;
        width: 10rem;
    `}
`
