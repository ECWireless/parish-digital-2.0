import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import respondTo from '../Breakpoints'

import { shadows } from '../theme'
import { Box3 } from '../Boxes'
import { Container, Flex } from '../Containers'

const Examples = ({
  examplesLink1,
  examplesLink2,
  examplesLink3,
  examplesLink4,
}) => {
  return (
    <ExamplesBackground>
      <Container>
        <Flex align={'center'} justify={'space-between'} respond>
          <Fade bottom ssrFadeout>
            <Box3 marginBottom={25}>
              <CardContainer>
                <LazyIframe
                  src={examplesLink1}
                  frameborder={0} allowfullscreen
                />
              </CardContainer>
            </Box3>
          </Fade>
          <Fade bottom delay={200} ssrFadeout>
            <Box3 marginBottom={25}>
              <CardContainer>
                {/* <Suspense fallback={<div>Loading...</div>}>
                  <ExampleVideo
                    src={examplesLink2}
                    frameborder={0} allowfullscreen
                  />
                </Suspense> */}
              </CardContainer>
            </Box3>
          </Fade>
        </Flex>
        <Flex align={'center'} justify={'space-between'} respond>
          <Fade bottom ssrFadeout>
            <Box3 marginBottom={25}>
              <CardContainer>
                {/* <Suspense fallback={<div>Loading...</div>}>
                  <ExampleVideo
                    src={examplesLink3}
                    frameborder={0} allowfullscreen
                  />
                </Suspense> */}
              </CardContainer>
            </Box3>
          </Fade>
          <Fade bottom delay={200} ssrFadeout>
            <Box3 marginBottom={25}>
              <CardContainer>
                {/* <Suspense fallback={<div>Loading...</div>}>
                  <ExampleVideo
                    src={examplesLink4}
                    frameborder={0} allowfullscreen
                  />
                </Suspense> */}
              </CardContainer>
            </Box3>
          </Fade>
        </Flex>
      </Container>
    </ExamplesBackground>
  )
}

export default Examples;

import { useEffect, useRef, useState } from 'react';

const LazyIframe = ({ src, ...props }) => {
  const iframeRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px',
      }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <div ref={iframeRef}>
      {isLoaded ? (
        <ExampleVideo src={src} {...props} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

const ExamplesBackground = styled.div`
    width: 100%;
    margin: 4rem auto;

    ${respondTo.lg`
        margin: 5rem auto;
    `}

    ${respondTo.lg`
        margin: 8rem auto;
    `}

    ${respondTo.xl`
        margin: 10rem auto;
    `}
`

const CardContainer = styled.div`
    width: 30rem;
    height: 17rem;

    ${respondTo.xs`
        width: 40rem;
        height: 23rem;
    `}

    ${respondTo.sm`
        width: 59rem;
        height: 34rem;
    `}

    ${respondTo.xl`
        width: 88rem;
        height: 50rem;
    `}
`

const ExampleVideo = styled.iframe`
    height: 100%;
    width: 100%;
    box-shadow: ${shadows.card};
`
