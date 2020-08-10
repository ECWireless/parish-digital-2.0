import { useState } from 'react'
import styled from 'styled-components'

// Components
import { colors } from '../theme'
import { Box3 } from '../Boxes'
import { Button2 } from '../Buttons'
import { Container, Flex } from '../Containers'
import { H2 } from '../Typography'
import { Input, Label } from '../Forms'

const AuthFalse = ({
    setPassword,
}) => {
    const [tempPassword, setTempPassword] = useState('')

    function onSetTempPassword(e) {setTempPassword(e.target.value)}

    return (
        <FalseBackground>
            <Container style={{ height: '100%'}}>
                <Flex style={{width: '100%', height: '100%'}} align={'center'} justify={'center'} direction={'column'}>
                    <H2 color={colors.white} uppercase center>
                        Employee Login
                    </H2>
                    <Box3 marginTop={50} marginBottom={50}>
                        <form onSubmit={() => setPassword(tempPassword)}>
                            <Box3 marginBottom={25}>
                                <Label uppercase color={colors.white} htmlFor="login__password">
                                    Password:
                                </Label>
                            </Box3>
                            <Input required type="password" id="login__password"
                                value={tempPassword} onChange={onSetTempPassword.bind(this)}
                            />
                            <Box3 marginTop={50}>
                                <Button2 color={colors.black} background={colors.white} tyle="submit">
                                    Login
                                </Button2>
                            </Box3>
                        </form>
                    </Box3>
                </Flex>
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
