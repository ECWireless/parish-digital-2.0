import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

// Components
import Banner from '../components/About/Banner'
import Story from '../components/About/Story'
import Expertise from '../components/About/Expertise'

const about = ({
    bannerHeading,
    bannerParagraph,
    bannerPhoto,
    storyHeading1,
    storyParagraph1,
    storyParagraph2,
    storyHeading2,
    storyParagraph3,
    storyParagraph4,
    storyPhoto,
    expertiseHeading,
    expertiseParagraph,
}) => {
    return (
        <>
            <Banner
                bannerHeading={bannerHeading}
                bannerParagraph={bannerParagraph}
                bannerPhoto={urlFor(bannerPhoto)}
            />
            <Story
                storyHeading1={storyHeading1}
                storyParagraph1={storyParagraph1}
                storyParagraph2={storyParagraph2}
                storyHeading2={storyHeading2}
                storyParagraph3={storyParagraph3}
                storyParagraph4={storyParagraph4}
                storyPhoto={urlFor(storyPhoto)}
            />

            <Expertise
                expertiseHeading={expertiseHeading}
                expertiseParagraph={expertiseParagraph}
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
    storyHeading1,
    storyParagraph1,
    storyParagraph2,
    storyHeading2,
    storyParagraph3,
    storyParagraph4,
    storyPhoto,
    expertiseHeading,
    expertiseParagraph,
}`

about.getInitialProps = async function () {
    return await client.fetch(query)
}

export default about
