import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors, shadows } from '../theme'
import { Box3 } from '../Boxes'
import { Flex, Col2, Col2Left, Col2Right } from '../Containers'
import { H4 } from '../Typography'
import { Line } from '../Lines'

const Details = ({
    details1Heading,
    details1ParagraphMobile,
    details1Paragraph1,
    details1Paragraph2,
    details1Photo,
    details2Heading,
    details2ParagraphMobile,
    details2Paragraph1,
    details2Paragraph2,
    details2Photo,
}) => {
    return (
        <Flex direction={'column'}>
            <Col2 respondDirection={'column-reverse'}>
                <Col2Left justify={'center'} align={'center'}>
                    <ServicesPhoto style={{backgroundImage: `url(${details1Photo})` }} />
                </Col2Left>
                <Col2Right style={{position: 'relative'}} justify={'center'} align={'center'}>
                    <Filter />
                    <ServicesCard1>
                        <Flex style={{height: '100%'}} direction={'column'} justify={'center'} align={'center'}>
                            <CustomBox3 width={600}>
                                <H4 style={{fontWeight: 700}} uppercase center>
                                    {details1Heading}
                                </H4>
                            </CustomBox3>
                            <Fade ssrFadeout>
                                <CustomBox3 marginTop={25} marginBottom={25}>
                                    <Line style={{margin: 0}} height={5} width={100} color={colors.yellow} />
                                </CustomBox3>
                            </Fade>
                            <Fade bottom ssrFadeout>
                                <Box3 width={650}>
                                    <NewParagraph>
                                        {details1ParagraphMobile}
                                    </NewParagraph>
                                </Box3>
                            </Fade>
                            <Fade bottom ssrFadeout>
                                <OriginalParagraph>
                                    {details1Paragraph1}
                                </OriginalParagraph>
                            </Fade>
                            <Fade delay={200} bottom ssrFadeout>
                                <Box3 marginTop={25}>
                                    <OriginalParagraph>
                                        {details1Paragraph2}
                                    </OriginalParagraph>
                                </Box3>
                            </Fade>
                        </Flex>
                    </ServicesCard1>
                </Col2Right>
            </Col2>
            <Col2>
                <Col2Left style={{position: 'relative'}} justify={'center'} align={'center'}>
                    <Filter />
                    <ServicesCard2>
                        <Flex style={{height: '100%'}} direction={'column'} justify={'center'} align={'center'}>
                            <CustomBox3>
                                <H4 style={{fontWeight: 700}} uppercase center>
                                    {details2Heading}
                                </H4>
                            </CustomBox3>
                            <Fade ssrFadeout>
                                <CustomBox3 marginTop={25} marginBottom={25}>
                                    <Line style={{margin: 0}} height={5} width={100} color={colors.yellow} />
                                </CustomBox3>
                            </Fade>
                            <Fade bottom ssrFadeout>
                                <Box3 width={650}>
                                    <NewParagraph>
                                        {details2ParagraphMobile}
                                    </NewParagraph>
                                </Box3>
                            </Fade>
                            <Fade bottom ssrFadeout>
                                <OriginalParagraph>
                                    {details2Paragraph1}
                                </OriginalParagraph>
                            </Fade>
                            <Fade delay={200} bottom ssrFadeout>
                                <Box3 marginTop={25}>
                                    <OriginalParagraph>
                                        {details2Paragraph2}
                                    </OriginalParagraph>
                                </Box3>
                            </Fade>
                        </Flex>
                    </ServicesCard2>
                </Col2Left>
                <Col2Right justify={'center'} align={'center'}>
                    <ServicesPhoto style={{backgroundImage: `url(${details2Photo})` }} />
                </Col2Right>
            </Col2>
        </Flex>
    )
}

export default Details

const ServicesPhoto =  styled.div`
    content: '';
    display: none;

    ${respondTo.lg`
        display: inline-block;
        width: 100%;
        background-size: cover;
        background-position: center;
        height: 60rem;
    `}
`

const ServicesCard1 = styled.div`
    background: ${colors.white};
    width: 100%;
    box-shadow: ${shadows.card};
    padding: 4rem 2rem;
    height: 32rem;
    background-image: url(./photos/CSS1.jpg);
    background-position: center;
    background-size: cover;
    margin-top: 12rem;

    ${respondTo.xs`
        padding: 3rem;
        margin-top: 15rem;
    `}
    
    ${respondTo.sm`
        height: 35rem;
        padding: 4rem;
        margin-top: 15rem;
    `}

    ${respondTo.md`
        height: 45rem;
    `}

    ${respondTo.lg`
        margin-top: 0;
        width: 90%;
        background-image: none;
    `}
`

const ServicesCard2 = styled.div`
    background: ${colors.white};
    width: 100%;
    padding: 4rem 2rem;
    height: 32rem;
    background-image: url(./photos/CSS2.jpg);
    background-position: center;
    background-size: cover;
    margin-top: 12rem;

    ${respondTo.xs`
        padding: 3rem;
        margin-top: 15rem;
    `}

    ${respondTo.sm`
        height: 35rem;
        padding: 4rem;
    `}

    ${respondTo.md`
        height: 45rem;
    `}

    ${respondTo.lg`
        margin-top: 0;
        width: 90%;
        background-image: none;
        box-shadow: ${shadows.card};
    `}
`

const CustomBox3 = styled(Box3)`
    transform: translateY(-12rem);

    ${respondTo.xs`
        transform: translateY(-15rem);
    `}

    ${respondTo.sm`
        transform: translateY(-17rem);
    `}

    ${respondTo.md`
        transform: translateY(-22rem);
    `}

    ${respondTo.lg`
        transform: translateY(0rem);
    `}
`

const OriginalParagraph = styled.p`
    display: none;

    ${respondTo.lg`
        font-size: 1.6rem;
        line-height: 20px;
        letter-spacing: .5px;
        font-size: 2rem;
        display: inline-block;
    `}
`

const NewParagraph = styled.p`
    font-size: 1.6rem;
    line-height: 22px;
    font-weight: 600;
    letter-spacing: .5px;
    color: ${colors.white};

    ${respondTo.sm`
        line-height: 25px;
        font-size: 1.8rem;
    `}

    ${respondTo.md`
        font-size: 2rem;
    `}

    ${respondTo.lg`
        display: none;
    `}
`

const Filter = styled.div`
    position: absolute;
    bottom: 0;
    height: 20rem;
    width: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,5));

    ${respondTo.xs`
        height: 25rem;
    `}

    ${respondTo.sm`
        height: 30rem;
    `}

    ${respondTo.md`
        height: 40rem;
    `}

    ${respondTo.lg`
        display: none;
    `}
`
