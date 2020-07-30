import styled from 'styled-components'
import respondTo from '../components/Breakpoints'

// Components
import { Box1, Box3 } from '../components/Boxes'
import { Container, Flex } from '../components/Containers'
import { CustomLink } from '../components/Links'
import { P2 } from '../components/Typography'
import { colors } from './theme'

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <Flex align={'center'} justify={'center'} respond>
					<LeftContainer>
						<LogoContainer>
							<PDLogo style={{ backgroundImage: 'url(./logos/pd_logo.png)'}} />
							<Box1 marginTop={15}>
								<LogoCaption>Parish Digital</LogoCaption>
							</Box1>
						</LogoContainer>
						<CustomLink
							href="https://upcity.com/local-marketing-agencies/lists/top-video-production-companies-in-the-united-states"
							target="_blank" rel="noopener noreferrer"
						>
							<img src="https://upcity-marketplace.s3.amazonaws.com/badges/43f09c0f05c5717ea1aa9aa0533ce196.png" width="80px" height="80px" />
						</CustomLink>
					</LeftContainer>
                    <Flex direction={'column'}>
                        <CustomLink  href="mailto: hello@parishdigital.com" color={colors.white} hover={colors.yellow}>
                            <P2 center>hello@parishdigital.com</P2>
                        </CustomLink>
                        <Box3 marginTop={10}>
                            <CustomLink  href="tel: 4129513331" color={colors.white} hover={colors.yellow}>
                                <P2 center>(412) 951-3331</P2>
                            </CustomLink>
                        </Box3>
                        <Box3 marginTop={30}>
                            <P2 color={colors.white} center>5819 Penn Ave</P2>
                        </Box3>
                        <Box3 marginTop={10}>
                            <P2 color={colors.white} center>Pittsburgh, PA 15206</P2>
                        </Box3>
                    </Flex>
                    <SocialContainer>
                        <Box3 marginRight={10}>
                            <CustomLink  href="https://vimeo.com/parishdigital" target="_blank" rel="noopener noreferrer">
                                <SocialLogo style={{ backgroundImage: 'url(./logos/vimeo-icon.png)'}} />
                            </CustomLink>
                        </Box3>
                        <Box3>
                            <CustomLink  href="https://www.linkedin.com/company/parish-digital-video/" target="_blank" rel="noopener noreferrer">
                                <SocialLogo style={{ backgroundImage: 'url(./logos/linkedin.png)'}} />
                            </CustomLink>
                        </Box3>
                        <Box3 marginRight={10} marginTop={10}>
                            <CustomLink  href="https://www.facebook.com/Parish-Digital-Video-Productions-270923643761" target="_blank" rel="noopener noreferrer">
                                <SocialLogo style={{ backgroundImage: 'url(./logos/facebook.png)'}} />
                            </CustomLink>
                        </Box3>
                        <Box3 marginTop={10}>
                            <CustomLink  href="https://www.youtube.com/channel/UCTqzflm7Z0JHZwmHI_MorGw" target="_blank" rel="noopener noreferrer">
                                <SocialLogo style={{ backgroundImage: 'url(./logos/youtube.png)'}} />
                            </CustomLink>
                        </Box3>
                    </SocialContainer>
                </Flex>
            </Container>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
	width: 100%;
	height: 60rem;
	background: linear-gradient(#585858, #393939);
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	flex-direction: column;
    z-index: 0;

	${respondTo.md`
		height: 25rem;
	`}
`

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-right: 2rem;
`

const LeftContainer = styled.div`
	position: static;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	margin-bottom: 6rem;

	${respondTo.md`
		margin-bottom: 0;
		position: absolute;
		top: 0;
		left: 0;
	`}
`

const PDLogo = styled.div`
	height: 6rem;
	width: 6rem;
	background-position: center;
	background-size: cover;

	&:hover {
		cursor: pointer;
		color: ${colors.yellow};
		transition: all .3s ease;
	}

	${respondTo.md`
		height: 8rem;
		width: 8rem;
	`}
`

const LogoCaption = styled.p`
	color: #fff;
	font-size: 1.6rem;

	${respondTo.xs`
		font-size: 1.8rem;
    `}

	&:hover {
		cursor: pointer;
		color: ${colors.yellow};
		transition: all .3s ease;
	}
`

const SocialContainer = styled.div`
	position: static;
	width: 15rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-top: 6rem;

	${respondTo.md`
		margin-top: 0;
		position: absolute;
		top: 1rem;
		right: 0;
	`}
`

const SocialLogo = styled.div`
	height: 5rem;
	width: 5rem;
	background-position: center;
    background-size: cover;
    transition: all .5s ease;
    border-radius: 50%;

	&:hover {
		cursor: pointer;
        border: 1px solid ${colors.yellow};
        transform: scale(1.05);
	}

	${respondTo.xs`
		height: 5rem;
		width: 5rem;
    `}
`
