import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';

import respondTo from '../Breakpoints';
import { colors } from '../theme';
import { Box3 } from '../Boxes';
import { Button4 } from '../Buttons';
import { Card1 } from '../Cards';
import { Flex } from '../Containers';
import { Form, Label, Input, TextArea } from '../Forms';
import { H4, P4 } from '../Typography';
import { Line } from '../Lines';
import Spinner from '../Spinner';
import Snackbar from '../Snackbar';

const ContactForm = ({ contactHeading }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notRobot, setNotRobot] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showRecaptchaError, setShowRecaptchaError] = useState(false);

  useEffect(() => {
    setShowRecaptchaError(false);
  }, [notRobot]);

  function onSetName(e) {
    setName(e.target.value);
  }
  function onSetEmail(e) {
    setEmail(e.target.value);
  }
  function onSetMessage(e) {
    setMessage(e.target.value);
  }

  const onSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);

      if (!notRobot) {
        setShowRecaptchaError(true);
        throw new Error('Please verify that you are not a robot.');
      }

      let state = {
        name,
        email,
        message,
      };
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });
      if (res.status === 200) {
        console.log('success');
        resetForm();
        setSubmitted(true);
        setSuccess(true);
        setLoading(false);
      } else {
        throw new Error('An error occurred. Please try again later.');
      }
    } catch (e) {
      setSubmitted(true);
      setSuccess(false);
      setLoading(false);
    }
  };

  function onCloseSnackbar() {
    setSubmitted(false);
  }

  function resetForm() {
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <>
      <Box3 style={{ width: '100%' }}>
        <Card1 style={{ background: colors.brown }}>
          <Form onSubmit={onSubmit}>
            <Box3 marginBottom={75}>
              <Flex align={'center'} justify={'space-between'}>
                <Fade ssrFadeout>
                  <CustomLine
                    style={{ margin: 0 }}
                    height={5}
                    width={100}
                    color={colors.yellow}
                  />
                </Fade>
                <H4 color={colors.white} uppercase center weight={700}>
                  {contactHeading}
                </H4>
                <Fade ssrFadeout>
                  <CustomLine
                    style={{ margin: 0 }}
                    height={5}
                    width={100}
                    color={colors.yellow}
                  />
                </Fade>
              </Flex>
              {/* <Box3 marginTop={25}>
                <P5 color={colors.white} center>
                  {contactParagraph}
                </P5>
              </Box3> */}
            </Box3>
            <Flex justify={'space-between'} respond>
              <StyledFormHalf>
                <Box3 marginBottom={10}>
                  <Label uppercase color={colors.white} htmlFor="contact__name">
                    Name
                  </Label>
                </Box3>
                <Input
                  required
                  type="text"
                  id="contact__name"
                  background={'#fff'}
                  value={name}
                  onChange={onSetName.bind(this)}
                />
                <Box3 marginTop={25} marginBottom={10}>
                  <Label
                    uppercase
                    color={colors.white}
                    htmlFor="contact__email"
                  >
                    Email
                  </Label>
                </Box3>
                <Box3 marginBottom={35}>
                  <Input
                    required
                    type="email"
                    id="contact__email"
                    background={'#fff'}
                    value={email}
                    onChange={onSetEmail.bind(this)}
                  />
                </Box3>
              </StyledFormHalf>
              <StyledFormHalf>
                <Box3 marginBottom={10}>
                  <Label
                    uppercase
                    color={colors.white}
                    htmlFor="contact__message"
                  >
                    Project Description
                  </Label>
                </Box3>
                <TextArea
                  required
                  id="contact__message"
                  className="textarea"
                  background={'#fff'}
                  value={message}
                  onChange={onSetMessage.bind(this)}
                />
              </StyledFormHalf>
            </Flex>
            <ReCAPTCHA
              onChange={() => setNotRobot(!notRobot)}
              sitekey={process.env.RECAPTCHA_API_KEY}
              size="compact"
            />
            {showRecaptchaError && (
              <P4 color={colors.red} marginTop={10}>
                Please verify that you are not a robot.
              </P4>
            )}
            <Box3 marginTop={20}>
              <Flex justify={'flex-end'}>
                <Button4
                  color={colors.white}
                  background={colors.blue}
                  type="submit"
                >
                  {loading ? <Spinner color={colors.white} /> : 'Submit'}
                </Button4>
              </Flex>
            </Box3>
          </Form>
        </Card1>
      </Box3>
      {submitted && (
        <Snackbar success={success} onCloseSnackbar={onCloseSnackbar} />
      )}
    </>
  );
};

export default ContactForm;

const CustomLine = styled(Line)`
  border-radius: 5px;

  ${props =>
    props.width &&
    css`
      width: ${props.width * 0.4}px;

      ${respondTo.xs`
      width: ${props.width * 0.6}px;
    `}

      ${respondTo.sm`
      width: ${props.width * 0.8}px;
    `}

    ${respondTo.md`
      width: ${props.width * 1}px;
    `}

    ${respondTo.lg`
      width: ${props.width * 1.2}px;
    `}

    ${respondTo.xl`
      width: ${props.width * 1.8}px;
    `}
    `}
`;

const StyledFormHalf = styled.div`
  width: 100%;

  ${respondTo.lg`
    width: 50%;
  `}
`;
