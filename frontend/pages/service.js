import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import Description from '../components/Service/Description'
import Features from '../components/Service/Features'

const service = ({
    descriptionHeading,
    descriptionVideoLink,
    descriptionParagraph1,
    descriptionParagraph2,
    descriptionButtonText,
    feature1Icon,
    feature1Heading,
    feature1Paragraph,
    feature1ButtonText,
    feature1Link,
    feature2Icon,
    feature2Heading,
    feature2Paragraph,
    feature2ButtonText,
    feature2Link,
    feature3Icon,
    feature3Heading,
    feature3Paragraph,
    feature3ButtonText,
    feature3Link,
}) => {
    return (
        <>
            <Description
                descriptionHeading={descriptionHeading}
                descriptionVideoLink={descriptionVideoLink}
                descriptionParagraph1={descriptionParagraph1}
                descriptionParagraph2={descriptionParagraph2}
                descriptionButtonText={descriptionButtonText}
            />
            <Features
                feature1Icon={urlFor(feature1Icon)}
                feature1Heading={feature1Heading}
                feature1Paragraph={feature1Paragraph}
                feature1ButtonText={feature1ButtonText}
                feature1Link={feature1Link}
                feature2Icon={urlFor(feature2Icon)}
                feature2Heading={feature2Heading}
                feature2Paragraph={feature2Paragraph}
                feature2ButtonText={feature2ButtonText}
                feature2Link={feature2Link}
                feature3Icon={urlFor(feature3Icon)}
                feature3Heading={feature3Heading}
                feature3Paragraph={feature3Paragraph}
                feature3ButtonText={feature3ButtonText}
                feature3Link={feature3Link}
            />
        </>
    )
}

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const query = groq`*[_type == "service" && slug.current == "v1"][0]{
    descriptionHeading,
    descriptionVideoLink,
    descriptionParagraph1,
    descriptionParagraph2,
    descriptionButtonText,
    feature1Icon,
    feature1Heading,
    feature1Paragraph,
    feature1ButtonText,
    feature1Link,
    feature2Icon,
    feature2Heading,
    feature2Paragraph,
    feature2ButtonText,
    feature2Link,
    feature3Icon,
    feature3Heading,
    feature3Paragraph,
    feature3ButtonText,
    feature3Link,
}`

service.getInitialProps = async function () {
    return await client.fetch(query)
}

export default service
