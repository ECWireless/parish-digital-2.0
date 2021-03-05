import Link from 'next/link'
import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'

// Components
import { colors } from '../components/theme'
import { Box3 } from '../components/Boxes'
import { Container, Flex } from '../components/Containers'
import { CustomLink } from '../components/Links'
import Spacer from '../components/Spacer'
import { H4, P1, P2, P3 } from '../components/Typography'

const Footer = () => {
    return (
		<div style={{width: '100%', background: 'linear-gradient(#585858, #393939)', zIndex: 0}}>
			<Spacer size={'md'} />
			<Container>
				<InnerContainer>
					<TextContainer>
						<Flex direction={'column'}>
							<H4 color={colors.white} uppercase>Sitemap</H4>
							<Spacer size={'sm'} />
							<Link href="/about">
								<ParagraphLink>about</ParagraphLink>
							</Link>
							<Spacer size={'xs'} />
							<Link href="/service">
								<ParagraphLink>services</ParagraphLink>
							</Link>
							<Spacer size={'xs'} />
							<Link href="/virtual">
								<ParagraphLink>virtual</ParagraphLink>
							</Link>
							<Spacer size={'xs'} />
							<Link href="/work">
								<ParagraphLink>work</ParagraphLink>
							</Link>
							<Spacer size={'xs'} />
							<Link href="/gear">
								<ParagraphLink>gear</ParagraphLink>
							</Link>
							<Spacer size={'xs'} />
							<Link href="/contact">
								<ParagraphLink>contact</ParagraphLink>
							</Link>
						</Flex>

						<Flex direction={'column'}>
							<H4 color={colors.white} uppercase>Contact</H4>
							<Spacer size={'sm'} />
							<P3 color={colors.yellow}>5819 Penn Ave Pittsburgh, PA 15206</P3>
							<Spacer size={'xs'} />
							<CustomLink
								href="mailto: hello@parishdigital.com"
								title="Email"
							>
								<P3 color={colors.yellow}>hello@parishdigital.com</P3>
							</CustomLink>
							<Spacer size={'xs'} />
							<CustomLink
								href="tel: 4129513331"
								title="Phone number"
							>
								<P3 color={colors.yellow}>(412) 951-3331</P3>
							</CustomLink>
						</Flex>
					</TextContainer>

					<SmallLogos>
						<CustomLink
							href="https://vimeo.com/parishdigital"
							target="_blank" rel="noopener noreferrer"
							title="Vimeo Page"
						>
							<SmallLogo style={{backgroundImage: `url(./logos/vimeo-icon.png)`}} />
						</CustomLink>
						<CustomLink
							href="https://www.linkedin.com/company/parish-digital-video/"
							target="_blank" rel="noopener noreferrer"
							title="Twitter Page"
						>
							<SmallLogo style={{backgroundImage: `url(./logos/linkedin.png)`}} />
						</CustomLink>
						<CustomLink
							href="https://www.facebook.com/Parish-Digital-Video-Productions-270923643761"
							target="_blank" rel="noopener noreferrer"
							title="Facebook Page"
						>
							<SmallLogo style={{backgroundImage: `url(./logos/facebook.png)`}} />
						</CustomLink>
						<CustomLink
							href="https://www.youtube.com/channel/UCTqzflm7Z0JHZwmHI_MorGw"
							target="_blank" rel="noopener noreferrer"
							title="YouTube Page"
						>
							<SmallLogo style={{backgroundImage: `url(./logos/youtube.png)`}} />
						</CustomLink>
					</SmallLogos>

					<BigLogos>
						<div>
							<CustomLink
								href="https://www.peerspace.com/resources/corporate-video-production-companies-pittsburgh"
								target="_blank" rel="noopener noreferrer"
								title='Peerspace Article'
							>
								<BigLogoImage alt='peerspace award' src="./logos/best-corporate.png" />
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
				<Spacer size={'md'} />
			</Container>
			<Spacer size={'md'} />
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
	height: 40rem;
	justify-content: space-between;
	tex-align: center;
	width: 32rem;

	div {
		align-items: center;
	}

	${respondTo.xs`
		align-self: flex-start;
		flex-direction: row;
		height: auto;
		width: 35rem;

		div {
			align-items: flex-start;
		}
	`}

	${respondTo.sm`
		width: 42rem;
	`}

	${respondTo.md`
		width: 48rem;
	`}

	${respondTo.lg`
		width: 44rem;
	`}

	${respondTo.xl`
		width: 55rem;
	`}
`

const ParagraphLink = styled.a`
	color: ${colors.yellow};
	font-size: 1.4rem;
    line-height: 20px;
    letter-spacing: 1px;

    ${respondTo.xs`
        font-size: 1.6rem;
    `}

    ${respondTo.sm`
        font-size: 1.8rem;
    `}

    ${respondTo.md`
        font-size: 2rem;
    `}

    ${respondTo.lg`
        font-size: 2rem;
        line-height: 20px;
    `}

    ${respondTo.xl`
        font-size: 2.4rem;
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
	width: 18rem;

	${respondTo.xs`
		height: 20rem;
	`}

	${respondTo.lg`
		height: auto;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
	`}

	${respondTo.xl`
		width: 22rem;
	`}
`

const SmallLogo = styled.div`
	width: 4rem;
	height: 4rem;
	background-position: center;
	background-size: cover;

	${respondTo.xl`
		width: 5rem;
		height: 5rem;
	`}
`

const BigLogos = styled.div`
	width: 22rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const BigLogoImage = styled.img`
	width: 10rem;
	height: 10rem;
`

const CustomLine = styled.div`
	width: 100%;
	height: 2px;
	background: lightgrey;
`
