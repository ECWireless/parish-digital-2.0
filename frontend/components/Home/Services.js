import styled from 'styled-components'

import Spacer from '../Spacer'
import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'
import { H3, P4 } from '../Typography'

const Services = ({
  servicesPhoto1,
  servicesSubheading1,
  servicesDescription1,
  servicesPhoto2,
  servicesSubheading2,
  servicesDescription2,
  servicesPhoto3,
  servicesSubheading3,
  servicesDescription3,
}) => {
	return (
		<Container>
			<Box3 marginBottom={60}>
				<Flex respond>
					<StyledServicesPhotoContainer>
						<ServicesPhoto style={{backgroundImage: `url(${servicesPhoto1})` }} />
						<StyledOverlay />
						<StyledTextContainer>
							<H3 center color={'white'} style={{ fontWeight: 700, height: '80px', lineHeight: '40px'}}>
								{servicesSubheading1}
							</H3>
							<Spacer size={'sm'} />
							<P4 center color={'white'} style={{ lineHeight: '24px'}}>
								{servicesDescription1}
							</P4>
						</StyledTextContainer>
					</StyledServicesPhotoContainer>
					<StyledServicesPhotoContainer>
						<ServicesPhoto style={{backgroundImage: `url(${servicesPhoto2})` }} />
						<StyledOverlay />
						<StyledTextContainer>
							<H3 center color={'white'} style={{ fontWeight: 700, height: '80px', lineHeight: '40px'}}>
								{servicesSubheading2}
							</H3>
							<Spacer size={'sm'} />
							<P4 center color={'white'} style={{ lineHeight: '24px'}}>
								{servicesDescription2}
							</P4>
						</StyledTextContainer>
					</StyledServicesPhotoContainer>
					<StyledServicesPhotoContainer>
						<ServicesPhoto style={{backgroundImage: `url(${servicesPhoto3})` }} />
						<StyledOverlay />
						<StyledTextContainer>
							<H3 center color={'white'} style={{ fontWeight: 700, height: '80px', lineHeight: '40px'}}>
								{servicesSubheading3}
							</H3>
							<Spacer size={'sm'} />
							<P4 center color={'white'} style={{ lineHeight: '24px'}}>
								{servicesDescription3}
							</P4>
						</StyledTextContainer>
					</StyledServicesPhotoContainer>
				</Flex>
			</Box3>
		</Container>
	)
}

export default Services

const StyledServicesPhotoContainer = styled.div`
	position: relative;
	height: 450px;
	width: 100%;
`;

const ServicesPhoto =  styled.div`
	background-position: center;
	background-size: cover;
	height: 100%;
	position: absolute;
	width: 100%;
`;

const StyledOverlay = styled.div`
	background-color: rgba(0, 0, 0, 0.7);
	height: 100%;
	position: absolute;
	width: 100%;
`;

const StyledTextContainer = styled.div`
	position: absolute;
	padding: 80px 40px;
`;
