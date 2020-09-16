import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

// Components
import { Container } from '../Containers'
import { Box2, Box3 } from '../Boxes'
import { P2 } from '../Typography'

const Description = () => {
    return (
        <>
            <LargePhoto />
            <Box2 marginTop={75} marginBottom={75}>
                <Container>
                    <Fade bottom ssrFadeout>
                        <Box3 marginBottom={25}>
                            <P2><span style={{fontWeight: 'bold'}}>Pre-recorded content</span> puts your presenter in front of the camera in a safe, controlled space. You have the option to have a multi-camera set-up and incorporate Powerpoint presentations. This can also include custom animations, already existing footage, and multiple presenters. We follow strict COVID-19 production safety precautions, we work as time effeciently as possible, and we limit crew size.</P2>
                        </Box3>
                        <Box3 marginBottom={25}>
                            <P2>Looking for real-time audience engagment? <span style={{fontWeight: 'bold'}}>Live streaming</span> is the path for you. We have a live stream rental kit for video conferencing that can be used with any major video conferencing app or software. Additionally, we provide in-studio or on-location streaming set ups if you are looking to move away from the “webcam” aesthetic.</P2>
                        </Box3>
                        <Box3 marginBottom={25}>
                            <P2><span style={{fontWeight: 'bold'}}>Combine pre-recorded content with live streaming</span> to give your virtual event a high production value. Utilize both mediums to effectively tell your story and relay your message to your audience. We have the ability to stream your pre-recorded content on a day and time of your choosing.</P2>
                        </Box3>
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
    background-image: url(/photos/podcast.jpg);
    background-size: cover;
    background-position: center;
`
