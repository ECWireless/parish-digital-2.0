import Head from 'next/head'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import Banner from '../components/Work/Banner'
import Feature from '../components/Work/Feature'
import Details from '../components/Work/Details'
import Examples from '../components/Work/Examples'

const work = ({
    bannerHeading,
    bannerParagraph,
    bannerPhoto,
    featureHeading,
    featureSubheading,
    featureParagraph1,
    featureParagraph2,
    featureLink,
    detail1Heading,
    detail1Paragraph,
    detail1Link,
    detail2Heading,
    detail2Paragraph,
    detail2Link,
    detail3Heading,
    detail3Paragraph,
    detail3Link,
    exampleHeading,
    exampleParagraph,
    example1Link,
    example2Link,
    example3Link,
    example4Link,
    example5Link,
    example6Link,
    example7Link,
}) => {
    return (
        <>
            <Head>
                <title>Work | Parish Digital Video Production</title>
            </Head>
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
            <Details
                detail1Heading={detail1Heading}
                detail1Paragraph={detail1Paragraph}
                detail1Link={detail1Link}
                detail2Heading={detail2Heading}
                detail2Paragraph={detail2Paragraph}
                detail2Link={detail2Link}
                detail3Heading={detail3Heading}
                detail3Paragraph={detail3Paragraph}
                detail3Link={detail3Link}
            />
            <Examples
                exampleHeading={exampleHeading}
                exampleParagraph={exampleParagraph}
                example1Link={example1Link}
                example2Link={example2Link}
                example3Link={example3Link}
                example4Link={example4Link}
                example5Link={example5Link}
                example6Link={example6Link}
                example7Link={example7Link}
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
    detail1Heading,
    detail1Paragraph,
    detail1Link,
    detail2Heading,
    detail2Paragraph,
    detail2Link,
    detail3Heading,
    detail3Paragraph,
    detail3Link,
    exampleHeading,
    exampleParagraph,
    example1Link,
    example2Link,
    example3Link,
    example4Link,
    example5Link,
    example6Link,
    example7Link,
}`

work.getInitialProps = async function () {
    return await client.fetch(query)
}

export default work
