import Head from 'next/head'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

import Description from '../components/Service/Description'
import Services from '../components/Service/Services'

const service = ({
  heading,
  subheading,
  descriptionHeading,
  descriptionPhoto,
  descriptionParagraph1,
  descriptionParagraph2,
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
        <title>Services | Parish Digital Video Production</title>
      </Head>
      <Description
        heading={heading}
        subheading={subheading}
        descriptionHeading={descriptionHeading}
        descriptionPhoto={urlFor(descriptionPhoto).auto('format')}
        descriptionParagraph1={descriptionParagraph1}
        descriptionParagraph2={descriptionParagraph2}
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

const query = groq`*[_type == "service" && slug.current == "v1"][0]{
  heading,
  subheading,
  descriptionHeading,
  descriptionPhoto,
  descriptionParagraph1,
  descriptionParagraph2,
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

service.getInitialProps = async function () {
  return await client.fetch(query)
}

export default service
