import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'
import { Box3 } from '../Boxes'
import { Card1 } from '../Cards'
import { Container, Flex, Col2, Col2Left, Col2Right } from '../Containers'
import { H2, H3 } from '../Typography'
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
            </Container>
            <Col2 respondDirection={'column-reverse'}>
                <Col2Left justify={'center'} align={'center'}>
                    <ServicesPhoto style={{backgroundImage: `url(${servicesPhoto1})` }} />
                </Col2Left>
                <Col2Right justify={'center'} align={'center'}>
                    <ServicesCard marginBottom={75} style={{width: '90%'}}>
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
                                <ServicesList>
                                    <li>{servicesList1Item1}</li>
                                    <li>{servicesList1Item2}</li>
                                    <li>{servicesList1Item3}</li>
                                    <li>{servicesList1Item4}</li>
                                    <li>{servicesList1Item5}</li>
                                    <li>{servicesList1Item6}</li>
                                    <li>{servicesList1Item7}</li>
                                    <li>{servicesList1Item8}</li>
                                    <li>{servicesList1Item9}</li>
                                </ServicesList>
                            </Fade>
                        </Flex>
                    </ServicesCard>
                </Col2Right>
            </Col2>
            <Col2>
                <Col2Left justify={'center'} align={'center'}>
                    <ServicesCard marginTop={75} marginBottom={75} style={{width: '90%'}}>
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
                                <ServicesList>
                                    <li>{servicesList2Item1}</li>
                                    <li>{servicesList2Item2}</li>
                                    <li>{servicesList2Item3}</li>
                                    <li>{servicesList2Item4}</li>
                                    <li>{servicesList2Item5}</li>
                                    <li>{servicesList2Item6}</li>
                                </ServicesList>
                            </Fade>
                        </Flex>
                    </ServicesCard>
                </Col2Left>
                <Col2Right justify={'center'} align={'center'}>
                    <ServicesPhoto style={{backgroundImage: `url(${servicesPhoto2})` }} />
                </Col2Right>
            </Col2>
        </>
    )
}

const CustomLine =  styled(Line)`
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

const ServicesCard = styled(Card1)`
    ${props => props.marginBottom && css`
        margin-bottom: ${props.marginBottom * .7}px;
        padding: 4rem 2rem;
        height: 32rem;

        ${respondTo.xs`
            margin-bottom: ${props.marginBottom * .8}px;
            padding: 4rem;
        `}
        
        ${respondTo.sm`
            margin-bottom: ${props.marginBottom * .9}px;
            height: 35rem;
        `}

        ${respondTo.md`
            margin-bottom: ${props.marginBottom}px;
            height: 38rem;
        `}

        ${respondTo.lg`
            margin-bottom: 0;
            height: 45rem;
        `}
    `}

    ${props => props.marginTop && css`
        margin-top: ${props.marginTop * .7}px;

        ${respondTo.xs`
            margin-top: ${props.marginTop * .8}px;
        `}
        
        ${respondTo.sm`
            margin-top: ${props.marginTop * .9}px;
        `}

        ${respondTo.md`
            margin-top: ${props.marginTop}px;
        `}

        ${respondTo.lg`
            margin-top: 0;
        `}
    `}
`

const ServicesList = styled.ul`
    list-style: disc;
    list-style-position: inside;
    text-align: center;

    li {
        margin-bottom: .5rem;
        font-size: 1.4rem;

        ${respondTo.sm`
            font-size: 1.6rem;
        `}

        ${respondTo.md`
            font-size: 1.8rem;
        `}

        ${respondTo.lg`
            font-size: 2rem;
        `}
    }
`

export default Services
