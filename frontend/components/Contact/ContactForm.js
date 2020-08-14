import { useState } from 'react'
import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'
import { Box3 } from '../Boxes'
import { Button2 } from '../Buttons'
import { Card1 } from '../Cards'
import { Container, Flex } from '../Containers'
import { Form, Label, Input, TextArea } from '../Forms'
import { H2, P1 } from '../Typography'
import { Line } from '../Lines'
import Spinner from '../Spinner'
import Snackbar from '../Snackbar'

const ContactForm = ({
    contactHeading,
    contactParagraph,
}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [success, setSuccess] = useState(false)

    function onSetName(e) {setName(e.target.value)}
    function onSetEmail(e) {setEmail(e.target.value)}
    function onSetMessage(e) {setMessage(e.target.value)}

    function onSubmit(e) {
        e.preventDefault();
        setLoading(true)
        let state = {
            name: name,
            email: email,
            message: message,
        }
        fetch('https://parish-digital-backend.herokuapp.com/contact',{
        // fetch('http://localhost:8000/service',{
            method: "POST",
            body: JSON.stringify(state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response)=>{
            if (response.status === 'success'){
                console.log('success')
                resetForm();
                setSubmitted(true)
                setSuccess(true)
                setLoading(false)
            } else if(response.status === 'fail'){
                console.log('fail')
                setSubmitted(true)
                setSuccess(false)
                setLoading(false)
            }
        })
        .catch(() => {
            console.log('catch')
            setSubmitted(true)
            setSuccess(false)
            setLoading(false)
        })
    }

    function onCloseSnackbar() {
        setSubmitted(false)
    }

    function resetForm() {
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <>
            <Container>
                <Box3 marginTop={75} marginBottom={75}>
                    <Flex align={'center'} justify={'space-around'}>
                        <Fade ssrFadeout>
                            <CustomLine style={{margin: 0}} height={5} width={250} color={colors.yellow} />
                        </Fade>
                        <H2 uppercase center>
                            {contactHeading}
                        </H2>
                        <Fade ssrFadeout>
                            <CustomLine style={{margin: 0}} height={5} width={250} color={colors.yellow} />
                        </Fade>
                    </Flex>
                    <Box3 marginTop={25}>
                        <P1 center>
                            {contactParagraph}
                        </P1>
                    </Box3>
                </Box3>
                <Box3 style={{width: '100%'}} marginBottom={50}>
                    <Card1>
                        <Box3 marginTop={50}>
                            <Form onSubmit={onSubmit}>
                                <Box3 marginBottom={10}>
                                    <Label uppercase color={colors.blue} htmlFor="service-modal__name">
                                        Name
                                    </Label>
                                </Box3>
                                <Input required type="text" id="service-modal__name" background={'lightgrey'}
                                    value={name} onChange={onSetName.bind(this)}
                                />
                                <Box3 marginTop={25} marginBottom={10}>
                                    <Label uppercase color={colors.blue} htmlFor="service-modal__email">
                                        Email
                                    </Label>
                                </Box3>
                                <Input required type="email" id="service-modal__email" background={'lightgrey'}
                                    value={email} onChange={onSetEmail.bind(this)}
                                />
                                <Box3 marginTop={25} marginBottom={10}>
                                    <Label uppercase color={colors.blue} htmlFor="service-modal__message">
                                        Project Description
                                    </Label>
                                </Box3>
                                <TextArea required id="service-modal__message" className="textarea" background={'lightgrey'}
                                    value={message} onChange={onSetMessage.bind(this)}
                                />
                                <Box3 marginTop={50} marginBottom={50}>
                                    <Button2 color={colors.white} background={colors.blue} type="submit">
                                        {loading ? <Spinner /> : 'Submit'}
                                    </Button2>
                                </Box3>
                            </Form>
                        </Box3>
                    </Card1>
                </Box3>
            </Container>
            { submitted && <Snackbar success={success} onCloseSnackbar={onCloseSnackbar} /> }
        </>
    )
}

export default ContactForm

const CustomLine =  styled(Line)`
    border-radius: 5px;

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
            width: ${props.width * .8}px;
        `}

        ${respondTo.xl`
            width: ${props.width * 1.8}px;
        `}
    `}
`
