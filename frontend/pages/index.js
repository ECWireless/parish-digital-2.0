import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import Hero from '../components/Home/Hero'
import Description from '../components/Home/Description'
import Features from '../components/Home/Features'

const index = ({
    heroImage,
    heroHeading,
    heroSubheading,
    descriptionHeading,
    descriptionParagraph1,
    descriptionParagraph2,
    descriptionVideoType1,
    descriptionVideoType1Details,
    descriptionVideoType2,
    descriptionVideoType2Details,
    descriptionVideoType3,
    descriptionVideoType3Details,
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
                descriptionVideoType2={descriptionVideoType2}
                descriptionVideoType2Details={descriptionVideoType2Details}
                descriptionVideoType3={descriptionVideoType3}
                descriptionVideoType3Details={descriptionVideoType3Details}
            />
            <Features />
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
    descriptionVideoType2,
    descriptionVideoType2Details,
    descriptionVideoType3,
    descriptionVideoType3Details,
}`

index.getInitialProps = async function () {
    return await client.fetch(query)
}

export default index
