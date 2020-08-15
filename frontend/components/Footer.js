import Link from 'next/link'
import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'

// Components
import { colors } from '../components/theme'
import { Box3 } from '../components/Boxes'
import { Container, Flex } from '../components/Containers'
import { CustomLink } from '../components/Links'
import { H4, P1, P2 } from '../components/Typography'

const Footer = () => {
    return (
        <FooterContainer>
			<Container>
				<Flex align={'center'} justify={'center'} direction={'column'}>
					<UpperFooter>
						<Sitemap>
							<Box3 marginTop={50}>
								<H4 color={colors.white} uppercase>Sitemap</H4>
							</Box3>
							<Box3 marginTop={25}>
								<SmallLine />
							</Box3>
							<Box3 marginTop={25}>
								<Link href="/about">
									<ParagraphLink color={colors.yellow}>about</ParagraphLink>
								</Link>
							</Box3>
							<Box3 marginTop={25}>
								<Link href="/service">
									<ParagraphLink color={colors.yellow}>services</ParagraphLink>
								</Link>
							</Box3>
							<Box3 marginTop={25}>
								<Link href="/work">
									<ParagraphLink color={colors.yellow}>work</ParagraphLink>
								</Link>
							</Box3>
							<Box3 marginTop={25}>
								<Link href="/gear">
									<ParagraphLink color={colors.yellow}>gear</ParagraphLink>
								</Link>
							</Box3>
							<Box3 marginTop={25} marginBottom={50}>
								<Link href="/contact">
									<ParagraphLink color={colors.yellow}>contact</ParagraphLink>
								</Link>
							</Box3>
						</Sitemap>
						<BigLogo1>
							<CustomLink
								href="https://www.peerspace.com/resources/corporate-video-production-companies-pittsburgh"
								target="_blank" rel="noopener noreferrer"
							>
								<BigLogoImage src="./logos/best-corporate.png" />
							</CustomLink>
						</BigLogo1>
						<BigLogo2>
							<CustomLink
								href="https://upcity.com/local-marketing-agencies/profiles/parish-digital-video"
								target="_blank" rel="noopener noreferrer"
							>
								<BigLogoImage src="https://upcity-marketplace.s3.amazonaws.com/badges/43f09c0f05c5717ea1aa9aa0533ce196.png" />
							</CustomLink>
						</BigLogo2>
						<Contact>
							<Box3 marginTop={50}>
								<H4 color={colors.white} uppercase>Contact</H4>
							</Box3>
							<Box3 marginTop={25}>
								<SmallLine />
							</Box3>
							<Box3 marginTop={25}>
								<P1 color={colors.yellow}>5819 Penn Ave Pittsburgh, PA 15206</P1>
							</Box3>
							<Box3 marginTop={25}>
								<CustomLink
									href="mailto: hello@parishdigital.com"
								>
									<P1 color={colors.yellow}>hello@parishdigital.com</P1>
								</CustomLink>
							</Box3>
							<Box3 marginTop={25} marginBottom={50}>
								<CustomLink
									href="tel: 4129513331"
								>
									<P1 color={colors.yellow}>(412) 951-3331</P1>
								</CustomLink>
							</Box3>
						</Contact>
					</UpperFooter>

					<CustomLine />

					<LowerFooter>
						<Copyright>
							<Box3 marginTop={50} marginBottom={50}>
								<P2 color={colors.white}>© All Rights Reserved Parish Digital Video Production</P2>
							</Box3>
						</Copyright>
						<SmallLogos>
							<SmallLogo style={{backgroundImage: `url(./logos/vimeo-icon.png)`}} />
							<SmallLogo style={{backgroundImage: `url(./logos/linkedin.png)`}} />
							<SmallLogo style={{backgroundImage: `url(./logos/facebook.png)`}} />
							<SmallLogo style={{backgroundImage: `url(./logos/youtube.png)`}} />
						</SmallLogos>
					</LowerFooter>
				</Flex>
			</Container>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
	width: 100%;
	background: linear-gradient(#585858, #393939);
    z-index: 0;
`

const UpperFooter = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 32rem 20rem 20rem 30rem;

	${respondTo.xs`
		grid-template-rows: 35rem 20rem 20rem 30rem;
	`}

	${respondTo.sm`
		grid-template-columns: 1fr;
		grid-template-rows: 38rem 20rem 20rem 30rem;
	`}

	${respondTo.lg`
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr;
	`}
`

const Sitemap = styled.div`
	grid-row: 1 / 2;
	grid-column: 1 / 2;
	text-align: center;

	${respondTo.lg`
		text-align: left;
	`}
`

const SmallLine = styled.div`
	width: 10rem;
	height: 2px;
	background: lightgrey;
	margin: 0 auto;

	${respondTo.lg`
		margin: 0;
	`}
`

const ParagraphLink = styled.a`
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
        font-size: 2.2rem;
        line-height: 25px;
    `}

    ${respondTo.xl`
        font-size: 2.8rem;
        line-height: 25px;
	`}
	
	&:hover {
		cursor: pointer;
	}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => css`
        color: ${props.color}
    `}
`

const BigLogo1 = styled.div`
	grid-column: 1 / 2;
	grid-row: 2 / 3;
	width: 30rem;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	${respondTo.xs`
		width: 38rem;
	`}

	${respondTo.lg`
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		justify-content: flex-end;
		margin-right: 2rem;
	`}
`

const BigLogo2 = styled.div`
	grid-column: 1 / 2;
	grid-row: 3 / 4;
	width: 30rem;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	${respondTo.xs`
		width: 38rem;
	`}

	${respondTo.lg`
		grid-column: 3 / 4;
		grid-row: 1 / 2;
		justify-content: flex-start;
		margin-left: 2rem;
	`}
`

const BigLogoImage = styled.img`
	width: 15rem;
	height: 15rem;
`

const Contact = styled.div`
	grid-column: 1 / 2;
	grid-row: 4 / 5;
	text-align: center;

	${respondTo.lg`
		text-align: left;
		grid-column: 4 / 5;
		grid-row: 1 / 2;
	`}
`

const CustomLine = styled.div`
	width: 100%;
	height: 2px;
	background: lightgrey;
`

const LowerFooter = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 10rem 10rem;

	${respondTo.md`
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
	`}
`

const Copyright = styled.div`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	text-align: center;

	${respondTo.md`
		text-align: left;
	`}
`

const SmallLogos = styled.div`
	grid-column: 1 / 2;
	grid-row: 2 / 3;
	display: flex;
	align-items: flex-start;
	justify-content: center;

	${respondTo.md`
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		justify-content: flex-end;
		align-items: center;
	`}
`

const SmallLogo = styled.div`
	width: 6rem;
	height: 6rem;
	background-position: center;
	background-size: cover;
	margin-right: 1rem;
`
