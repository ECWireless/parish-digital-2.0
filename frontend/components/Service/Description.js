import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors, shadows } from '../theme'
import { Box1, Box3 } from '../Boxes'
import { Button2 } from '../Buttons'
import { Card1 } from '../Cards'
import { Container, Flex } from '../Containers'
import { Line } from '../Lines'
import { H3, H4, P3 } from '../Typography'

const Description = ({
    setModal,
    descriptionHeading,
    descriptionSubheading,
    descriptionVideoLink,
    descriptionParagraph1,
    descriptionParagraph2,
    descriptionButtonText,
}) => {
    return (
        <Container>
            <Box1 marginTop={75} marginBottom={25}>
                <H4 uppercase center>
                    {descriptionSubheading}
                </H4>
            </Box1>
            <Box1 marginTop={25} marginBottom={75}>
                <Flex align={'center'} justify={'space-around'}>
                    <Fade ssrFadeout>
                        <CustomLine style={{margin: 0}} height={5} width={150} color={colors.yellow} />
                    </Fade>
                    <H3 uppercase center>
                        {descriptionHeading}
                    </H3>
                    <Fade ssrFadeout>
                        <CustomLine style={{margin: 0}} height={5} width={150} color={colors.yellow} />
                    </Fade>
                </Flex>
            </Box1>
            <Fade bottom ssrFadeout>
                <Box1 marginTop={50} marginBottom={50}>
                    <Card1>
                        <Flex style={{width: '100%'}} align={'center'} justify={'space-between'} respondFlip>
                            <Video
                                title="Customer Success Stories Example"
                                src={descriptionVideoLink}
                                frameBorder={0} allow={'autoplay; fullscreen'} allowFullScreen
                            />
                            <Flex align={'center'} justify={'cetner'} direction={'column'}>
                                <Fade delay={200} bottom ssrFadeout>
                                    <Box3 width={480}>
                                        <P3>
                                            {descriptionParagraph1}
                                        </P3>
                                    </Box3>
                                </Fade>
                                <Fade delay={400} bottom ssrFadeout>
                                    <Box3  marginTop={25} width={480}>
                                        <P3>
                                            {descriptionParagraph2}
                                        </P3>
                                    </Box3>
                                </Fade>
                                <ButtonBox marginTop={50} width={480}>
                                    <Button2 onClick={() => setModal(true)}>
                                        {descriptionButtonText}
                                    </Button2>
                                </ButtonBox>
                            </Flex>
                        </Flex>
                    </Card1>
                </Box1>
            </Fade>
        </Container>
    )
}

export default Description

const CustomLine =  styled(Line)`
    ${props => props.width && css`
        width: ${props.width * .3}px;

        ${respondTo.xs`
            width: ${props.width * .2}px;
        `}

        ${respondTo.sm`
            width: ${props.width * .5}px;
        `}

        ${respondTo.md`
            width: ${props.width * .6}px;
        `}

        ${respondTo.lg`
            width: ${props.width}px;
        `}

        ${respondTo.xl`
            width: ${props.width * 2}px;
        `}
    `}
`

const Video = styled.iframe`
    width: 25rem;
    height: 15rem;
    box-shadow: ${shadows.card};
    margin-top: 5rem;

    ${respondTo.xs`
        width: 32rem;
        height: 18rem;
    `}

    ${respondTo.sm`
        width: 44rem;
        height: 25rem;
    `}

    ${respondTo.md`
        width: 62rem;
        height: 35rem;
    `}

    ${respondTo.lg`
        width: 60rem;
        height: 34rem;
        margin-top: 0;
    `}

    ${respondTo.xl`
        width: 90rem;
        height: 51rem;
        margin-top: 0;
    `}
`

const ButtonBox = styled(Box3)`
    display: felx;
    justify-content: center;

    ${respondTo.lg`
        justify-content: flex-start;
    `}
`
