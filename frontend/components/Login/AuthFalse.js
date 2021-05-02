import { useState, useEffect } from 'react'
import styled from 'styled-components'

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
    fetch('https://staging.parishdigital.com/api/auth', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': window.sessionStorage.getItem('token')
      }
    })
    .then(response => response.json())
    .then(resp => {
      if (resp.loggedIn) {
        loggedIn(true)
      }
    })
    .catch(err => {
      console.log(err)
    })
    setLoading(false);
  }, []);

  function onSetTempPassword(e) {
    setTempPassword(e.target.value)
  }

  function submit(e) {
    e.preventDefault();
    setLoading(true);

    fetch('https://staging.parishdigital.com/api/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        password: tempPassword
      })
    })
    .then(response => response.json())
    .then(resp => {
      if (!resp.token) {
        console.log('Failed login!')
        setWrongPassword(true);
        setLoading(false);
      } else {
        window.sessionStorage.setItem('token', resp.token);
        fetch('https://staging.parishdigital.com/api/auth', {
          method: 'put',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': window.sessionStorage.getItem('token')
          }
        })
        .then(response => response.json())
        .then(resp => {
          if (resp) {
            loggedIn(true)
          }
        })
        .catch(console.log)
      }
    })
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
                  <Label uppercase color={colors.white} htmlFor="login__password">
                    Password:
                  </Label>
                </Box3>
                <Input required type="password" id="login__password"
                  value={tempPassword} onChange={onSetTempPassword.bind(this)}
                />
                <Box3 marginTop={50}>
                  <Button2 color={colors.black} background={colors.white} type="submit">
                    {loading ? <Spinner /> : 'Login'}
                  </Button2>
                </Box3>
                <Spacer size={'xs'} />
                {wrongPassword && <P4 color={colors.yellow}>Wrong Password</P4>}
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
