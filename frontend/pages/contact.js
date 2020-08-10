import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import Banner from '../components/Contact/Banner'
import ContactForm from '../components/Contact/ContactForm'
import Owner from '../components/Contact/Owner'
import Location from '../components/Contact/Location'

const contact = ({
    bannerHeading,
    bannerParagraph,
    bannerPhoto,
    contactHeading,
    contactParagraph,
    ownerHeading,
    ownerParagraph,
    ownerNumber,
    ownerEmail,
    ownerPhoto,
    locationHeading,
    locationParagraph1,
    locationParagraph2,
}) => {
    return (
        <>
            <Banner
                bannerHeading={bannerHeading}
                bannerParagraph={bannerParagraph}
                bannerPhoto={urlFor(bannerPhoto)}
            />
            <ContactForm
                contactHeading={contactHeading}
                contactParagraph={contactParagraph}
            />
            <Owner
                ownerHeading={ownerHeading}
                ownerParagraph={ownerParagraph}
                ownerNumber={ownerNumber}
                ownerEmail={ownerEmail}
                ownerPhoto={urlFor(ownerPhoto)}
            />
            <Location
                locationHeading={locationHeading}
                locationParagraph1={locationParagraph1}
                locationParagraph2={locationParagraph2}
            />
        </>
    )
}

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const query = groq`*[_type == "contact" && slug.current == "v1"][0]{
    bannerHeading,
    bannerParagraph,
    bannerPhoto,
    contactHeading,
    contactParagraph,
    ownerHeading,
    ownerParagraph,
    ownerNumber,
    ownerEmail,
    ownerPhoto,
    locationHeading,
    locationParagraph1,
    locationParagraph2,
}`

contact.getInitialProps = async function () {
    return await client.fetch(query)
}

export default contact
