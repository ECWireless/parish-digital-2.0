import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import Head from 'next/head'

import client from '../client'

// Components
import Hero from '../components/Home/Hero'
import Description from '../components/Home/Description'
import Trusted from '../components/Home/Trusted'
import Feature from '../components/Home/Feature'
import Services from '../components/Home/Services'
import Reviews from '../components/Home/Reviews'

const index = ({
    heroImage,
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
    trustedHeading,
    trustedLogo1,
    trustedLogo2,
    trustedLogo3,
    trustedLogo4,
    trustedLogo5,
    trustedLogo6,
    featureHeading,
    featureSubheading,
    featureParagraph,
    featureButton,
    featurePhoto,
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
}) => {
    return (
        <>
            <Head>
                <title>PD Video | Pittsburgh Video Production Company</title>
            </Head>
            <Hero
                heroImage={urlFor(heroImage)}
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
                descriptionVideoType1Photo={urlFor(descriptionVideoType1Photo)}
                descriptionVideoType2={descriptionVideoType2}
                descriptionVideoType2Details={descriptionVideoType2Details}
                descriptionVideoType2Photo={urlFor(descriptionVideoType2Photo)}
                descriptionVideoType3={descriptionVideoType3}
                descriptionVideoType3Details={descriptionVideoType3Details}
                descriptionVideoType3Photo={urlFor(descriptionVideoType3Photo)}
            />
            <Trusted
                trustedHeading={trustedHeading}
                trustedLogo1={urlFor(trustedLogo1)}
                trustedLogo2={urlFor(trustedLogo2)}
                trustedLogo3={urlFor(trustedLogo3)}
                trustedLogo4={urlFor(trustedLogo4)}
                trustedLogo5={urlFor(trustedLogo5)}
                trustedLogo6={urlFor(trustedLogo6)}
            />
            <Feature
                featureHeading={featureHeading}
                featureSubheading={featureSubheading}
                featureParagraph={featureParagraph}
                featureButton={featureButton}
                featurePhoto={urlFor(featurePhoto)}
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
                servicesPhoto1={urlFor(servicesPhoto1)}
                servicesSubheading2={servicesSubheading2}
                servicesList2Item1={servicesList2Item1}
                servicesList2Item2={servicesList2Item2}
                servicesList2Item3={servicesList2Item3}
                servicesList2Item4={servicesList2Item4}
                servicesList2Item5={servicesList2Item5}
                servicesList2Item6={servicesList2Item6}
                servicesPhoto2={urlFor(servicesPhoto2)}
            />
            <Reviews
                reviewsHeading={reviewsHeading}
                reviewsSubheading={reviewsSubheading}
                reviewsPhoto={urlFor(reviewsPhoto)}
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
            />
        </>
    )
}

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const query = groq`*[_type == "home" && slug.current == "v1"][0]{
    heroImage,
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
    trustedHeading,
    trustedLogo1,
    trustedLogo2,
    trustedLogo3,
    trustedLogo4,
    trustedLogo5,
    trustedLogo6,
    featureHeading,
    featureSubheading,
    featureParagraph,
    featureButton,
    featurePhoto,
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
}`

index.getInitialProps = async function () {
    return await client.fetch(query)
}

export default index
