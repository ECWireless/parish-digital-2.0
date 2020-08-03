import styled from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'

const Features = () => {
    return (
        <FeaturesBackground>
            Features
        </FeaturesBackground>
    )
}

export default Features

const FeaturesBackground = styled.div`
    width: 100%;
    background: ${colors.blue};
`
