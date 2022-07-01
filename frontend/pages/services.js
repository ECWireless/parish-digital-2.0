import Head from 'next/head'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

import Description from '../components/Service/Description'
// import Reviews from '../components/Service/Reviews'
import Services from '../components/Service/Services'
import ContactForm from '../components/Contact/ContactForm'

const Service = ({
  heading,
  subheading,
  descriptionHeading,
  descriptionPhoto,
  descriptionParagraph1,
  descriptionParagraph2,
  // reviewsHeading,
  // reviewsSubheading,
  // reviewsPhoto,
  // reviewsQuote1,
  // reviewsName1,
  // reviewsPosition1,
  // reviewsCompany1,
  // reviewsQuote2,
  // reviewsName2,
  // reviewsPosition2,
  // reviewsCompany2,
  // reviewsQuote3,
  // reviewsName3,
  // reviewsPosition3,
  // reviewsCompany3,
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
      {/* <Reviews
        reviewsHeading={reviewsHeading}
        reviewsSubheading={reviewsSubheading}
        reviewsPhoto={urlFor(reviewsPhoto).auto('format')}
        reviewsQuote1={reviewsQuote1}
        reviewsName1={reviewsName1}
        reviewsPosition1={reviewsPosition1}
        reviewsCompany1={reviewsCompany1}
        reviewsQuote2={reviewsQuote2}
        reviewsName2={reviewsName2}
        reviewsPosition2={reviewsPosition2}
        reviewsCompany2={reviewsCompany2}
        reviewsQuote3={reviewsQuote3}
        reviewsName3={reviewsName3}
        reviewsPosition3={reviewsPosition3}
        reviewsCompany3={reviewsCompany3}
      /> */}
      <Services
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
  reviewsHeading,
  reviewsSubheading,
  reviewsPhoto,
  reviewsQuote1,
  reviewsName1,
  reviewsPosition1,
  reviewsCompany1,
  reviewsQuote2,
  reviewsName2,
  reviewsPosition2,
  reviewsCompany2,
  reviewsQuote3,
  reviewsName3,
  reviewsPosition3,
  reviewsCompany3,
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

Service.getInitialProps = async function () {
  return await client.fetch(query)
}

export default Service
