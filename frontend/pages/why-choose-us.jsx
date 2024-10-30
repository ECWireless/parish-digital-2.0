import Head from 'next/head';

import ContactForm from 'components/Contact/ContactForm'

const WhyChooseUs = () => {
  return (
    <>
      <Head>
        <title>Why Choose Us | Parish Digital Video Production</title>
      </Head>
      <ContactForm
        contactHeading={'Contact Us'}
        contactParagraph={'We can help bring your next project to life'}
      />
    </>
  )
}

export default WhyChooseUs
