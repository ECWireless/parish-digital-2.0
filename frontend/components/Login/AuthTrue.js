import { useState } from 'react'
import styled from 'styled-components'

// Components
import { colors } from '../theme'
import { Box2, Box3 } from '../Boxes'
import { Button1, Button2 } from '../Buttons'
import { Container, Flex } from '../Containers'
import { CustomLink } from '../Links'

const AuthTrue = ({
    setLoggedIn,
    loginBackgroundPhoto,
    loginBackgroundPhoto2,
    loginAlexSubmitHoursLink,
    loginMikeSubmitHoursLink,
    loginAlexTimesheetLink,
    loginMikeTimesheetLink,
    loginScottSubmitHoursLink,
    loginScottTimesheetLink,
}) => {
    function logout() {
        window.sessionStorage.removeItem('token')
        setLoggedIn(false)
    }

    return (
        <>
            <AuthTrueBackground style={{backgroundImage: `url(${loginBackgroundPhoto})`}}>
                <Container>
                    <Flex aling={'center'} justify={'center'}>
                        <Box3 marginTop={50}>
                            <Button1 onClick={logout}>
                                Logout
                            </Button1>
                        </Box3>
                    </Flex>
                    <Box2 marginTop={150}>
                        <Flex aling={'center'} justify={'space-between'}>
                            <CustomLink
                                href={loginAlexSubmitHoursLink}
                                target='_blank' rel='noopener noreferrer'
                            >
                                <Button2 style={{marginLeft: 0}} color={colors.black} background={colors.white}>
                                    Alex Submit Hours
                                </Button2>
                            </CustomLink>
                            <CustomLink
                                href={loginMikeSubmitHoursLink}
                                target='_blank' rel='noopener noreferrer'
                            >
                                <Button2 style={{marginRight: 0}} color={colors.black} background={colors.white}>
                                    Mike Submit Hours
                                </Button2>
                            </CustomLink>
                        </Flex>
                    </Box2>
                    <Box3 marginTop={50}>
                        <Flex aling={'center'} justify={'space-between'}>
                            <CustomLink
                                href={loginAlexTimesheetLink}
                                target='_blank' rel='noopener noreferrer'
                            >
                                <Button2 style={{marginLeft: 0}} color={colors.black} background={colors.white}>
                                    Alex Timesheet
                                </Button2>
                            </CustomLink>
                            <CustomLink
                                href={loginMikeTimesheetLink}
                                target='_blank' rel='noopener noreferrer'
                            >
                                <Button2 style={{marginRight: 0}} color={colors.black} background={colors.white}>
                                    Mike Timesheet
                                </Button2>
                            </CustomLink>
                        </Flex>
                    </Box3>
                </Container>
            </AuthTrueBackground>
            <AuthTrueBackground2 style={{backgroundImage: `url(${loginBackgroundPhoto2})`}}>
                <Container>
                    <Box2 paddingTop={150}>
                        <Flex aling={'center'} justify={'space-between'}>
                            <CustomLink
                                href={loginScottSubmitHoursLink}
                                target='_blank' rel='noopener noreferrer'
                            >
                                <Button2 style={{marginLeft: 0}} color={colors.black} background={colors.white}>
                                    Scott Submit Hours
                                </Button2>
                            </CustomLink>
                            <CustomLink
                                href={loginScottTimesheetLink}
                                target='_blank' rel='noopener noreferrer'
                            >
                                <Button2 style={{marginLeft: 0}} color={colors.black} background={colors.white}>
                                    Scott Timesheet
                                </Button2>
                            </CustomLink>
                        </Flex>
                    </Box2>
                </Container>
            </AuthTrueBackground2>
        </>
    )
}

export default AuthTrue

const AuthTrueBackground = styled.div`
    height: 80vh;
    width: 100%;
    background-position: center;
    background-size: cover;
`

const AuthTrueBackground2 = styled.div`
    height: 80vh;
    width: 100%;
    background-position: center;
    background-size: cover;
`
