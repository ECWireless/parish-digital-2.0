import { useState } from 'react';
import styled from 'styled-components';
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import Head from 'next/head'

import client from 'client'

import Hero from 'components/Home/Hero'
import Description from 'components/Home/Description'
import Examples from 'components/Home/Examples'
import Services from 'components/Home/Services'
import Trusted from 'components/Home/Trusted'
import ContactForm from 'components/Contact/ContactForm'
import Map from 'components/Map'
import Modal from 'components/Modal'
import respondTo from 'components/Breakpoints'

const Index = ({
  pageTitle,
  heroDemoReelLink,
  heroHeading,
  descriptionPhoto,
  heroSubheading,
  heroSubheading2,
  descriptionHeading,
  descriptionParagraph1,
  descriptionParagraph2,
  descriptionVideoType1,
  examplesLink1,
  examplesLink2,
  examplesLink3,
  examplesLink4,
  trustedHeading,
  trustedLogo1,
  trustedLogo2,
  trustedLogo3,
  trustedLogo4,
  trustedLogo5,
  trustedLogo6,
  trustedLogo7,
  trustedLogo8,
  trustedLogo9,
  trustedLogo10,
  servicesPhoto1,
  servicesSubheading1,
  servicesDescription1,
  servicesPhoto2,
  servicesSubheading2,
  servicesDescription2,
  servicesPhoto3,
  servicesSubheading3,
  servicesDescription3,
  locationHeading,
  locationParagraph1,
  locationParagraph2,
}) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Hero
        heroHeading={heroHeading}
        heroSubheading={heroSubheading}
        heroSubheading2={heroSubheading2}
        setModalOpen={setModalOpen}
      />
      <Description
        descriptionHeading={descriptionHeading}
        descriptionPhoto={urlFor(descriptionPhoto).auto('format')}
        descriptionParagraph1={descriptionParagraph1}
        descriptionParagraph2={descriptionParagraph2}
        descriptionVideoType1={descriptionVideoType1}
        trustedHeading={trustedHeading}
      />
      <Services
        servicesPhoto1={urlFor(servicesPhoto1).auto('format')}
        servicesSubheading1={servicesSubheading1}
        servicesDescription1={servicesDescription1}
        servicesPhoto2={urlFor(servicesPhoto2).auto('format')}
        servicesSubheading2={servicesSubheading2}
        servicesDescription2={servicesDescription2}
        servicesPhoto3={urlFor(servicesPhoto3).auto('format')}
        servicesSubheading3={servicesSubheading3}
        servicesDescription3={servicesDescription3}
      />
      <Trusted
        trustedLogo1={trustedLogo1 && urlFor(trustedLogo1).auto('format')}
        trustedLogo2={trustedLogo2 && urlFor(trustedLogo2).auto('format')}
        trustedLogo3={trustedLogo3 && urlFor(trustedLogo3).auto('format')}
        trustedLogo4={trustedLogo4 && urlFor(trustedLogo4).auto('format')}
        trustedLogo5={trustedLogo5 && urlFor(trustedLogo5).auto('format')}
        trustedLogo6={trustedLogo6 && urlFor(trustedLogo6).auto('format')}
        trustedLogo7={trustedLogo7 && urlFor(trustedLogo7).auto('format')}
        trustedLogo8={trustedLogo8 && urlFor(trustedLogo8).auto('format')}
        trustedLogo9={trustedLogo9 && urlFor(trustedLogo9).auto('format')}
        trustedLogo10={trustedLogo10 && urlFor(trustedLogo10).auto('format')}
      />
      <Examples
        examplesLink1={examplesLink1}
        examplesLink2={examplesLink2}
        examplesLink3={examplesLink3}
        examplesLink4={examplesLink4}
      />
      <ContactForm
        contactHeading={'Contact Us'}
        contactParagraph={'We can help bring your next project to life'}
      />
      <Map
        locationHeading={locationHeading}
        locationParagraph1={locationParagraph1}
        locationParagraph2={locationParagraph2}
      />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <StyledIFrame src={`https://player.vimeo.com/video/${heroDemoReelLink}?h=dbf0d01a15&title=0&byline=0&portrait=0`} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
      </Modal>
    </>
  )
}

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const query = groq`*[_type == "home" && slug.current == "v1"][0]{
  pageTitle,
  heroDemoReelLink,
  heroHeading,
  descriptionPhoto,
  heroSubheading,
  heroSubheading2,
  descriptionHeading,
  descriptionParagraph1,
  descriptionParagraph2,
  examplesLink1,
  examplesLink2,
  examplesLink3,
  examplesLink4,
  trustedHeading,
  trustedLogo1,
  trustedLogo2,
  trustedLogo3,
  trustedLogo4,
  trustedLogo5,
  trustedLogo6,
  trustedLogo7,
  trustedLogo8,
  trustedLogo9,
  trustedLogo10,
  servicesPhoto1,
  servicesSubheading1,
  servicesDescription1,
  servicesPhoto2,
  servicesSubheading2,
  servicesDescription2,
  servicesPhoto3,
  servicesSubheading3,
  servicesDescription3,
  locationHeading,
  locationParagraph1,
  locationParagraph2,
}`

export async function getStaticProps() {
  const props = await client.fetch(query)
  return { props, revalidate: 10 }
}

export default Index;

const StyledIFrame = styled.iframe`
  width: 256px;
  height: 144px;

  ${respondTo.xs`
    width: 320px;
    height: 180px;
  `}

  ${respondTo.sm`
    width: 640px;
    height: 360px;
  `}

  ${respondTo.md`
    width: 640px;
    height: 360px;
  `}

  ${respondTo.lg`
    width: 960px;
    height: 540px;
  `}

  ${respondTo.xl`
    width: 1280px;
    height: 720px;
  `}
`;
