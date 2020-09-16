import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import BlockContent from '@sanity/block-content-to-react'
import respondTo from '../Breakpoints'

// Components
import { Container } from '../Containers'
import { Box2 } from '../Boxes'

const Description = ({
    descriptionImage,
    descriptionBodyText,
}) => {
    return (
        <>
            <LargePhoto style={{ backgroundImage: `url(${descriptionImage})` }} />
            <Box2 marginTop={75} marginBottom={75}>
                <Container>
                    <Fade bottom ssrFadeout>
                        <CustomP2>
                            <BlockContent
                                blocks={descriptionBodyText}
                            />
                        </CustomP2>
                    </Fade>
                </Container>
            </Box2>
        </>
    )
}

export default Description

const LargePhoto = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
`

const CustomP2 = styled.div`
    font-size: 1.6rem;
    line-height: 20px;
    letter-spacing: .5px;

    ${respondTo.sm`
        font-size: 1.8rem;
    `}

    ${respondTo.md`
        font-size: 2rem;
    `}

    ${respondTo.xl`
        font-size: 2.6rem;
        line-height: 30px;
    `}
`
