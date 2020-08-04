import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import Banner from '../components/About/Banner'

const about = ({
    bannerHeading,
    bannerParagraph,
    bannerPhoto,
}) => {
    return (
        <>
            <Banner
                bannerHeading={bannerHeading}
                bannerParagraph={bannerParagraph}
                bannerPhoto={urlFor(bannerPhoto)}
            />
        </>
    )
}

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

const query = groq`*[_type == "about" && slug.current == "v1"][0]{
    bannerHeading,
    bannerParagraph,
    bannerPhoto,
}`

about.getInitialProps = async function () {
    return await client.fetch(query)
}

export default about
