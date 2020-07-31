import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import Hero from '../components/Home/Hero'
import Description from '../components/Home/Description'

const index = ({ heroImage, heroHeading, heroSubheading }) => {
    return (
        <>
            <Hero
                heroImage={urlFor(heroImage)}
                heroHeading={heroHeading}
                heroSubheading={heroSubheading}
            />
            <Description />
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
}`

index.getInitialProps = async function () {
    return await client.fetch(query)
}

export default index
