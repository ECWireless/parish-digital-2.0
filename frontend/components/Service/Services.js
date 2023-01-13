import styled from 'styled-components'
import respondTo from '../Breakpoints'
import { Flex } from '../Containers'
import { H3, P4 } from '../Typography'

const Services = ({
    servicesPhoto1,
    servicesSubheading1,
    servicesDescription1,
    servicesVideoLink1,
    servicesPhoto2,
    servicesSubheading2,
    servicesDescription2,
    servicesVideoLink2,
    servicesPhoto3,
    servicesSubheading3,
    servicesDescription3,
    servicesVideoLink3,
}) => {
  return (
    <div>
      <ServicesRow
        servicesPhoto={servicesPhoto1}
        servicesSubheading={servicesSubheading1}
        servicesDescription={servicesDescription1}
        servicesVideoLink={servicesVideoLink1}
      />
      <ServicesRow
        servicesPhoto={servicesPhoto2}
        servicesSubheading={servicesSubheading2}
        servicesDescription={servicesDescription2}
        servicesVideoLink={servicesVideoLink2}
      />
      <ServicesRow
        servicesPhoto={servicesPhoto3}
        servicesSubheading={servicesSubheading3}
        servicesDescription={servicesDescription3}
        servicesVideoLink={servicesVideoLink3}
      />
    </div>
  )
}

const ServicesRow = ({
  servicesPhoto,
  servicesSubheading,
  servicesDescription,
  servicesVideoLink,
}) => {
  return (
    <Flex respond>
        <StyledServicesPhotoContainer>
          <ServicesPhoto style={{backgroundImage: `url(${servicesPhoto})` }} />
          <StyledOverlay />
          <StyledTextContainer>
            <H3 center color={'white'} style={{ fontWeight: 700}}>
              {servicesSubheading}
            </H3>
            <P4 center color={'white'}>
              {servicesDescription}
            </P4>
          </StyledTextContainer>
        </StyledServicesPhotoContainer>
        <StyledVideoContainer>
          <iframe 
            width="100%" 
            src={servicesVideoLink}
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          />
        </StyledVideoContainer>
      </Flex>
  )
}

export default Services;

const StyledServicesPhotoContainer = styled.div`
	position: relative;
  height: 300px;
	width: 100%;

  ${respondTo.lg`
    height: auto;
	  width: 30%;
  `}
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  justify-content: center;
	position: absolute;
	padding: 0 30px;

  ${respondTo.sm`
    gap: 40px;
  `}

  ${respondTo.xl`
    gap: 60px;
	  padding: 0 100px;
  `}
`;

const StyledVideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;

  ${respondTo.lg`
    padding-bottom: 39.5%;
    width: 70%;
  `}

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;
