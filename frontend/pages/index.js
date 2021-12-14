import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import Head from 'next/head'

import client from '../client'

import Hero from '../components/Home/Hero'
import Description from '../components/Home/Description'
import Examples from '../components/Home/Examples'
import Trusted from '../components/Home/Trusted'
import Services from '../components/Home/Services'

const index = ({
  pageTitle,
  heroDemoReelLink,
  heroHeading,
  heroSubheading,
  heroSubheading2,
  descriptionHeading,
  descriptionParagraph1,
  descriptionParagraph2,
  descriptionVideoType1,
  descriptionVideoType1Details,
  descriptionVideoType1Photo,
  descriptionVideoType2,
  descriptionVideoType2Details,
  descriptionVideoType2Photo,
  descriptionVideoType3,
  descriptionVideoType3Details,
  descriptionVideoType3Photo,
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
      />
      <Description
        descriptionHeading={descriptionHeading}
        descriptionParagraph1={descriptionParagraph1}
        descriptionParagraph2={descriptionParagraph2}
        descriptionVideoType1={descriptionVideoType1}
        descriptionVideoType1Details={descriptionVideoType1Details}
        descriptionVideoType1Photo={urlFor(descriptionVideoType1Photo).auto('format')}
        descriptionVideoType2={descriptionVideoType2}
        descriptionVideoType2Details={descriptionVideoType2Details}
        descriptionVideoType2Photo={urlFor(descriptionVideoType2Photo).auto('format')}
        descriptionVideoType3={descriptionVideoType3}
        descriptionVideoType3Details={descriptionVideoType3Details}
        descriptionVideoType3Photo={urlFor(descriptionVideoType3Photo).auto('format')}
      />
      <Trusted
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
  heroSubheading,
  heroSubheading2,
  descriptionHeading,
  descriptionParagraph1,
  descriptionParagraph2,
  descriptionVideoType1,
  descriptionVideoType1Details,
  descriptionVideoType1Photo,
  descriptionVideoType2,
  descriptionVideoType2Details,
  descriptionVideoType2Photo,
  descriptionVideoType3,
  descriptionVideoType3Details,
  descriptionVideoType3Photo,
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

export default index
