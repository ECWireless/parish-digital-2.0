import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'
import { Box3 } from '../Boxes'
import { Flex } from '../Containers'
import { H3 } from '../Typography'

const Trusted = ({
    trustedHeading,
    trustedLogo1,
    trustedLogo2,
    trustedLogo3,
    trustedLogo4,
    trustedLogo5,
    trustedLogo6,
}) => {
    return (
        <>
            <H3 center uppercase>
                {trustedHeading}
            </H3>
            <Box3 marginTop={25}>
                <TrustedBackground>
                    <Flex respond style={{height: '100%'}} align={'center'} justify={'space-around'}>
                        <TrustedLogo style={{backgroundImage: `url(${trustedLogo1})`}} />
                        <TrustedLogo style={{backgroundImage: `url(${trustedLogo2})`}} />
                        <TrustedLogo style={{backgroundImage: `url(${trustedLogo3})`}} />
                        <TrustedLogo style={{backgroundImage: `url(${trustedLogo4})`}} />
                        <TrustedLogo style={{backgroundImage: `url(${trustedLogo5})`}} />
                        <TrustedLogo style={{backgroundImage: `url(${trustedLogo6})`}} />
                    </Flex>
                </TrustedBackground>
            </Box3>
        </>
    )
}

export default Trusted

const TrustedBackground = styled.div`
    background: ${colors.brown};
    width: 100%;
    height: 100rem;

    ${respondTo.lg`
        height: 20rem;
    `}

    ${respondTo.xl`
        height: 25rem;
    `}
`

const TrustedLogo = styled.div`
    height: 16rem;
    width: 20rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    ${respondTo.sm`
        height: 8rem;
    `}

    ${respondTo.lg`
        height: 15rem;
        margin-top: 0;
    `}

    ${respondTo.xl`
        height: 15rem;
        width: 25rem;
    `}
`
