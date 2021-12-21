import { useState } from 'react';
import styled from 'styled-components';
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import Head from 'next/head'

import client from '../client'

import Hero from '../components/Home/Hero'
import Description from '../components/Home/Description'
import Examples from '../components/Home/Examples'
import Services from '../components/Home/Services'
import ContactForm from '../components/Contact/ContactForm'
import Map from '../components/Map'
import Modal from '../components/Modal'
import respondTo from '../components/Breakpoints'

const index = ({
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
  servicesHeading,
  servicesSubheading1,
  servicesList1Item1,
  servicesList1Item2,
  servicesList1Item3,
  servicesList1Item4,
  servicesList1Item5,
  servicesList1Item6,
  servicesList1Item7,
  servicesList1Item8,
  servicesList1Item9,
  servicesPhoto1,
  servicesSubheading2,
  servicesList2Item1,
  servicesList2Item2,
  servicesList2Item3,
  servicesList2Item4,
  servicesList2Item5,
  servicesList2Item6,
  servicesPhoto2,
}) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Head>
          <title>{pageTitle}</title>
      </Head>
      <Hero
        heroDemoReelLink={heroDemoReelLink}
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
        trustedLogo1={urlFor(trustedLogo1).auto('format')}
        trustedLogo2={urlFor(trustedLogo2).auto('format')}
        trustedLogo3={urlFor(trustedLogo3).auto('format')}
        trustedLogo4={urlFor(trustedLogo4).auto('format')}
        trustedLogo5={urlFor(trustedLogo5).auto('format')}
        trustedLogo6={urlFor(trustedLogo6).auto('format')}
      />
      <Examples
        examplesLink1={examplesLink1}
        examplesLink2={examplesLink2}
        examplesLink3={examplesLink3}
        examplesLink4={examplesLink4}
      />
      <Services
        servicesHeading={servicesHeading}
        servicesSubheading1={servicesSubheading1}
        servicesList1Item1={servicesList1Item1}
        servicesList1Item2={servicesList1Item2}
        servicesList1Item3={servicesList1Item3}
        servicesList1Item4={servicesList1Item4}
        servicesList1Item5={servicesList1Item5}
        servicesList1Item6={servicesList1Item6}
        servicesList1Item7={servicesList1Item7}
        servicesList1Item8={servicesList1Item8}
        servicesList1Item9={servicesList1Item9}
        servicesPhoto1={urlFor(servicesPhoto1).auto('format')}
        servicesSubheading2={servicesSubheading2}
        servicesList2Item1={servicesList2Item1}
        servicesList2Item2={servicesList2Item2}
        servicesList2Item3={servicesList2Item3}
        servicesList2Item4={servicesList2Item4}
        servicesList2Item5={servicesList2Item5}
        servicesList2Item6={servicesList2Item6}
        servicesPhoto2={urlFor(servicesPhoto2).auto('format')}
      />
      <ContactForm
        contactHeading={'Contact Us'}
        contactParagraph={'We can help bring your next project to life'}
      />
      <Map />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <StyledIFrame src="https://player.vimeo.com/video/486986897?h=dbf0d01a15&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
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
  servicesHeading,
  servicesSubheading1,
  servicesList1Item1,
  servicesList1Item2,
  servicesList1Item3,
  servicesList1Item4,
  servicesList1Item5,
  servicesList1Item6,
  servicesList1Item7,
  servicesList1Item8,
  servicesList1Item9,
  servicesPhoto1,
  servicesSubheading2,
  servicesList2Item1,
  servicesList2Item2,
  servicesList2Item3,
  servicesList2Item4,
  servicesList2Item5,
  servicesList2Item6,
  servicesPhoto2,
}`

index.getInitialProps = async function () {
  return await client.fetch(query)
}

export default index;

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
