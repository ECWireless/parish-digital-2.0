import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Magic } from 'magic-sdk'

// Components
import { colors } from '../theme'
import { Box1, Box3 } from '../Boxes'
import { Button2 } from '../Buttons'
import { Container, Flex } from '../Containers'
import Spacer from '../Spacer'
import Spinner from '../Spinner'
import { H2, P4 } from '../Typography'
import { Input, Label } from '../Forms'

const AuthFalse = ({
    loggedIn,
}) => {
  const [tempPassword, setTempPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (document.cookie.includes('authed')) {
      loggedIn(true);
    }
    setLoading(false);
  }, []);

  function onSetTempPassword(e) {
    setTempPassword(e.target.value)
  }

  const submit = async (e) => {
    e.preventDefault()

    const { elements } = e.target
    const email = elements.email.value;
    const emailEnd = email.split('@')[1];

    if (emailEnd !== 'parishdigital.com') {
      setWrongPassword(true);
      return;
    }

    const did = await new Magic(process.env.MAGIC_PUBLISHABLE_KEY)
      .auth
      .loginWithMagicLink({ email: elements.email.value })

    // Once we have the token from magic,
    // update our own database

    const authRequest = await fetch('/api/login', {
      method: 'POST',
      headers: { Authorization: `Bearer ${did}` }
    })
  
    if (authRequest.ok) {
      // We successfully logged in, our API
      // set authorization cookies and now we
      // can redirect to the dashboard!
      loggedIn(true);
    } else {
      loggedIn(false);
    }
  }

  return (
    <FalseBackground>
      <Container style={{ height: '100%'}}>
        <Box1 paddingTop={100}>
          <Flex style={{width: '100%', height: '100%'}} align={'center'} justify={'flex-start'} direction={'column'}>
            <H2 color={colors.white} uppercase center>
              Employee Login
            </H2>
            <Box3 marginTop={50} marginBottom={50}>
              <form onSubmit={submit}>
                <Box3 marginBottom={25}>
                  <Label uppercase color={colors.white} htmlFor="login__email">
                    PD Email:
                  </Label>
                </Box3>
                <Input name={'email'} required type={'email'} id="login__email"
                  value={tempPassword} onChange={onSetTempPassword.bind(this)}
                />
                <Box3 marginTop={50}>
                  <Button2 color={colors.black} background={colors.white} type="submit">
                    {loading ? <Spinner /> : 'Login'}
                  </Button2>
                </Box3>
                <Spacer size={'xs'} />
                {wrongPassword && <P4 color={colors.yellow}>You must use a PD email.</P4>}
              </form>
            </Box3>
          </Flex>
        </Box1>
      </Container>
    </FalseBackground>
  )
}

export default AuthFalse

const FalseBackground = styled.div`
    height: 90vh;
    width: 100%;
    background: ${colors.black};
`
