import Head from 'next/head'
import groq from 'groq'
import client from '../client'

// import Banner from '../components/Contact/Banner'
import ContactForm from '../components/Contact/ContactForm'

const contact = ({
  // bannerHeading,
  // bannerParagraph,
  // ownerNumber,
  // ownerEmail,
  contactHeading,
  contactParagraph,
}) => {
  return (
    <>
      <Head>
        <title>Contact | Parish Digital Video Production</title>
      </Head>
      {/* <Banner
        bannerHeading={bannerHeading}
        bannerParagraph={bannerParagraph}
        ownerNumber={ownerNumber}
        ownerEmail={ownerEmail}
      /> */}
      <ContactForm
        contactHeading={contactHeading}
        contactParagraph={contactParagraph}
      />
    </>
  )
}

const query = groq`*[_type == "contact" && slug.current == "v1"][0]{
  bannerHeading,
  bannerParagraph,
  contactHeading,
  contactParagraph,
  ownerNumber,
  ownerEmail,
}`

contact.getInitialProps = async function () {
  return await client.fetch(query)
}

export default contact
