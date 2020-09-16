import Head from 'next/head'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import Details from '../components/Virtual/Details'
import Description from '../components/Virtual/Description'
import Banner from '../components/Virtual/Banner'
import ContactForm from '../components/Virtual/ContactForm'

const virtual = ({
    detailsMainIcon,
    detailsHeading,
    detailsSubheading,
    detailsCard1Icon,
    detailsCard1Heading,
    detailsCard1Paragraph,
    detailsCard2Icon,
    detailsCard2Heading,
    detailsCard2Paragraph,
    detailsCard3Icon,
    detailsCard3Heading,
    detailsCard3Paragraph,
    descriptionImage,
    descriptionBodyText,
    bannerListItem1,
    bannerListItem2,
    bannerListItem3,
    bannerListItem4,
    bannerListItem5,
    bannerListItem6,
    bannerListItem7,
    bannerListItem8,
    bannerListItem9,
    bannerListItem10,
    bannerListItem11,
    bannerListItem12,
    contactFormHeading,
    contactFormSubheading,
}) => {
    return (
        <>
            <Head>
                <title>Virtual Events | Parish Digital Video Production</title>
            </Head>
            <Details
                detailsMainIcon={urlFor(detailsMainIcon)}
                detailsHeading={detailsHeading}
                detailsSubheading={detailsSubheading}
                detailsCard1Icon={urlFor(detailsCard1Icon)}
                detailsCard1Heading={detailsCard1Heading}
                detailsCard1Paragraph={detailsCard1Paragraph}
                detailsCard2Icon={urlFor(detailsCard2Icon)}
                detailsCard2Heading={detailsCard2Heading}
                detailsCard2Paragraph={detailsCard2Paragraph}
                detailsCard3Icon={urlFor(detailsCard3Icon)}
                detailsCard3Heading={detailsCard3Heading}
                detailsCard3Paragraph={detailsCard3Paragraph}
            />
            <Description
                descriptionImage={urlFor(descriptionImage)}
                descriptionBodyText={descriptionBodyText}
            />
            <Banner
                bannerListItem1={bannerListItem1}
                bannerListItem2={bannerListItem2}
                bannerListItem3={bannerListItem3}
                bannerListItem4={bannerListItem4}
                bannerListItem5={bannerListItem5}
                bannerListItem6={bannerListItem6}
                bannerListItem7={bannerListItem7}
                bannerListItem8={bannerListItem8}
                bannerListItem9={bannerListItem9}
                bannerListItem10={bannerListItem10}
                bannerListItem11={bannerListItem11}
                bannerListItem12={bannerListItem12}
            />
            <ContactForm
                contactFormHeading={contactFormHeading}
                contactFormSubheading={contactFormSubheading}
            />
        </>
    )
}

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const query = groq`*[_type == "virtual" && slug.current == "v1"][0]{
    detailsMainIcon,
    detailsHeading,
    detailsSubheading,
    detailsCard1Icon,
    detailsCard1Heading,
    detailsCard1Paragraph,
    detailsCard2Icon,
    detailsCard2Heading,
    detailsCard2Paragraph,
    detailsCard3Icon,
    detailsCard3Heading,
    detailsCard3Paragraph,
    descriptionImage,
    descriptionBodyText,
    bannerListItem1,
    bannerListItem2,
    bannerListItem3,
    bannerListItem4,
    bannerListItem5,
    bannerListItem6,
    bannerListItem7,
    bannerListItem8,
    bannerListItem9,
    bannerListItem10,
    bannerListItem11,
    bannerListItem12,
    contactFormHeading,
    contactFormSubheading,
}`

virtual.getInitialProps = async function () {
    return await client.fetch(query)
}

export default virtual
