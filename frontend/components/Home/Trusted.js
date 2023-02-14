import styled from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors } from '../theme'
import { Flex } from '../Containers'

const Trusted = ({
  trustedHeading,
  trustedLogo1,
  trustedLogo2,
  trustedLogo3,
  trustedLogo4,
  trustedLogo5,
}) => {
  return (
    <TrustedBackground>
      <StyledTrustedHeading center uppercase>
        {trustedHeading}
      </StyledTrustedHeading>
      <StyledLogoContainerInner>
        {trustedLogo1 && <TrustedLogo style={{backgroundImage: `url(${trustedLogo1})`}} />}
        {trustedLogo2 && <TrustedLogo style={{backgroundImage: `url(${trustedLogo2})`}} />}
        {trustedLogo3 && <TrustedLogo style={{backgroundImage: `url(${trustedLogo3})`}} />}
        {trustedLogo4 && <TrustedLogo style={{backgroundImage: `url(${trustedLogo4})`}} />}
        {trustedLogo5 && <TrustedLogo style={{backgroundImage: `url(${trustedLogo5})`}} />}
      </StyledLogoContainerInner>
    </TrustedBackground>
  )
}

export default Trusted;


const TrustedBackground = styled.div`
  background: ${colors.brown};
  width: 100%;
  maxHeight: 1010px;
  padding: 0 0 40px 0;

  ${respondTo.sm`
    maxHeight: 460px;
  `}

  ${respondTo.lg`
    height: 200px;
    padding: 0
  `}
`

const StyledTrustedHeading = styled.div`
  font-size: 1.2rem;
  color: ${colors.white};
  line-height: 20px;
  letter-spacing: .5px;
  margin: 0 auto;
  padding-top: 20px;
  text-align: center;
`;

const StyledLogoContainerInner = styled(Flex)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

  ${respondTo.lg`
    flex-wrap: nowrap;
  `}
`;

const TrustedLogo = styled.div`
  height: 80px;
  width: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${respondTo.sm`
    height: 100px;
  `}

  ${respondTo.md`
    height: 100px;
    margin-right: 20px;
  `}

  ${respondTo.lg`
    margin-top: 32px;
    width: 200px;
  `}

  ${respondTo.xl`
    height: 80px;
    width: 240px;
  `}
`
