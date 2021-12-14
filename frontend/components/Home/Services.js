import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors, shadows } from '../theme'
import { Box3 } from '../Boxes'
import { Card3 } from '../Cards'
import { Container, Flex, Col2, Col2Left, Col2Right } from '../Containers'
import { H2, H3, P3 } from '../Typography'
import { Line } from '../Lines'

const Services = ({
    servicesHeading,
    servicesSubheading1,
    servicesList1Item1,
    servicesList1Item2,
    servicesList1Item3,
    servicesList1Item4,
    servicesList1Item5,
    servicesList1Item6,
    servicesList1Item7,
    servicesList1Item8,
    servicesList1Item9,
    servicesPhoto1,
    servicesSubheading2,
    servicesList2Item1,
    servicesList2Item2,
    servicesList2Item3,
    servicesList2Item4,
    servicesList2Item5,
    servicesList2Item6,
    servicesPhoto2,
}) => {
    return (
        <>
            <Container>
                <Box3 marginTop={75} marginBottom={75}>
                    <Flex align={'center'} justify={'space-around'}>
                        <Fade ssrFadeout>
                            <CustomLine style={{margin: 0}} height={5} width={250} color={colors.yellow} />
                        </Fade>
                        <H2 uppercase center>
                            {servicesHeading}
                        </H2>
                        <Fade ssrFadeout>
                            <CustomLine style={{margin: 0}} height={5} width={250} color={colors.yellow} />
                        </Fade>
                    </Flex>
                </Box3>
                <Box3>
                    <Col2 style={{boxShadow: shadows.card}} respondDirection={'column-reverse'}>
                        <Col2Left justify={'center'} align={'center'}>
                            <ServicesPhoto style={{backgroundImage: `url(${servicesPhoto1})` }} />
                        </Col2Left>
                        <Col2Right justify={'center'} align={'center'}>
                            <ServicesCard>
                                <Flex style={{height: '100%'}} direction={'column'} justify={'center'} align={'center'}>
                                    <H3 uppercase center>
                                        {servicesSubheading1}
                                    </H3>
                                    <Fade ssrFadeout>
                                        <Box3 marginTop={25} marginBottom={25}>
                                            <Line style={{margin: 0}} height={5} width={100} color={colors.yellow} />
                                        </Box3>
                                    </Fade>
                                    <Fade bottom ssrFadeout>
                                        <CustomCol2>
                                            <CustomCol2Left>
                                                <Box3 marginTop={10}>
                                                    <P3>
                                                        {servicesList1Item1}
                                                    </P3>
                                                </Box3>
                                                <Box3 marginTop={10}>
                                                    <P3>
                                                        {servicesList1Item2}
                                                    </P3>
                                                </Box3>
                                                <Box3 marginTop={10}>
                                                    <P3>
                                                        {servicesList1Item3}
                                                    </P3>
                                                </Box3>
                                                <Box3 marginTop={10}>
                                                    <P3>
                                                        {servicesList1Item4}
                                                    </P3>
                                                </Box3>
                                            </CustomCol2Left>
                                            <CustomCol2Right>
                                                <Box3 marginTop={10}>
                                                    <P3>
                                                        {servicesList1Item5}
                                                    </P3>
                                                </Box3>
                                                <Box3 marginTop={10}>
                                                    <P3>
                                                        {servicesList1Item6}
                                                    </P3>
                                                </Box3>
                                                <Box3 marginTop={10}>
                                                    <P3>
                                                        {servicesList1Item7}
                                                    </P3>
                                                </Box3>
                                                <Box3 marginTop={10}>
                                                    <P3>
                                                        {servicesList1Item8}
                                                    </P3>
                                                </Box3>
                                            </CustomCol2Right>
                                        </CustomCol2>
                                    </Fade>
                                </Flex>
                            </ServicesCard>
                        </Col2Right>
                    </Col2>
                    <Col2 style={{boxShadow: shadows.card}}>
                        <Col2Left justify={'center'} align={'center'}>
                            <ServicesCard>
                                <Flex style={{height: '100%'}} direction={'column'} justify={'center'} align={'center'}>
                                    <H3 uppercase center>
                                        {servicesSubheading2}
                                    </H3>
                                    <Fade ssrFadeout>
                                        <Box3 marginTop={25} marginBottom={25}>
                                            <Line style={{margin: 0}} height={5} width={100} color={colors.yellow} />
                                        </Box3>
                                    </Fade>
                                    <Fade bottom ssrFadeout>
                                    <CustomCol2>
                                            <CustomCol2Left>
                                                <Box3 marginTop={10}>
                                                    <P3>
                                                        {servicesList2Item1}
                                                    </P3>
                                                </Box3>
                                                <Box3 marginTop={10}>
                                                    <P3>
                                                        {servicesList2Item2}
                                                    </P3>
                                                </Box3>
                                                <Box3 marginTop={10}>
                                                    <P3>
                                                        {servicesList2Item3}
                                                    </P3>
                                                </Box3>
                                            </CustomCol2Left>
                                            <CustomCol2Right>
                                                <Box3 marginTop={10}>
                                                    <P3>
                                                        {servicesList2Item4}
                                                    </P3>
                                                </Box3>
                                                <Box3 marginTop={10}>
                                                    <P3>
                                                        {servicesList2Item5}
                                                    </P3>
                                                </Box3>
                                                <Box3 marginTop={10}>
                                                    <P3>
                                                        {servicesList2Item6}
                                                    </P3>
                                                </Box3>
                                            </CustomCol2Right>
                                        </CustomCol2>
                                    </Fade>
                                </Flex>
                            </ServicesCard>
                        </Col2Left>
                        <Col2Right justify={'center'} align={'center'}>
                            <ServicesPhoto style={{backgroundImage: `url(${servicesPhoto2})` }} />
                        </Col2Right>
                    </Col2>
                </Box3>
            </Container>
        </>
    )
}

export default Services

const CustomLine =  styled(Line)`
    border-radius: 5px;
    
    ${props => props.width && css`
        width: ${props.width * .08}px;

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
            width: ${props.width * 1.8}px;
        `}
    `}
`

const ServicesPhoto =  styled.div`
    width: 100%;
    height: 30rem;
    background-size: cover;
    background-position: center;

    ${respondTo.xs`
        height: 40rem;
    `}
    
    ${respondTo.sm`
    `}

    ${respondTo.md`
        height: 50rem;
    `}

    ${respondTo.lg`
        height: 60rem;
    `}
`

const ServicesCard = styled(Card3)`
    padding: 4rem 2rem;
    height: 100%;
    box-shadow: none;
`

const CustomCol2 = styled.div`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    ${respondTo.sm`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    `}
`

const CustomCol2Left = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    text-align: center;
    margin-right: 0;

    ${respondTo.sm`
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        text-align: right;
        margin-right: 1.5rem;
    `}
`

const CustomCol2Right = styled.div`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    text-align: center;
    margin-left: 0;

    ${respondTo.sm`
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        text-align: left;
        margin-left: 1.5rem;
    `}
`
