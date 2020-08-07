import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors, shadows } from '../theme'
import { Box3 } from '../Boxes'
import { Button2 } from '../Buttons'
import { Container, Flex } from '../Containers'
import { Form, Label, Input, TextArea } from '../Forms'
import { H3, P1, P4 } from '../Typography'

const Modal = ({
    open,
    setModal,
}) => {
    return (
        <ModalBackground open={open}>
            <Flex align={'center'} justify={'center'}>
                <Box3 marginTop={40}>
                    <PDLogo style={{ backgroundImage: 'url(./logos/pd_logo.png)'}} />
                </Box3>
                <CloseContainer onClick={() => setModal(false)}>
                    <p>&times;</p>
                </CloseContainer>
            </Flex>
            <OutContainer marginTop={40} style={{overflow: 'scroll'}}>
                <InnerContainer align={'center'} justify={'center'} direction={'column'}>
                    <Box3 marginTop={50}>
                        <H3 center color={colors.yellow}>
                            Thank you for your interest in a Customer Success Story!
                        </H3>
                    </Box3>
                    <Box3 marginTop={40}>
                        <P1 center color={colors.white}>
                            Please fill out the following to receive a Pricing and Process packet via email.
                        </P1>
                    </Box3>
                    <Box3 marginTop={15}>
                        <P1 center color={colors.white}>
                            If you do not receive it, please check your spam folder.
                        </P1>
                    </Box3>
                    <Box3 marginTop={40}>
                        <P4 uppercase center color={colors.white}>
                            You will not be signed up for an email list, promotions, or any other annoyances.
                        </P4>
                    </Box3>
                    <Box3 style={{width: '100%'}} marginTop={40}>
                        <Form onSubmit="">
                            <Box3 marginBottom={10}>
                                <Label uppercase color={colors.white} htmlFor="service-modal__name">
                                    Name
                                </Label>
                            </Box3>
                            <Input required type="text" id="service-modal__name"
                                value="" onChange=""
                            />
                            <Box3 marginTop={25} marginBottom={10}>
                                <Label uppercase color={colors.white} htmlFor="service-modal__email">
                                    Email
                                </Label>
                            </Box3>
                            <Input required type="email" id="service-modal__email"
                                value="" onChange=""
                            />
                            <Box3 marginTop={25} marginBottom={10}>
                                <Label uppercase color={colors.white} htmlFor="service-modal__message">
                                    Message
                                </Label>
                            </Box3>
                            <TextArea required id="service-modal__message" className="textarea"
                                value="" onChange=""
                            />
                            <Box3 marginTop={25} marginBottom={50}>
                                <Button2 color={colors.black} background={colors.white} type="submit">
                                    {/* {this.state.loading ? <Spinner /> : 'Submit'} */}
                                    Submit
                                </Button2>
                            </Box3>
                        </Form>
                    </Box3>
                </InnerContainer>
            </OutContainer>
        </ModalBackground>
    )
}

export default Modal

const ModalBackground = styled(Container)`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;
    opacity: 1;
    height: 90%;
    width: 100%;
    transform: translate(-50%, -50%) scale(1);
    background: #fff;
    box-shadow: ${shadows.sidebar};
    transition: all .3s ease;
    border-radius: 5px;
    background: ${colors.blue};

    ${props => !props.open && css`
		z-index: -1;
		opacity: 0;
        transform: translate(-50%, -50%) scale(.8);
	`}
`

const PDLogo = styled.div`
	height: 3rem;
	width: 3rem;
	background-position: center;
	background-size: cover;

	&:hover {
		cursor: pointer;
		color: ${colors.yellow};
		transition: all .3s ease;
	}

	${respondTo.xs`
		height: 4rem;
		width: 4rem;
    `}

    ${respondTo.lg`
		height: 6rem;
		width: 6rem;
    `}

    ${respondTo.xl`
		height: 8rem;
		width: 8rem;
    `}
`

const CloseContainer = styled.div`
    position: absolute;
    right: 3rem;
    top: 2.5rem;
    width: 50px;
    height: 50px;
    background: #FFF;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
	justify-content: center;
	transition: all .5s ease;
	
	p {
		color: #000;
		font-size: 7rem;
		margin: 0 auto 3px;
		font-weight: 100;
	}

	&:hover {
		p {
			color: #FFF;
		}
	}

    ${respondTo.xs`
        width: 50px;
        height: 50px;
    `}

    ${respondTo.sm`
        width: 60px;
        height: 60px;
    `}

    ${respondTo.md`
    `}

    &:hover {
		background: #000;
        cursor: pointer;
    }

    &:focus {
		background: #000;
        cursor: pointer;
    }

    &:active {
		background: #000;
        cursor: pointer;
    }
`

const OutContainer = styled(Box3)`
    overflow: scroll;
    border: 1px solid ${colors.grey};
    width: 90%;
    height: 75%;
    margin: 0 auto;
    border-radius: 5px;
`

const InnerContainer = styled(Flex)`
    margin: 0 4rem;
`
