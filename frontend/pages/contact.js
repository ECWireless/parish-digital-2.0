import Head from 'next/head'
import groq from 'groq'
import client from 'client'

// import Banner from '../components/Contact/Banner'
import ContactFormNew from 'components/Contact/ContactFormNew'

const Contact = ({
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
      <ContactFormNew
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

export async function getStaticProps() {
  const props = await client.fetch(query)
  return { props, revalidate: 10 }
}

export default Contact
