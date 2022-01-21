import Fade from 'react-reveal/Fade';
import styled, { css } from 'styled-components'
import respondTo from '../Breakpoints'

import { colors, shadows } from '../theme'
import { Box3 } from '../Boxes'
import { Flex } from '../Containers'
import { H2, P1, P4 } from '../Typography'
import { Line } from '../Lines'

const Services = ({
	servicesHeading,
	servicesSubheading1,
	servicesList1Item1,
	servicesList1Item2,
	servicesList1Item3,
	servicesList1Item4,
	// servicesList1Item5,
	// servicesList1Item6,
	// servicesList1Item7,
	// servicesList1Item8,
	// servicesList1Item9,
	servicesPhoto1,
	servicesSubheading2,
	servicesList2Item1,
	servicesList2Item2,
	servicesList2Item3,
	servicesList2Item4,
	servicesList2Item5,
	// servicesList2Item6,
	servicesPhoto2,
}) => {
	return (
		<StyledContainer>
			<Box3 marginTop={75} marginBottom={75}>
					<Flex align={'center'} justify={'space-between'}>
						<Fade ssrFadeout>
							<CustomLine style={{margin: 0}} height={5} width={250} color={colors.yellow} />
						</Fade>
						<H2 uppercase center>
							{servicesHeading}
						</H2>
						<Fade ssrFadeout>
							<CustomLine style={{margin: 0}} height={5} width={250} color={colors.yellow} />
						</Fade>
					</Flex>
				</Box3>
				<Flex respond>
					<ServicesPhoto style={{backgroundImage: `url(${servicesPhoto1})` }} />
					<Flex direction={'column'} justify={'center'}>
						<P1 weight={600} uppercase>
							{servicesSubheading1}
						</P1>
						<Fade ssrFadeout>
							<Box3 marginTop={25} marginBottom={25}>
								<Line style={{margin: 0}} height={5} width={100} color={colors.yellow} />
							</Box3>
						</Fade>
						<Fade bottom ssrFadeout>
							<Box3 marginTop={10}>
								<P4 weight={200}>
									{servicesList1Item1}
								</P4>
							</Box3>
							<Box3 marginTop={10}>
								<P4 weight={200}>
									{servicesList1Item2}
								</P4>
							</Box3>
							<Box3 marginTop={10}>
								<P4 weight={200}>
									{servicesList1Item3}
								</P4>
							</Box3>
							<Box3 marginTop={10}>
								<P4 weight={200}>
									{servicesList1Item4}
								</P4>
							</Box3>
							<Box3 marginTop={10} marginBottom={50}>
								<P4 weight={200}>
									{servicesList1Item5}
								</P4>
							</Box3>
						</Fade>
					</Flex>
				</Flex>
				<Flex respond>
					<ServicesPhoto style={{backgroundImage: `url(${servicesPhoto2})` }} />
					<Flex direction={'column'} justify={'center'}>
						<P1 weight={600} uppercase>
							{servicesSubheading2}
						</P1>
						<Fade ssrFadeout>
							<Box3 marginTop={25} marginBottom={25}>
								<Line style={{margin: 0}} height={5} width={100} color={colors.yellow} />
							</Box3>
						</Fade>
						<Fade bottom ssrFadeout>
							<Box3 marginTop={10}>
								<P4 weight={200}>
									{servicesList2Item1}
								</P4>
							</Box3>
							<Box3 marginTop={10}>
								<P4 weight={200}>
									{servicesList2Item2}
								</P4>
							</Box3>
							<Box3 marginTop={10}>
								<P4 weight={200}>
									{servicesList2Item3}
								</P4>
							</Box3>
							<Box3 marginTop={10}>
								<P4 weight={200}>
									{servicesList2Item4}
								</P4>
							</Box3>
							<Box3 marginTop={10} marginBottom={50}>
								<P4 weight={200}>
									{servicesList2Item5}
								</P4>
							</Box3>
						</Fade>
					</Flex>
				</Flex>
			{/* <Container>
			</Container> */}
		</StyledContainer>
	)
}

export default Services

const StyledContainer = styled.div`
	position: relative;
	width: 300px;
	margin: auto;

	${respondTo.xs`
		width: 400px;
	`}

	${respondTo.sm`
		width: 600px;
	`}

	${respondTo.md`
		width: 800px;
	`}

	${respondTo.lg`
		width: 900px;
	`}

	${respondTo.xl`
		width: 1400px;
	`}
`;

const CustomLine =  styled(Line)`
	border-radius: 5px;
    
	${props => props.width && css`
		width: ${props.width * .08}px;

		${respondTo.xs`
				width: ${props.width * .2}px;
		`}

		${respondTo.sm`
				width: ${props.width * .5}px;
		`}

		${respondTo.md`
				width: ${props.width * .6}px;
		`}

		${respondTo.lg`
				width: ${props.width}px;
		`}

		${respondTo.xl`
				width: ${props.width * 1.8}px;
		`}
	`}
`

const ServicesPhoto =  styled.div`
	width: 100%;
	height: 350px;
	margin-bottom: 30px;
	margin-right: 30px;
	background-size: cover;
	background-position: center;
	box-shadow: ${shadows.card};

	${respondTo.lg`
		height: 400px;
		margin-bottom: 50px;
		margin-right: 50px;
		width: 55%;
	`}

	${respondTo.xl`
		height: 500px;
	`}
`
