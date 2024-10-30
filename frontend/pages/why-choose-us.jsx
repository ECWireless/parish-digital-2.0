import Head from 'next/head';
import { useRef } from 'react';

import ContactForm from 'components/Contact/ContactForm'
import { Container } from 'components/Containers';
import { Box, Button, Flex, HStack, Spacer, VStack } from '@chakra-ui/react';
import { H1, H3, P4 } from 'components/Typography';

const WhyChooseUs = () => {
  const carouselRef = useRef(null);

  const scrollRight = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
      }
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const { scrollLeft } = carouselRef.current;

      if (scrollLeft <= 10) {
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollWidth,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <Head>
        <title>Why Choose Us | Parish Digital Video Production</title>
      </Head>
      <Box my={28}>
        <Container>
          <Flex gap={20} minH="70vh">
            <div style={{ width: '50%', minH: '100%', backgroundColor: 'grey' }} />
            <VStack alignItems="start" spaceY={6} w="50%">
              <H1 color="black">Why Choose Us</H1>
              <Spacer />
              <P4 color="black">
                Parish Digital Video Production stands out in the digital landscape for its commitment to bringing stories to life through stunning visuals and compelling narratives. With a team of experienced professionals passionate about filmmaking, Parish Digital offers services covering every aspect of video production. From pre-production planning and creative direction to post-production editing and custom animations, we ensure that every project is handled with the utmost care and professionalism.
              </P4>
              <P4 color="black">
                We offer comprehensive support for projects of various scales. Whether you require filming, photography, editing, animation, or post-production services, we are equipped to assist you.
              </P4>
              <P4 color="black">
                We have completed projects with clients in many different industries including manufacturing, real estate, education, insurance, finance, consumer goods, media, sports, and non-profits, among others.
              </P4>
              <P4 color="black">
                We have experience supporting clients with their commercials, product showcases, event promotions, branding, corporate messaging, public relations, educational materials, interviews, and social media content.
              </P4>
              <P4 color="black">
                Choosing Parish Digital means investing in a partnership that values creativity and delivers results that exceed expectations. With a deep understanding of marketing and storytelling, we ensure your project will captivate and engage your viewers. Choose Parish Digital Video Production to elevate your brand’s digital media and harness the power of video for unparalleled results.
              </P4>
            </VStack>
          </Flex>
        </Container>

        <Container>
          <VStack mt={28}>
            <H3 color="black">Brands we’ve worked with:</H3>
          </VStack>
        </Container>

        <HStack justifyContent="center" mt={12} spaceX={8} >
          <Button onClick={scrollLeft} px={6} variant="ghost">
            <svg fill="none" height="25" viewBox="0 0 27 25"  width="27" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12.5L26.25 0.808657V24.1913L0 12.5Z" fill="#FFD110"/>
            </svg>
          </Button>
          <Container>
            <Box ref={carouselRef} maxW="100%" overflowX="hidden" w="100%">
              <Flex gap={10} >
                <Box h="150px" minW="250px" bg="grey" />
                <Box h="150px" minW="250px" bg="grey" />
                <Box h="150px" minW="250px" bg="grey" />
                <Box h="150px" minW="250px" bg="grey" />
                <Box h="150px" minW="250px" bg="grey" />
                <Box h="150px" minW="250px" bg="grey" />
                <Box h="150px" minW="250px" bg="grey" />
                <Box h="150px" minW="250px" bg="grey" />
              </Flex>
            </Box>
          </Container>
          <Button onClick={scrollRight} px={6} variant="ghost">
            <svg fill="none" height="25" viewBox="0 0 27 25" width="27" xmlns="http://www.w3.org/2000/svg">
              <path d="M27 12.5L0.75 24.1913V0.808657L27 12.5Z" fill="#FFD110"/>
            </svg>
          </Button>
        </HStack>
      </Box>
      <ContactForm
        contactHeading={'Contact Us'}
        contactParagraph={'We can help bring your next project to life'}
      />
    </>
  )
}

export default WhyChooseUs
