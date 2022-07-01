import Link from 'next/link'
import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'

// Components
import { colors } from '../components/theme'
import { Container, Flex } from '../components/Containers'
import { CustomLink } from '../components/Links'
import Spacer from '../components/Spacer'

const Footer = () => {
    return (
		<div style={{width: '100%', background: '#585858', zIndex: 0}}>
			<Spacer size={'md'} />
			<Container>
				<InnerContainer>
					<TextContainer>
						<Flex direction={'column'}>
							<FooterHeading color={colors.white} uppercase>Sitemap</FooterHeading>
							<Spacer size={'xs'} />
							<Link href="/work">
								<ParagraphLink>work</ParagraphLink>
							</Link>
							<Link href="/services">
								<ParagraphLink>services</ParagraphLink>
							</Link>
							<Link href="/gear">
								<ParagraphLink>gear</ParagraphLink>
							</Link>
							<Link href="/about">
								<ParagraphLink>about</ParagraphLink>
							</Link>
							<Link href="/contact">
								<ParagraphLink>contact</ParagraphLink>
							</Link>
						</Flex>

						<Flex direction={'column'} justify={'flex-start'}>
							<FooterHeading color={colors.white} uppercase>Contact</FooterHeading>
							<Spacer size={'xs'} />
							<ParagraphContact color={colors.yellow}>5819 Penn Ave Pittsburgh, PA 15206</ParagraphContact>
							<CustomLink
								href="mailto: hello@parishdigital.com"
								title="Email"
							>
								<ParagraphContact>hello@parishdigital.com</ParagraphContact>
							</CustomLink>
							<CustomLink
								href="tel: 4129513331"
								title="Phone number"
							>
								<ParagraphContact color={colors.yellow}>(412) 951-3331</ParagraphContact>
							</CustomLink>
						</Flex>
					</TextContainer>

					<SmallLogos>
						<CustomLink
							href="https://vimeo.com/parishdigital"
							target="_blank" rel="noopener noreferrer"
							title="Vimeo Page"
						>
							<SmallLogo style={{backgroundImage: `url(/logos/vimeo-icon.png)`}} />
						</CustomLink>
						<CustomLink
							href="https://www.linkedin.com/company/parish-digital-video/"
							target="_blank" rel="noopener noreferrer"
							title="Twitter Page"
						>
							<SmallLogo style={{backgroundImage: `url(/logos/linkedin.png)`}} />
						</CustomLink>
						<CustomLink
							href="https://www.facebook.com/Parish-Digital-Video-Productions-270923643761"
							target="_blank" rel="noopener noreferrer"
							title="Facebook Page"
						>
							<SmallLogo style={{backgroundImage: `url(/logos/facebook.png)`}} />
						</CustomLink>
						<CustomLink
							href="https://www.youtube.com/channel/UCTqzflm7Z0JHZwmHI_MorGw"
							target="_blank" rel="noopener noreferrer"
							title="YouTube Page"
						>
							<SmallLogo style={{backgroundImage: `url(/logos/youtube.png)`}} />
						</CustomLink>
					</SmallLogos>

					<BigLogos>
						<div>
							<CustomLink
								href="https://www.designrush.com/agency/video-production/pennsylvania"
								target="_blank" rel="noopener noreferrer"
								title='Peerspace Article'
							>
								<BigLogoImage alt='top video production companies award' src="/logos/top-companies.png" />
							</CustomLink>
						</div>
						<div>
							<CustomLink
								href="https://www.peerspace.com/resources/corporate-video-production-companies-pittsburgh"
								target="_blank" rel="noopener noreferrer"
								title='Peerspace Article'
							>
								<BigLogoImage alt='peerspace award' src="/logos/best-corporate.png" />
							</CustomLink>
						</div>
						<div>
							<CustomLink
								href="https://upcity.com/local-marketing-agencies/profiles/parish-digital-video"
								target="_blank" rel="noopener noreferrer"
								title='Upcity Marketing Agencies'
							>
								<BigLogoImage alt='upcity logo' src="https://upcity-marketplace.s3.amazonaws.com/badges/43f09c0f05c5717ea1aa9aa0533ce196.png" />
							</CustomLink>
						</div>
					</BigLogos>
				</InnerContainer>
				<Spacer size={'md'} />
				<CustomLine />
				<Spacer size={'sm'} />
			</Container>
			<Spacer size={'sm'} />
		</div>
    )
}

export default Footer

const InnerContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;

	${respondTo.lg`
		justify-content: space-between;
		flex-direction: row;
	`}
`

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 28rem;
	justify-content: space-between;
	tex-align: center;
	width: 32rem;

	div {
		align-items: center;
	}

	${respondTo.lg`
		align-self: flex-start;
		flex-direction: row;
		height: auto;
		width: 32rem;

		div {
			align-items: flex-start;
		}
	`}

	${respondTo.xl`
		width: 50rem;
	`}
`

const ParagraphLink = styled.a`
	color: ${colors.yellow};
	font-size: 1rem;
	letter-spacing: 1px;
	line-height: 20px;

	${respondTo.xl`
		font-size: 1.6rem;
		line-height: 28px;
	`}
	
	&:hover {
		cursor: pointer;
	}
`

const ParagraphContact = styled.p`
	color: ${colors.yellow};
	font-size: 1rem;
	letter-spacing: 1px;
	line-height: 20px;
	margin: 0;
	padding: 0;

	${respondTo.xl`
		font-size: 1.6rem;
		line-height: 28px;
	`}
	
	&:hover {
		cursor: pointer;
	}
`

const SmallLogos = styled.div`
	align-items: center;
	display: flex;
	height: 16rem;
	justify-content: space-between;
	left: 50%;
	width: 13.5rem;

	${respondTo.md`
		height: 20rem;
	`}

	${respondTo.lg`
		height: auto;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
	`}

	${respondTo.xl`
		width: 19rem;
	`}
`

const SmallLogo = styled.div`
	width: 3rem;
	height: 3rem;
	background-position: center;
	background-size: cover;

	${respondTo.xl`
		width: 4rem;
		height: 4rem;
	`}
`

const BigLogos = styled.div`
	width: 22rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${respondTo.xl`
		width: 28rem;
	`}
`

const BigLogoImage = styled.img`
	width: 7rem;
	height: 7rem;

	${respondTo.xl`
		width: 9rem;
		height: 9rem;
	`}
`

const CustomLine = styled.div`
	width: 100%;
	height: 2px;
	background: lightgrey;
`

const FooterHeading = styled.h5`
	font-size: 1rem;
	font-weight: 400;
	letter-spacing: 1px;

	${respondTo.xl`
		font-size: 1.6rem;
	`}

	${props => props.center && css`
		text-align: center;
	`}

	${props => props.uppercase && css`
		text-transform: uppercase;
	`}

	${props => css`
		color: ${props.color}
	`}
`
