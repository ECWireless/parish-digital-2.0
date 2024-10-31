import Head from 'next/head';
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from 'client'
import { useRef } from 'react';
import { PortableText } from '@portabletext/react'

import ContactForm from 'components/Contact/ContactForm'
import { Container } from 'components/Containers';
import { Box, Button, Flex, Heading, Image, HStack, Spacer, VStack } from '@chakra-ui/react';
import { H1, H3, P4 } from 'components/Typography';

const ptComponents = {
  types: {
    block: ({ value }) => {
      return value.children.map((child) => {
        return (
          <P4
            color="black"
          >
            {child.text}
          </P4>
        );
      });
    },
  },
};

const WhyChooseUs = ({
  introHeading,
  introBody,
  introPhoto,
  introBrands1,
  introBrands2,
  introBrands3,
  introBrands4,
  introBrands5,
  introBrands6,
  introBrands7,
  introBrands8,
}) => {
  const carouselRef = useRef(null);

  const scrollRight = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: 225, behavior: "smooth" });
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
        carouselRef.current.scrollBy({ left: -225, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <Head>
        <title>Why Choose Us | Parish Digital Video Production</title>
      </Head>
      <Box my={{ base: 16, xs: 20, md: 28 }}>
        <Container>
          <Flex direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 16, xs: 20 }} minH="70vh">
            <Image src={urlFor(introPhoto)} alt="Why Choose Us GIF" minH={{ base: '250px', sm: '500px', lg: '100%' }} w={{ base: '100%', lg: '50%' }}/>
            <VStack alignItems="start" spaceY={{ base: 2, xs: 4, md: 6 }} w={{ base: '100%', lg: '50%' }}>
              <H1 color="black">{introHeading}</H1>
              <Spacer />
              <PortableText
                value={introBody}
                components={ptComponents}
              />
            </VStack>
          </Flex>
        </Container>

        <Container>
          <VStack mt={{ base: 16, xs: 20, md: 28 }}>
            <H3 color="black">Brands we’ve worked with:</H3>
          </VStack>
        </Container>

        <Container>
          <HStack justifyContent="center" mt={12} spaceX={8} >
            <Button onClick={scrollLeft} px={{ base: 0, sm: 6 }} variant="ghost">
              <svg fill="none" height="25" viewBox="0 0 27 25"  width="27" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12.5L26.25 0.808657V24.1913L0 12.5Z" fill="#FFD110"/>
              </svg>
            </Button>
              <Box ref={carouselRef} maxW="100%" overflowX="hidden" w="100%">
                <Flex gap="20px" >
                  <Image objectFit="contain" src={urlFor(introBrands1)} h="125px" minW="200px" />
                  <Image objectFit="contain" src={urlFor(introBrands2)} h="125px" minW="200px" />
                  <Image objectFit="contain" src={urlFor(introBrands3)} h="125px" minW="200px" />
                  <Image objectFit="contain" src={urlFor(introBrands4)} h="125px" minW="200px" />
                  <Image objectFit="contain" src={urlFor(introBrands5)} h="125px" minW="200px" />
                  <Image objectFit="contain" src={urlFor(introBrands6)} h="125px" minW="200px" />
                  <Image objectFit="contain" src={urlFor(introBrands7)} h="125px" minW="200px" />
                  <Image objectFit="contain" src={urlFor(introBrands8)} h="125px" minW="200px" />
                </Flex>
              </Box>
            <Button onClick={scrollRight} px={{ base: 0, sm: 6 }} variant="ghost">
              <svg fill="none" height="25" viewBox="0 0 27 25" width="27" xmlns="http://www.w3.org/2000/svg">
                <path d="M27 12.5L0.75 24.1913V0.808657L27 12.5Z" fill="#FFD110"/>
              </svg>
            </Button>
          </HStack>
        </Container>
      </Box>
      <ContactForm
        contactHeading={'Contact Us'}
        contactParagraph={'We can help bring your next project to life'}
      />
    </>
  )
}


function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const query = groq`*[_type == "whyChooseUs" && slug.current == "v1"][0]{
  introHeading,
  introBody,
  introPhoto,
  introBrands1,
  introBrands2,
  introBrands3,
  introBrands4,
  introBrands5,
  introBrands6,
  introBrands7,
  introBrands8,
}`

export async function getStaticProps() {
  const props = await client.fetch(query)
  return { props, revalidate: 10 }
}

export default WhyChooseUs
