import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import Banner from '../components/Work/Banner'
import Feature from '../components/Work/Feature'

const work = ({
    bannerHeading,
    bannerParagraph,
    bannerPhoto,
    featureHeading,
    featureSubheading,
    featureParagraph1,
    featureParagraph2,
    featureLink,
}) => {
    return (
        <>
            <Banner  
                bannerHeading={bannerHeading}
                bannerParagraph={bannerParagraph}
                bannerPhoto={urlFor(bannerPhoto)}
            />
            <Feature
                featureHeading={featureHeading}
                featureSubheading={featureSubheading}
                featureParagraph1={featureParagraph1}
                featureParagraph2={featureParagraph2}
                featureLink={featureLink}
            />
        </>
    )
}

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const query = groq`*[_type == "work" && slug.current == "v1"][0]{
    bannerHeading,
    bannerParagraph,
    bannerPhoto,
    featureHeading,
    featureSubheading,
    featureParagraph1,
    featureParagraph2,
    featureLink,
}`

work.getInitialProps = async function () {
    return await client.fetch(query)
}

export default work
