import { useState } from 'react'
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

import { colors } from '../theme'
import { Box3 } from '../Boxes'
import { Button4 } from '../Buttons'
import { Card1 } from '../Cards'
import { Container, Flex } from '../Containers'
import { Label, Input, TextArea } from '../Forms'
import { H3, P4, P5 } from '../Typography'
import { Line } from '../Lines'
import Spinner from '../Spinner'
import Snackbar from '../Snackbar'

const ContactFormNew = ({
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
      <Flex align={'center'} respond>
        <StyledForm onSubmit={onSubmit}>
          <StyledInnerContainer>
            <Box3 marginBottom={75}>
              <H3 color={colors.white} center uppercase center weight={700}>
                {contactHeading}
              </H3>
            </Box3>
            <Flex direction={'column'}>
              <Box3 marginBottom={10}>
                <Label uppercase color={colors.white} htmlFor="contact__name">
                  Name
                </Label>
              </Box3>
              <Input style={{ width: '100%' }} required type="text" id="contact__name" background={'#fff'}
                value={name} onChange={onSetName.bind(this)}
              />
              <Box3 marginTop={25} marginBottom={10}>
                <Label uppercase color={colors.white} htmlFor="contact__email">
                  Email
                </Label>
              </Box3>
              <Box3 marginBottom={35}>
                <Input style={{ width: '100%' }} required type="email" id="contact__email" background={'#fff'}
                  value={email} onChange={onSetEmail.bind(this)}
                />
              </Box3>
              <Box3 marginBottom={10}>
                <Label uppercase color={colors.white} htmlFor="contact__message">
                  Project Description
                </Label>
              </Box3>
              <TextArea required id="contact__message" className="textarea" background={'#fff'}
                value={message} onChange={onSetMessage.bind(this)}
              />
            </Flex>
            <Box3 marginTop={40}>
              <Flex justify={'flex-end'}>
                <Button4 color={colors.white} background={colors.blue} type="submit">
                  {loading ? <Spinner color={colors.white} /> : 'SUBMIT'}
                </Button4>
              </Flex>
            </Box3>
          </StyledInnerContainer>
        </StyledForm>
        <StyledRightContainer>
          <Flex align={'center'}>
            <Image src="/icons/phone.png" height={30} width={30} />
            <P4 style={{ marginLeft: '20px' }}>(412) 951-3331</P4>
          </Flex>
          <Flex align={'center'}>
            <Image src="/icons/email.svg" height={30} width={30} />
            <P4 style={{ marginLeft: '20px' }}>hello@parishdigital.com</P4>
          </Flex>
          <Flex align={'center'}>
            <Image src="/icons/pin.svg" height={30} width={30} />
            <P4 style={{ marginLeft: '20px' }}>5819 Penn Ave Pittsburgh, PA 15206</P4>
          </Flex>
        </StyledRightContainer>
      </Flex>
      { submitted && <Snackbar success={success} onCloseSnackbar={onCloseSnackbar} /> }
    </>
  )
}

export default ContactFormNew

const StyledForm = styled.form`
  background: ${colors.brown};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 0;

  ${respondTo.sm`
    width: 100%;
    padding: 75px 0;
  `}

  ${respondTo.md`
    padding: 100px 0;
  `}

  ${respondTo.lg`
    width: 50%;
  `}
`

const StyledInnerContainer = styled.div`
  margin: 0 auto;
  width: 290px;

  ${respondTo.xs`
    width: 310px;
  `}

  ${respondTo.sm`
    width: 360px;
  `}

  ${respondTo.md`
    width: 400px;
  `}

  ${respondTo.lg`
    width: 460px;
  `}
  
  ${respondTo.xl`
    width: 520px;
  `}
`;

const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 50px 0;
  width: 300px;
  height: 300px;

  ${respondTo.xs`
    width: 350px;
  `}

  ${respondTo.lg`
    padding: 0;
    width: 350px;
    height: 300px;
  `}

  ${respondTo.xl`
    width: 500px;
    height: 400px;
  `}
`;
