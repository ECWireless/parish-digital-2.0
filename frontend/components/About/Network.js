import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'
import { Box1, Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
import { Line } from '../Lines'
import { H3, P4 } from '../Typography'

const Network = ({
    networkHeading,
    networkParagraph,
}) => {
    return (
        <NetworkBackground>
            <Container style={{height: '100%'}}>
                <Flex style={{height: '100%'}} align={'center'} justify={'center'} direction={'column'}>
                    <H3 color={colors.white} center uppercase>
                        {networkHeading}
                    </H3>
                    <Fade ssrFadeout>
                        <Box3 marginTop={25} marginBottom={25}>
                            <Line height={5} width={100} color={colors.yellow} />
                        </Box3>
                    </Fade>
                    <Fade bottom ssrFadeout>
                        <Box1 width={900}>
                            <P4 center color={colors.white}>
                                {networkParagraph}
                            </P4>
                        </Box1>
                    </Fade>
                </Flex>
            </Container>
        </NetworkBackground>
    )
}

export default Network

const NetworkBackground = styled.div`
    height: 30rem;
    width: 100%;
    background: ${colors.blue};

    ${respondTo.xs`
        height: 28rem;
    `}

    ${respondTo.sm`
        height: 30rem;
    `}
`
