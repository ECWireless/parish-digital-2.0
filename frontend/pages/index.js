import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import Hero from '../components/Home/Hero'
import Description from '../components/Home/Description'
import Feature from '../components/Home/Feature'
import Services from '../components/Home/Services'

const index = ({
    heroImage,
    heroHeading,
    heroSubheading,
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
}) => {
    return (
        <>
            <Hero
                heroImage={urlFor(heroImage)}
                heroHeading={heroHeading}
                heroSubheading={heroSubheading}
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
}`

index.getInitialProps = async function () {
    return await client.fetch(query)
}

export default index
