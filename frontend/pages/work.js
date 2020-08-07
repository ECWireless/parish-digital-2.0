import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import Banner from '../components/Work/Banner'

const work = ({
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

const query = groq`*[_type == "work" && slug.current == "v1"][0]{
    bannerHeading,
    bannerParagraph,
    bannerPhoto
}`

work.getInitialProps = async function () {
    return await client.fetch(query)
}

export default work
