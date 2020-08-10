import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'
import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
import { Card1 } from '../Cards'
import { H3, P2 } from '../Typography'

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
                        <H3 uppercase center>
                            {props.exampleHeading}
                        </H3>
                        <Box3 marginTop={40}>
                            <ListContainer>
                                <Flex align={'center'} justify={'center'} direction={'column'}>
                                    <Box3 marginTop={10}>
                                        <P2 center>
                                            {props.exampleItem1}
                                        </P2>
                                    </Box3>
                                    <Box3 marginTop={10}>
                                        <P2 center>
                                            {props.exampleItem2}
                                        </P2>
                                    </Box3>
                                    <Box3 marginTop={10}>
                                        <P2 center>
                                            {props.exampleItem3}
                                        </P2>
                                    </Box3>
                                    <Box3 marginTop={10}>
                                        <P2 center>
                                            {props.exampleItem4}
                                        </P2>
                                    </Box3>
                                </Flex>
                                <Flex align={'center'} justify={'center'} direction={'column'}>
                                    <Box3 marginTop={10}>
                                        <P2 center>
                                            {props.exampleItem5}
                                        </P2>
                                    </Box3>
                                    <Box3 marginTop={10}>
                                        <P2 center>
                                            {props.exampleItem6}
                                        </P2>
                                    </Box3>
                                    <Box3 marginTop={10}>
                                        <P2 center>
                                            {props.exampleItem7}
                                        </P2>
                                    </Box3>
                                    <Box3 marginTop={10}>
                                        <P2 center>
                                            {props.exampleItem8}
                                        </P2>
                                    </Box3>
                                </Flex>
                            </ListContainer>
                        </Box3>
                    </Box3>
                </Flex>
            </Flex>
        </ExampleCard>
    )
}

const ExampleCard = styled(Card1)`
    width: 28rem;
    transition: all .3s ease;

    &:hover {
        transform: scale(1.02);
    }

    ${respondTo.xs`
        width: 40rem;
    `}

    ${respondTo.sm`
        width: 58rem;
    `}

    ${respondTo.xl`
        width: 88rem;
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

const ListContainer = styled(Flex)`
    width: 28rem;
    height: 25rem;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    ${respondTo.xs`
        width: 38rem;
        height: 18rem;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-around;
    `}

    ${respondTo.sm`
        width: 50rem;
        height: 20rem;
    `}

    ${respondTo.xl`
        width: 70rem;
        height: 25rem;
    `}
`
