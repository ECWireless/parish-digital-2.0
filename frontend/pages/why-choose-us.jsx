import Head from 'next/head';
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from 'client'
import { useRef } from 'react';
import { PortableText } from '@portabletext/react'

import ContactForm from 'components/Contact/ContactForm'
import { Container } from 'components/Containers';
import { Box, Button, Flex, Heading, Image, HStack, Spacer, VStack, Stack } from '@chakra-ui/react';
import { H1, H3, H4, P4 } from 'components/Typography';

const ptComponents = {
  types: {
    block: ({ value }) => {
      return (
        <P4 color="black">
          {value.children.map((child) => {
            return (
              <span
                key={child._key}
                style={{ fontWeight: child.marks.includes('strong') ? 700 : 400 }}
              >
                {child.text}
              </span>
            );
          })}
        </P4>
      )
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
  testimonialsHeading1,
  testimonialsHeading2,
  testimonialsTestimonial1,
  testimonialsLogo1,
  testimonialsTestimonial2,
  testimonialsLogo2,
  testimonialsTestimonial3,
  testimonialsLogo3,
  testimonialsTestimonial4,
  testimonialsLogo4,
  testimonialsTestimonial5,
  testimonialsLogo5,
  testimonialsTestimonial6,
  testimonialsLogo6,
  testimonialsTestimonial7,
  testimonialsLogo7,
  testimonialsTestimonial8,
  testimonialsLogo8,
  testimonialsTestimonial9,
  testimonialsLogo9,
  testimonialsTestimonial10,
  testimonialsLogo10,
  testimonialsTestimonial11,
  testimonialsLogo11,
  testimonialsTestimonial12,
  testimonialsLogo12,
  testimonialsTestimonial13,
  testimonialsLogo13,
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
                components={ptComponents}
                value={introBody}
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
                  <Image alt="brand logo 1" objectFit="contain" src={urlFor(introBrands1)} h="125px" minW="200px" />
                  <Image alt="brand logo 2" objectFit="contain" src={urlFor(introBrands2)} h="125px" minW="200px" />
                  <Image alt="brand logo 3" objectFit="contain" src={urlFor(introBrands3)} h="125px" minW="200px" />
                  <Image alt="brand logo 4" objectFit="contain" src={urlFor(introBrands4)} h="125px" minW="200px" />
                  <Image alt="brand logo 5" objectFit="contain" src={urlFor(introBrands5)} h="125px" minW="200px" />
                  <Image alt="brand logo 6" objectFit="contain" src={urlFor(introBrands6)} h="125px" minW="200px" />
                  <Image alt="brand logo 7" objectFit="contain" src={urlFor(introBrands7)} h="125px" minW="200px" />
                  <Image alt="brand logo 8" objectFit="contain" src={urlFor(introBrands8)} h="125px" minW="200px" />
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

      <Box bgColor="#E0E0E0" py={{ base: 16, xs: 20, md: 28 }}>
        <Container>
          <VStack >
            <H4 color="black" weight={700}>{testimonialsHeading1}</H4>
            <H4 color="black" weight={700}>{testimonialsHeading2}</H4>
          </VStack>
          <Box bgColor="white" border="3px solid #707070" mt={10} p={{ base: 8, sm: 20 }}>
            <VStack
              css={{
                '&::-webkit-scrollbar': {
                  width: '10px',
                },
                '&::-webkit-scrollbar-track': {
                  border: '2px solid #707070',
                  width: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: "#FFD110",
                },
              }}
              maxH={{ base: '400px', lg: '500px' }}
              overflowY="scroll"
              pl={{ base: 2, sm: 8 }}
              pr={{ base: 4, sm: 20 }}
              spaceY={10}
            >
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponents}
                  value={testimonialsTestimonial1}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo1)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponents}
                  value={testimonialsTestimonial2}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo2)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponents}
                  value={testimonialsTestimonial3}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo3)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponents}
                  value={testimonialsTestimonial4}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo4)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponents}
                  value={testimonialsTestimonial5}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo5)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponents}
                  value={testimonialsTestimonial6}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo6)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponents}
                  value={testimonialsTestimonial7}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo7)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponents}
                  value={testimonialsTestimonial8}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo8)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponents}
                  value={testimonialsTestimonial9}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo9)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponents}
                  value={testimonialsTestimonial10}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo10)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponents}
                  value={testimonialsTestimonial11}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo11)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponents}
                  value={testimonialsTestimonial12}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo12)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponents}
                  value={testimonialsTestimonial13}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo13)} />
              </Stack>
            </VStack>
          </Box>
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
  testimonialsHeading1,
  testimonialsHeading2,
  testimonialsTestimonial1,
  testimonialsLogo1,
  testimonialsTestimonial2,
  testimonialsLogo2,
  testimonialsTestimonial3,
  testimonialsLogo3,
  testimonialsTestimonial4,
  testimonialsLogo4,
  testimonialsTestimonial5,
  testimonialsLogo5,
  testimonialsTestimonial6,
  testimonialsLogo6,
  testimonialsTestimonial7,
  testimonialsLogo7,
  testimonialsTestimonial8,
  testimonialsLogo8,
  testimonialsTestimonial9,
  testimonialsLogo9,
  testimonialsTestimonial10,
  testimonialsLogo10,
  testimonialsTestimonial11,
  testimonialsLogo11,
  testimonialsTestimonial12,
  testimonialsLogo12,
  testimonialsTestimonial13,
  testimonialsLogo13,
}`

export async function getStaticProps() {
  const props = await client.fetch(query)
  return { props, revalidate: 10 }
}

export default WhyChooseUs
