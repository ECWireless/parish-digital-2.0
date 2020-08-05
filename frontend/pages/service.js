import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import Description from '../components/Service/Description'
import Features from '../components/Service/Features'
import Details from '../components/Service/Details'

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
    details1Heading,
    details1ParagraphMobile,
    details1Paragraph1,
    details1Paragraph2,
    details1Photo,
    details2Heading,
    details2ParagraphMobile,
    details2Paragraph1,
    details2Paragraph2,
    details2Photo,
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
            <CustomFlex>
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
                <Details
                    details1Heading={details1Heading}
                    details1ParagraphMobile={details1ParagraphMobile}
                    details1Paragraph1={details1Paragraph1}
                    details1Paragraph2={details1Paragraph2}
                    details1Photo={urlFor(details1Photo)}
                    details2Heading={details2Heading}
                    details2ParagraphMobile={details2ParagraphMobile}
                    details2Paragraph1={details2Paragraph1}
                    details2Paragraph2={details2Paragraph2}
                    details2Photo={urlFor(details2Photo)}
                />
            </CustomFlex>
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
    details1Heading,
    details1ParagraphMobile,
    details1Paragraph1,
    details1Paragraph2,
    details1Photo,
    details2Heading,
    details2ParagraphMobile,
    details2Paragraph1,
    details2Paragraph2,
    details2Photo,
}`

service.getInitialProps = async function () {
    return await client.fetch(query)
}

export default service

const CustomFlex = styled.div`
    display: flex;
    flex-direction: column-reverse;

    ${respondTo.lg`
        display: flex;
        flex-direction: column;
    `}
`
