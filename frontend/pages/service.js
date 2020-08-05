import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import Description from '../components/Service/Description'

const service = ({
    descriptionHeading,
    descriptionVideoLink,
    descriptionParagraph1,
    descriptionParagraph2,
    descriptionButtonText,
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
}`

service.getInitialProps = async function () {
    return await client.fetch(query)
}

export default service
