import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import respondTo from '../Breakpoints'

// Components
import { colors, shadows } from '../theme'
import { Box1, Box3 } from '../Boxes'
import { Card1 } from '../Cards'
import { Container, Flex } from '../Containers'
import { Line } from '../Lines'
import { H3, H4, P4 } from '../Typography'

const Crew = ({
  crewHeading,
  crewParagraph,
  crew1Name,
  crew1Position,
  crew1Paragraph1,
  crew1Paragraph2,
  crew1Photo,
  crew2Name,
  crew2Position,
  crew2Paragraph1,
  crew2Paragraph2,
  crew2Photo,
  crew3Name,
  crew3Position,
  crew3Paragraph1,
  crew3Paragraph2,
  crew3Photo,
  crew4Name,
  crew4Position,
  crew4Paragraph1,
  crew4Paragraph2,
  crew4Photo,
}) => {
  return (
    <Container>
      <Fade bottom ssrFadeout>
        <Box1 marginTop={50} marginBottom={50}>
          <Card1>
            <Flex style={{width: '100%'}} align={'center'} justify={'center'} direction={'column'}>
              <H3 uppercase>
                {crewHeading}
              </H3>
              <Fade ssrFadeout>
                <Box3 marginTop={25} marginBottom={25}>
                    <Line height={5} width={100} color={colors.yellow} />
                </Box3>
              </Fade>
              <Fade bottom ssrFadeout>
                <TextBox>
                  <P4>
                    {crewParagraph}
                  </P4>
                </TextBox>
                </Fade>
                <Flex style={{width: '70%'}} align={'center'} justify={'space-between'} respond>
                  <Fade delay={200} bottom ssrFadeout>
                    <Box3 marginTop={50}>
                    <TeamCard
                      crewPhoto={crew1Photo}
                      crewName={crew1Name}
                      crewPosition={crew1Position}
                      crewParagraph1={crew1Paragraph1}
                      crewParagraph2={crew1Paragraph2}
                    />
                    </Box3>
                  </Fade>
                  <Fade delay={400} bottom ssrFadeout>
                    <Box3 marginTop={50}>
                      <TeamCard
                        crewPhoto={crew2Photo}
                        crewName={crew2Name}
                        crewPosition={crew2Position}
                        crewParagraph1={crew2Paragraph1}
                        crewParagraph2={crew2Paragraph2}
                      />
                    </Box3>
                  </Fade>
                </Flex>
              <Flex style={{width: '70%'}} align={'center'} justify={'space-between'} respond>
                <Fade delay={600} bottom ssrFadeout>
                  <Box3 marginTop={50}>
                    <TeamCard
                      crewPhoto={crew3Photo}
                      crewName={crew3Name}
                      crewPosition={crew3Position}
                      crewParagraph1={crew3Paragraph1}
                      crewParagraph2={crew3Paragraph2}
                    />
                  </Box3>
                  Test
                </Fade>
                <Fade delay={600} bottom ssrFadeout>
                  <Box3 marginTop={50}>
                    <TeamCard
                      crewPhoto={crew4Photo}
                      crewName={crew4Name}
                      crewPosition={crew4Position}
                      crewParagraph1={crew4Paragraph1}
                      crewParagraph2={crew4Paragraph2}
                    />
                  </Box3>
                </Fade>
              </Flex>
            </Flex>
          </Card1>
        </Box1>
      </Fade>
    </Container>
  )
}

export default Crew

const TeamCard = ({
  crewPhoto,
  crewName,
  crewPosition,
  crewParagraph1,
  crewParagraph2,
}) => {
  return (
    <TeamPhoto style={{backgroundImage: `url(${crewPhoto})`}}>
      <div id="about__team-crew-hover">
        <Box3 paddingTop={50}>
          <H3 uppercase center color={colors.white}>
            {crewName}
          </H3>
        </Box3>
        <Box3 paddingTop={15}>
          <H4 center color={colors.yellow}>
            {crewPosition}
          </H4>
        </Box3>
        <Fade ssrFadeout>
          <Box3 marginTop={15}>
            <Line height={5} width={50} color={colors.yellow} />
          </Box3>
        </Fade>
        <Box3 paddingTop={25} paddingRight={25} paddingLeft={25}>
          <ParagraphText color={colors.white}>
            {crewParagraph1}
          </ParagraphText>
        </Box3>
        <Box3 paddingTop={5} paddingRight={25} paddingLeft={25}>
          <ParagraphText color={colors.white}>
            {crewParagraph2}
          </ParagraphText>
        </Box3>
      </div>
    </TeamPhoto>
  )
}

const TextBox = styled.div`
    ${respondTo.lg`
        width: 90rem;
    `}
`

const TeamPhoto = styled.div`
    width: 25rem;
    height: 50rem;
    background-size: cover;
    background-position: center;
    box-shadow: ${shadows.card};
    transition: all .3s ease;

    ${respondTo.xs`
        width: 35rem;
        height: 45rem;
    `}

    ${respondTo.sm`
        width: 36rem;
        height: 55rem;
    `}

    ${respondTo.xl`
        width: 54rem;
        height: 72rem;
    `}

    #about__team-crew-hover {
        opacity: 0;
        transition: all .5s ease;
        background: rgba(78,96,119, .9);
        height: 100%;
    }

    &:hover,
    &:focus,
    &:active {
        box-shadow: ${shadows.sidebar};

        #about__team-crew-hover {
            opacity: 1;
        }
    }
`

const ParagraphText = styled.p`
    font-size: 1.1rem;
    line-height: 20px;
    letter-spacing: .5px;
    color: ${colors.white};

    ${respondTo.xs`
    `}

    ${respondTo.sm`
        font-size: 1.4rem;
    `}

    ${respondTo.md`
        font-size: 1.6rem;
    `}

    ${respondTo.xl`
        font-size: 2.2rem;
        line-height: 30px;
    `}
`
