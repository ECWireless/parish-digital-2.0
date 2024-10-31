import Head from 'next/head';
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from 'client'
import { useRef } from 'react';
import { PortableText } from '@portabletext/react'

import ContactForm from 'components/Contact/ContactForm'
import { Container } from 'components/Containers';
import { Box, Button, Flex, Image, HStack, Link, Spacer, VStack, Stack } from '@chakra-ui/react';
import { H1, H3, H4, P4 } from 'components/Typography';

const ptComponentsBlack = {
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

const ptComponentsWhite = {
  types: {
    block: ({ value }) => {
      return (
        <VStack color="white" textAlign="center">
          {value.children.map((child) => {
            return (
              <P4
                key={child._key}
                style={{ marginTop: "20px"}}
              >
                {child.text}
              </P4>
            );
          })}
        </VStack>
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
  awardsHeading,
  awardsAward1Image,
  awardsAward1Link,
  awardsAward2Image,
  awardsAward2Link,
  awardsAward3Image,
  awardsAward3Link,
  awardsAward4Image,
  awardsAward4Link,
  processHeading,
  processParagraph,
  processStep1Heading,
  processStep1Paragraph,
  processStep1Icon,
  processStep2Heading,
  processStep2Paragraph,
  processStep2Icon,
  processStep3Heading,
  processStep3Paragraph,
  processStep3Icon,
  processStep4Heading,
  processStep4Paragraph,
  processStep4Icon,
  processStep5Heading,
  processStep5Paragraph,
  processStep5Icon,
  commitmentHeading,
  commitmentBody,
  commitmentImage,
  setsUsApartHeading,
  setsUsApartBody,
  setsUsApartImage,
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
                components={ptComponentsBlack}
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
                  <Image alt="brand logo 1" objectFit="contain" src={urlFor(introBrands1)} h="125px" minW="200px" maxW="200px" />
                  <Image alt="brand logo 2" objectFit="contain" src={urlFor(introBrands2)} h="125px" minW="200px" maxW="200px" />
                  <Image alt="brand logo 3" objectFit="contain" src={urlFor(introBrands3)} h="125px" minW="200px" maxW="200px" />
                  <Image alt="brand logo 4" objectFit="contain" src={urlFor(introBrands4)} h="125px" minW="200px" maxW="200px" />
                  <Image alt="brand logo 5" objectFit="contain" src={urlFor(introBrands5)} h="125px" minW="200px" maxW="200px" />
                  <Image alt="brand logo 6" objectFit="contain" src={urlFor(introBrands6)} h="125px" minW="200px" maxW="200px" />
                  <Image alt="brand logo 7" objectFit="contain" src={urlFor(introBrands7)} h="125px" minW="200px" maxW="200px" />
                  <Image alt="brand logo 8" objectFit="contain" src={urlFor(introBrands8)} h="125px" minW="200px" maxW="200px" />
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
                  components={ptComponentsBlack}
                  value={testimonialsTestimonial1}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo1)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponentsBlack}
                  value={testimonialsTestimonial2}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo2)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponentsBlack}
                  value={testimonialsTestimonial3}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo3)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponentsBlack}
                  value={testimonialsTestimonial4}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo4)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponentsBlack}
                  value={testimonialsTestimonial5}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo5)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponentsBlack}
                  value={testimonialsTestimonial6}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo6)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponentsBlack}
                  value={testimonialsTestimonial7}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo7)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponentsBlack}
                  value={testimonialsTestimonial8}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo8)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponentsBlack}
                  value={testimonialsTestimonial9}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo9)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponentsBlack}
                  value={testimonialsTestimonial10}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo10)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponentsBlack}
                  value={testimonialsTestimonial11}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo11)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponentsBlack}
                  value={testimonialsTestimonial12}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo12)} />
              </Stack>
              <Stack alignItems="center" direction={{ base: 'column-reverse', lg: 'row' }} gap={{ base: 10, lg: 20 }}>
                <PortableText
                  components={ptComponentsBlack}
                  value={testimonialsTestimonial13}
                />
                <Image h={{ base: '50px', lg: '125px' }} minW={{ base: '100px', lg: '300px' }} objectFit="contain" src={urlFor(testimonialsLogo13)} />
              </Stack>
            </VStack>
          </Box>
        </Container>
      </Box>

      <Box>
        <Container>
          <VStack mt={{ base: 16, xs: 20, md: 28 }}>
            <H3 color="black">{awardsHeading}</H3>
          </VStack>
        </Container>

        <Container>
          <Stack alignItems="center" direction={{ base: 'column', md: 'row' }} justifyContent="center" mt={12} spaceX={{ base: 0, md: 8 }} spaceY={{ base: 4, md: 0 }}>
            <Link href={awardsAward1Link} rel="noopener noreferrer" target="_blank">
              <Image alt="award logo 1" h="125px" maxW="200px" minW="200px" objectFit="contain" src={urlFor(awardsAward1Image)} />
            </Link>
            <Link href={awardsAward2Link} rel="noopener noreferrer" target="_blank">
              <Image alt="award logo 2" h="125px" maxW="200px" minW="200px" objectFit="contain" src={urlFor(awardsAward2Image)} />
            </Link>
            <Link href={awardsAward3Link} rel="noopener noreferrer" target="_blank">
              <Image alt="award logo 3" h="125px" maxW="200px" minW="200px" objectFit="contain" src={urlFor(awardsAward3Image)} />
            </Link>
            <Link href={awardsAward4Link} rel="noopener noreferrer" target="_blank">
              <Image alt="award logo 4" h="125px" maxW="200px" minW="200px" objectFit="contain" src={urlFor(awardsAward4Image)} />
            </Link>
          </Stack>

          <Box bgColor="#232323" color="white" mt={{ base: 16, xs: 20, md: 28 }} p={20}>
            <VStack spaceY={8}>
              <H3>{processHeading}</H3>
              <P4>{processParagraph}</P4>
            </VStack>

            <VStack alignItems="start" mt={{ base: 16, xs: 20, md: 28 }} spaceY={10}>
              <Stack direction={{ base: 'column', md: 'row' }} justifyContent="start" spaceX={{ base: 0, md: 20 }} spaceY={{ base: 10, md: 0 }}>
                <Image h="100px" minW="100px" objectFit="contain" src={urlFor(processStep1Icon)} />
                <VStack alignItems="start" spaceY={2}>
                  <P4 uppercase weight={700}>{processStep1Heading}</P4>
                  <P4>{processStep1Paragraph}</P4>
                </VStack>
              </Stack>
              <Stack direction={{ base: 'column', md: 'row' }} justifyContent="start" spaceX={{ base: 0, md: 20 }} spaceY={{ base: 10, md: 0 }}>
                <Image h="100px" minW="100px" objectFit="contain" src={urlFor(processStep2Icon)} />
                <VStack alignItems="start" spaceY={2}>
                  <P4 uppercase weight={700}>{processStep2Heading}</P4>
                  <P4>{processStep2Paragraph}</P4>
                </VStack>
              </Stack>
              <Stack direction={{ base: 'column', md: 'row' }} justifyContent="start" spaceX={{ base: 0, md: 20 }} spaceY={{ base: 10, md: 0 }}>
                <Image h="100px" minW="100px" objectFit="contain" src={urlFor(processStep3Icon)} />
                <VStack alignItems="start" spaceY={2}>
                  <P4 uppercase weight={700}>{processStep3Heading}</P4>
                  <P4>{processStep3Paragraph}</P4>
                </VStack>
              </Stack>
              <Stack direction={{ base: 'column', md: 'row' }} justifyContent="start" spaceX={{ base: 0, md: 20 }} spaceY={{ base: 10, md: 0 }}>
                <Image h="100px" minW="100px" objectFit="contain" src={urlFor(processStep4Icon)} />
                <VStack alignItems="start" spaceY={2}>
                  <P4 uppercase weight={700}>{processStep4Heading}</P4>
                  <P4>{processStep4Paragraph}</P4>
                </VStack>
              </Stack>
              <Stack direction={{ base: 'column', md: 'row' }} justifyContent="start" spaceX={{ base: 0, md: 20 }} spaceY={{ base: 10, md: 0 }}>
                <Image h="100px" minW="100px" objectFit="contain" src={urlFor(processStep5Icon)} />
                <VStack alignItems="start" spaceY={2}>
                  <P4 uppercase weight={700}>{processStep5Heading}</P4>
                  <P4>{processStep5Paragraph}</P4>
                </VStack>
              </Stack>
            </VStack>
          </Box>

          <Stack direction={{ base: 'column', lg: 'row' }} gap={0}>
            <Box
              bgImage={`url(${urlFor(commitmentImage)})`}
              bgPos="center"
              bgSize="cover"
              color="white"
              h={{ base: '400px', lg: '500px' }}
              position="relative"
              w="100%"
            >
              <Box bgColor="rgba(0, 0, 0, 0.6)" h="100%" position="absolute" w="100%" />
              <VStack p={{ base: 10, sm: 20 }} position="relative">
                <H3>{commitmentHeading}</H3>
                <Box mt={{ base: 0, sm: 10 }}>
                  <PortableText
                    components={ptComponentsWhite}
                    value={commitmentBody}
                  />
                </Box>
              </VStack>
            </Box>
            <Box
              bgImage={`url(${urlFor(setsUsApartImage)})`}
              bgPos="center"
              bgSize="cover"
              color="white"
              h={{ base: '600', xs: '500px' }}
              position="relative"
              w="100%"
            >
              <Box bgColor="rgba(0, 0, 0, 0.6)" h="100%" position="absolute" w="100%" />
              <VStack p={{ base: 10, sm: 20 }} position="relative">
                <H3>{setsUsApartHeading}</H3>
                <Box mt={{ base: 0, sm: 10 }}>
                  <PortableText
                    components={ptComponentsWhite}
                    value={setsUsApartBody}
                  />
                </Box>
              </VStack>
            </Box>
          </Stack>
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
  awardsHeading,
  awardsAward1Image,
  awardsAward1Link,
  awardsAward2Image,
  awardsAward2Link,
  awardsAward3Image,
  awardsAward3Link,
  awardsAward4Image,
  awardsAward4Link,
  processHeading,
  processParagraph,
  processStep1Heading,
  processStep1Paragraph,
  processStep1Icon,
  processStep2Heading,
  processStep2Paragraph,
  processStep2Icon,
  processStep3Heading,
  processStep3Paragraph,
  processStep3Icon,
  processStep4Heading,
  processStep4Paragraph,
  processStep4Icon,
  processStep5Heading,
  processStep5Paragraph,
  processStep5Icon,
  commitmentHeading,
  commitmentBody,
  commitmentImage,
  setsUsApartHeading,
  setsUsApartBody,
  setsUsApartImage,
}`

export async function getStaticProps() {
  const props = await client.fetch(query)
  return { props, revalidate: 10 }
}

export default WhyChooseUs
