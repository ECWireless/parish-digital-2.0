import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'
import { Box3 } from '../Boxes'
import { Button2 } from '../Buttons'
import { Flex } from '../Containers'
import { H2 } from '../Typography'

const Pricing = ({
    setModal,
    pricingHeading,
    pricingButtonText,
    pricingPhoto,
}) => {
    return (
        <PricingBackground style={{ backgroundImage: `url(${pricingPhoto})`}}>
            <BlackOverlay />
            <BlueOverlay />
            <Flex style={{height:'100%'}} align={'center'} justify={'center'} direction={'column'}>
                <Fade bottom ssrFadeout>
                    <H2 style={{ zIndex: 1, fontWeight: 600 }} center uppercase color={colors.white}>
                        {pricingHeading}
                    </H2>
                </Fade>
                <Fade delay={200} bottom ssrFadeout>
                    <Box3 marginTop={25} style={{zIndex: 1}}>
                        <Button2 onClick={() => setModal(true)} width={300} background={colors.white} color={colors.black}>
                            {pricingButtonText}
                        </Button2>
                    </Box3>
                </Fade>
            </Flex>
        </PricingBackground>
    )
}

export default Pricing

const PricingBackground = styled.div`
    width: 100%;
    height: 40rem;
    background-size: cover;
    background-position: center;
    position: relative;
`

const BlackOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,.2));
`

const BlueOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.blue};
    opacity: .4;
`
