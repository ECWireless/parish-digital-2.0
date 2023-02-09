import Head from 'next/head'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from 'client'

import Description from 'components/Service/Description'
// import Reviews from 'components/Service/Reviews'
import Services from 'components/Service/Services'
import ContactForm from 'components/Contact/ContactForm'

const Service = ({
  heading,
  subheading,
  descriptionHeading,
  descriptionPhoto,
  descriptionParagraph1,
  descriptionParagraph2,
  servicesPhoto1,
  servicesSubheading1,
  servicesDescription1,
  servicesVideoLink1,
  servicesPhoto2,
  servicesSubheading2,
  servicesDescription2,
  servicesVideoLink2,
  servicesPhoto3,
  servicesSubheading3,
  servicesDescription3,
  servicesVideoLink3,
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
        servicesPhoto1={urlFor(servicesPhoto1).auto('format')}
        servicesSubheading1={servicesSubheading1}
        servicesDescription1={servicesDescription1}
        servicesVideoLink1={servicesVideoLink1}
        servicesPhoto2={urlFor(servicesPhoto2).auto('format')}
        servicesSubheading2={servicesSubheading2}
        servicesDescription2={servicesDescription2}
        servicesVideoLink2={servicesVideoLink2}
        servicesPhoto3={urlFor(servicesPhoto3).auto('format')}
        servicesSubheading3={servicesSubheading3}
        servicesDescription3={servicesDescription3}
        servicesVideoLink3={servicesVideoLink3}
      />
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

const query = groq`*[_type == "service" && slug.current == "v1"][0]{
  heading,
  subheading,
  descriptionHeading,
  descriptionPhoto,
  descriptionParagraph1,
  descriptionParagraph2,
  servicesPhoto1,
  servicesSubheading1,
  servicesDescription1,
  servicesVideoLink1,
  servicesPhoto2,
  servicesSubheading2,
  servicesDescription2,
  servicesVideoLink2,
  servicesPhoto3,
  servicesSubheading3,
  servicesDescription3,
  servicesVideoLink3,
}`

export async function getServerSideProps() {
  const props = await client.fetch(query)
  return { props }
}

export default Service
