import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'
import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
import { Card1 } from '../Cards'
import { H4, P3 } from '../Typography'

const Examples = ({
    example1Heading,
    example1BackgroundPhoto,
    example1ProductPhoto,
    example1Item1,
    example1Item2,
    example1Item3,
    example1Item4,
    example1Item5,
    example1Item6,
    example1Item7,
    example1Item8,

    example2Heading,
    example2BackgroundPhoto,
    example2ProductPhoto,
    example2Item1,
    example2Item2,
    example2Item3,
    example2Item4,
    example2Item5,
    example2Item6,
    example2Item7,
    example2Item8,

    example3Heading,
    example3BackgroundPhoto,
    example3ProductPhoto,
    example3Item1,
    example3Item2,
    example3Item3,
    example3Item4,
    example3Item5,
    example3Item6,
    example3Item7,
    example3Item8,

    example4Heading,
    example4BackgroundPhoto,
    example4ProductPhoto,
    example4Item1,
    example4Item2,
    example4Item3,
    example4Item4,
    example4Item5,
    example4Item6,
    example4Item7,
    example4Item8,
}) => {
    return (
        <Container>
            <Box3 marginTop={50} marginBottom={50}>
                <Flex align={'center'} justify={'space-between'} respond>
                    <Fade bottom ssrFadeout>
                        <ProductCard
                            exampleHeading={example1Heading}
                            exampleBackgroundPhoto={example1BackgroundPhoto}
                            exampleProductPhoto={example1ProductPhoto}
                            exampleItem1={example1Item1}
                            exampleItem2={example1Item2}
                            exampleItem3={example1Item3}
                            exampleItem4={example1Item4}
                            exampleItem5={example1Item5}
                            exampleItem6={example1Item6}
                            exampleItem7={example1Item7}
                            exampleItem8={example1Item8}
                        />
                    </Fade>
                    <BottomCardContainer>
                        <Fade delay={200} bottom ssrFadeout>
                            <ProductCard
                                exampleHeading={example2Heading}
                                exampleBackgroundPhoto={example2BackgroundPhoto}
                                exampleProductPhoto={example2ProductPhoto}
                                exampleItem1={example2Item1}
                                exampleItem2={example2Item2}
                                exampleItem3={example2Item3}
                                exampleItem4={example2Item4}
                                exampleItem5={example2Item5}
                                exampleItem6={example2Item6}
                                exampleItem7={example2Item7}
                                exampleItem8={example2Item8}
                            />
                        </Fade>
                    </BottomCardContainer>
                </Flex>
            </Box3>
            <Box3 marginTop={50} marginBottom={50}>
                <Flex align={'center'} justify={'space-between'} respond>
                    <Fade bottom ssrFadeout>
                        <ProductCard
                            exampleHeading={example3Heading}
                            exampleBackgroundPhoto={example3BackgroundPhoto}
                            exampleProductPhoto={example3ProductPhoto}
                            exampleItem1={example3Item1}
                            exampleItem2={example3Item2}
                            exampleItem3={example3Item3}
                            exampleItem4={example3Item4}
                            exampleItem5={example3Item5}
                            exampleItem6={example3Item6}
                            exampleItem7={example3Item7}
                            exampleItem8={example3Item8}
                        />
                    </Fade>
                    <BottomCardContainer>
                        <Fade delay={200} bottom ssrFadeout>
                            <ProductCard
                                exampleHeading={example4Heading}
                                exampleBackgroundPhoto={example4BackgroundPhoto}
                                exampleProductPhoto={example4ProductPhoto}
                                exampleItem1={example4Item1}
                                exampleItem2={example4Item2}
                                exampleItem3={example4Item3}
                                exampleItem4={example4Item4}
                                exampleItem5={example4Item5}
                                exampleItem6={example4Item6}
                                exampleItem7={example4Item7}
                                exampleItem8={example4Item8}
                            />
                        </Fade>
                    </BottomCardContainer>
                </Flex>
            </Box3>
        </Container>
    )
}

export default Examples

const ProductCard = (props) => {
    return(
        <ExampleCard style={{padding: 0}}>
            <Flex align={'center'} justify={'center'} direction={'column'}>
                <PhotoContainer>
                    <BackgroundPhoto style={{backgroundImage: `url(${props.exampleBackgroundPhoto})`}} />
                    <ProductPhoto style={{backgroundImage: `url(${props.exampleProductPhoto}`}} />
                </PhotoContainer>
                <Flex style={{width: '100%'}} align={'center'} justify={'center'} direction={'column'}>
                    <Box3 marginTop={50}>
                        <H4 style={{fontWeight: 700}} uppercase center>
                            {props.exampleHeading}
                        </H4>
                        <Box3 marginTop={25} marginBottom={50}>
                            <CustomCol2>
                                <CustomCol2Left>
                                    <Box3 marginTop={10}>
                                        <P3>
                                            {props.exampleItem1}
                                        </P3>
                                    </Box3>
                                    <Box3 marginTop={10}>
                                        <P3>
                                            {props.exampleItem2}
                                        </P3>
                                    </Box3>
                                    <Box3 marginTop={10}>
                                        <P3>
                                            {props.exampleItem3}
                                        </P3>
                                    </Box3>
                                    <Box3 marginTop={10}>
                                        <P3>
                                            {props.exampleItem4}
                                        </P3>
                                    </Box3>
                                </CustomCol2Left>
                                <CustomCol2Right>
                                    <Box3 marginTop={10}>
                                        <P3>
                                            {props.exampleItem5}
                                        </P3>
                                    </Box3>
                                    <Box3 marginTop={10}>
                                        <P3>
                                            {props.exampleItem6}
                                        </P3>
                                    </Box3>
                                    <Box3 marginTop={10}>
                                        <P3>
                                            {props.exampleItem7}
                                        </P3>
                                    </Box3>
                                    <Box3 marginTop={10}>
                                        <P3>
                                            {props.exampleItem8}
                                        </P3>
                                    </Box3>
                                </CustomCol2Right>
                            </CustomCol2>
                        </Box3>
                    </Box3>
                </Flex>
            </Flex>
        </ExampleCard>
    )
}

const ExampleCard = styled(Card1)`
    width: 30rem;
    transition: all .3s ease;

    &:hover {
        transform: scale(1.02);
    }

    ${respondTo.xs`
        width: 40rem;
        height: 65rem;
    `}

    ${respondTo.sm`
        width: 58rem;
        height: 58rem;
    `}

    ${respondTo.xl`
        width: 88rem;
        height: 68rem;
    `}
`

const BottomCardContainer = styled.div`
    margin-top: 4rem;

    ${respondTo.sm`
        margin-top: 5rem;
    `}

    ${respondTo.lg`
        margin-top: 0;
    `}
`

const PhotoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 30rem;
    background: ${colors.blue};

    ${respondTo.xl`
        height: 35rem;
    `}
`

const BackgroundPhoto = styled.div`
    position: absoulte;
    width: 100%;
    height: 30rem;
    background-size: cover;
    background-position: center;
    opacity: .2;

    ${respondTo.xl`
        height: 35rem;
    `}
`

const ProductPhoto = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 20rem;
    width: 20rem;
    background-size: cover;
    background-position: center;

    ${respondTo.sm`
        height: 24rem;
        width: 24rem;
    `}

    ${respondTo.xl`
        height: 30rem;
        width: 30rem;
    `}
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
